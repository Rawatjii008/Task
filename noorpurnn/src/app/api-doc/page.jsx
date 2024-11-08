import ReactSwagger from "../api-doc/swagger";
import fs from "fs";
import path from "path";

export default function IndexPage() {
  // Load the generated swagger.json file
  const swaggerPath = path.resolve("swagger-output.json");
  const spec = JSON.parse(fs.readFileSync(swaggerPath, "utf8"));

  return (
    <section className="container">
      <ReactSwagger spec={spec} />
    </section>
  );
}
