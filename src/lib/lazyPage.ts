import { createElement, lazy, type ComponentType } from "react";

export type PreloadablePage = ComponentType & { preload: () => Promise<void> };

// React.lazy that can be loaded ahead of the first render. Once preloaded the
// page renders synchronously, so the prerendered HTML is never swapped for the
// blank Suspense fallback while the route chunk downloads.
export const lazyPage = (factory: () => Promise<{ default: ComponentType }>): PreloadablePage => {
  let loaded: ComponentType | undefined;
  const LazyPage = lazy(factory);
  const Page = () => createElement(loaded ?? LazyPage);
  return Object.assign(Page, {
    preload: () => factory().then((module) => { loaded = module.default; }),
  });
};
