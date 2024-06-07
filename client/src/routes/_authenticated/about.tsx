import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/_authenticated/about")({
  component: About,
});

function About() {
  return (
    <div className="p-2">
      <h3>Welcome to About Page!</h3>
    </div>
  );
}
