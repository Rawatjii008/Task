"use client";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export default function SwaggerPage() {
  return <SwaggerUI url="/api/swagger" />; // JSON API route ka URL
}
