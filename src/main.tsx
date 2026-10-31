import React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App, { preloadRoute } from "./App.tsx";
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

// The crawler HTML is a post-effect browser snapshot, not React SSR output.
// Mount afresh: deferred sections and generated IDs cannot hydrate that snapshot.
// Wait for the route's chunk first so the snapshot stays up until real content
// can replace it (a failed preload still mounts; Suspense handles the retry).
preloadRoute(window.location.pathname)
  .catch(() => undefined)
  .then(() => createRoot(container).render(app));
