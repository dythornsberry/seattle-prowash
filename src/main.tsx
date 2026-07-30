import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import "./utils/ga4";
import { ErrorBoundary } from "@/components/ErrorBoundary";

// Schema baked into the static HTML by the build-time snapshot is only for
// non-JS crawlers; drop it before mount so the runtime injectSchema calls
// don't create duplicates.
document.head
  .querySelectorAll('script[data-prerendered]')
  .forEach((el) => el.remove());

const container = document.getElementById("root")!;

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </HelmetProvider>
  </React.StrictMode>
);

// Production HTML is prerendered (scripts/prerender.js snapshots the DOM), so
// hydrate to reuse it; dev serves an empty shell, so render from scratch.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
