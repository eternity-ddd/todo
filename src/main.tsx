import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const globalStyles = document.createElement("style");
globalStyles.textContent = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: var(--bg);
    color: var(--text);
    transition: background 0.3s, color 0.3s;
    -webkit-font-smoothing: antialiased;
  }
`;
document.head.appendChild(globalStyles);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
