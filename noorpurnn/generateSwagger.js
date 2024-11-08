// import { createSwaggerSpec } from "next-swagger-doc";
// import fs from "fs";
// import path from "path";

// export const getApiDocs = () => {
//   const spec = createSwaggerSpec({
//     apiFolder: "src/app/api",
//     definition: {
//       openapi: "3.0.0",
//       info: {
//         title: "Next Swagger API Example",
//         version: "1.0",
//       },
//       components: {
//         securitySchemes: {
//           BearerAuth: {
//             type: "http",
//             scheme: "bearer",
//             bearerFormat: "JWT",
//           },
//         },
//       },
//       security: [],
//     },
//   });

//   // Write Swagger JSON to the public directory
//   const outputPath = path.resolve("./public/swagger.json");
//   fs.writeFileSync(outputPath, JSON.stringify(spec, null, 2));
//   console.log("Swagger documentation generated at:", outputPath);
//   return spec;
// };

// Use require for CommonJS module

// import fs from "fs";
// import path from "path";
// import swaggerAutogen from "swagger-autogen";

// // Define the output file for the Swagger JSON
// const outputFile = path.resolve("swagger-output.json");

// // Swagger documentation template
// const doc = {
//   swagger: "2.0", // Swagger version
//   info: {
//     title: "My API",
//     description: "Description of the API",
//     version: "1.0.0",
//   },
//   host: "localhost:3000", // Adjust this to your setup if needed
//   basePath: "/",
//   schemes: ["http"], // Specify schemes like HTTP or HTTPS
//   paths: {}, // Placeholder for API paths
// };

// // Recursive function to get all files in a directory
// const getFiles = (dir, filesArray = []) => {
//   const files = fs.readdirSync(dir);
//   files.forEach((file) => {
//     const filePath = path.join(dir, file);
//     const stat = fs.statSync(filePath);

//     if (stat.isDirectory()) {
//       getFiles(filePath, filesArray); // Recurse into subdirectories
//     } else if (file.endsWith(".js")) {
//       filesArray.push(filePath); // Add .js files to the array
//     }
//   });
//   return filesArray;
// };

// // Get the files from the src/app/api directory
// const routes = getFiles("./src/app/api");

// // Log the files that are being processed
// console.log("Looking for route files at pattern:", routes);

// // Process each file and add the routes to Swagger paths
// routes.forEach((file) => {
//   // Convert file path to a valid Swagger path
//   let routePath = file.replace("./src/app/api", "").replace(".js", "");

//   // Handle dynamic routes (e.g., [unique_property_id])
//   routePath = routePath.replace(/\[([^\]]+)\]/g, ":$1"); // Convert [unique_property_id] to :unique_property_id
//   console.log(routePath);
//   // Add to Swagger paths
//   doc.paths[routePath] = {
//     get: {
//       description: `Endpoint for ${routePath}`,
//       responses: {
//         200: {
//           description: "Successful response",
//         },
//       },
//     },
//   };
// });

// // Generate Swagger JSON using swagger-autogen
// swaggerAutogen()(outputFile, routes, doc)
//   .then(() => {
//     console.log("Swagger JSON generated successfully at:", outputFile);
//   })
//   .catch((error) => {
//     console.error("Error generating Swagger JSON:", error);
//   });

import path from "path";
import fg from "fast-glob"; // Use fast-glob to match files
import swaggerAutogen from "swagger-autogen"; // Import swagger-autogen

// Define the glob pattern to match all route files under src/app/api and its subfolders
const routesPattern = "./src/app/api/**/*.js"; // Adjust the pattern as needed based on your project structure

// Define the output path for Swagger JSON
const outputFile = path.resolve("swagger-output.json");

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
    const files = await fg(routesPattern); // Find all route files based on the pattern
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

      // Add GET method to each route (you can customize this to handle POST, PUT, DELETE, etc.)
      doc.paths[routePath].get = {
        description: `GET method for ${routePath}`,
        parameters: [],
        responses: {
          200: {
            description: "Successful response",
          },
        },
      };

      // Add path parameters (if any) to the Swagger documentation
      const dynamicParams = routePath.match(/:([^/]+)/g);
      if (dynamicParams) {
        dynamicParams.forEach((param) => {
          const paramName = param.slice(1); // Remove ":" from parameter name
          doc.paths[routePath].get.parameters.push({
            name: paramName,
            in: "path",
            required: true,
            type: "string", // You can adjust the type if necessary
          });
        });
      }
    });

    // Log the paths added to the Swagger doc
    console.log("Paths added to Swagger document:", doc.paths);

    // Generate Swagger JSON using swagger-autogen
    await swaggerAutogen()(outputFile, files, doc); // Pass the output file and the matched files
    console.log(`Swagger JSON generated successfully at: ${outputFile}`);
  } catch (error) {
    console.error("Error generating Swagger JSON:", error);
  }
}

// Run the Swagger generation function
generateSwaggerJson();
