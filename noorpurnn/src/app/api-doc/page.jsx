// Add "use client" to indicate this is a client-side component
"use client";

import { useEffect, useState } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export default function IndexPage() {
  const [spec, setSpec] = useState(null);

  useEffect(() => {
    // Fetch the Swagger JSON file from the public folder
    fetch("/swagger-output.json")
      .then((response) => response.json())
      .then((data) => setSpec(data))
      .catch((error) => console.error("Error loading Swagger spec:", error));
  }, []);

  if (!spec) return <div>Loading...</div>;

  return (
    <section className="container">
      <SwaggerUI spec={spec} />
    </section>
  );
}
