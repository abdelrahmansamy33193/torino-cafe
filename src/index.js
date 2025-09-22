import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// لوج للتأكد إن الباندل اشتغل
console.log("✅ index.js mounted");

const root = createRoot(document.getElementById("root"));
root.render(<App />);
