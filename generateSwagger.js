import path from "path";
import fg from "fast-glob"; // Use fast-glob to match files
import fs from "fs"; // To handle file operations

// Define the glob pattern to match all route files under src/app/api and its subfolders
const routesPattern = "./src/app/api/**/*.js"; 
// Define the output path for Swagger JSON
const outputFile = path.resolve("public/swagger-output.json"); // Output the JSON file to the public folder

// Swagger documentation template
const doc = {
  swagger: "2.0", // Swagger version
  info: {
    title: "My API", // Your API title
    description: "Description of the API", // API description
    version: "1.0.0", // API version
  },
  host: "localhost:3000", // Replace with your server's host if necessary
  basePath: "/",
  schemes: ["http"], // HTTP or HTTPS depending on your setup
  paths: {}, // Placeholder for API paths
};

// Function to process all route files and generate Swagger JSON
async function generateSwaggerJson() {
  try {
    // Find all route files based on the glob pattern
    const files = await fg(routesPattern);
    console.log("Matched files:", files); // Log matched files

    if (files.length === 0) {
      console.log("No route files found.");
      return;
    }

    // Loop through each route file and add methods to Swagger documentation
    files.forEach((file) => {
      console.log(`Processing file: ${file}`);

      // Convert the file path to Swagger path format
      let routePath = file
        .replace("./src/app/api", "") // Remove the base path part
        .replace(".js", ""); // Remove the .js file extension

      // Handle dynamic routes (e.g., [unique_property_id] becomes :unique_property_id)
      routePath = routePath.replace(/\[([^\]]+)\]/g, ":$1");

      console.log(`Processed route path: ${routePath}`);

      // Initialize the path if it doesn't exist
      if (!doc.paths[routePath]) {
        doc.paths[routePath] = {};
      }

      // List of HTTP methods to add for each route (GET, POST, PUT, PATCH, DELETE)
      const methods = ["get", "post", "put", "patch", "delete"];

      methods.forEach((method) => {
        doc.paths[routePath][method] = {
          description: `${method.toUpperCase()} method for ${routePath}`,
          parameters: [],
          responses: {
            200: {
              description: "Successful response",
            },
            400: {
              description: "Bad request",
            },
            500: {
              description: "Internal server error",
            },
          },
        };
      });

      // Add path parameters (if any) to the Swagger documentation
      const dynamicParams = routePath.match(/:([^/]+)/g);
      if (dynamicParams) {
        dynamicParams.forEach((param) => {
          const paramName = param.slice(1); // Remove ":" from parameter name
          methods.forEach((method) => {
            doc.paths[routePath][method].parameters.push({
              name: paramName,
              in: "path",
              required: true,
              type: "string", // You can adjust the type if necessary
            });
          });
        });
      }
    });

    // Log the paths added to the Swagger doc
    console.log("Paths added to Swagger document:", doc.paths);

    // Write the generated Swagger JSON to the public folder
    fs.writeFileSync(outputFile, JSON.stringify(doc, null, 2));
    console.log(`Swagger JSON generated successfully at: ${outputFile}`);
  } catch (error) {
    console.error("Error generating Swagger JSON:", error);
  }
}

// Run the Swagger generation function
generateSwaggerJson();
