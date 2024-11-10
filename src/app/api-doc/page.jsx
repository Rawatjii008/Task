"use client"; // Client-side component

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
  }, []); // This effect runs only once on page load

  if (!spec) return <div>Loading...</div>; // Show loading until the spec is fetched

  return (
    <section className="container">
      <SwaggerUI spec={spec} />
    </section>
  );
}
