import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, createRoutesFromChildren, matchRoutes } from "react-router-dom";
import { lazyPage, type PreloadablePage } from "@/lib/lazyPage";

// Index is eagerly loaded (landing page, must render instantly)
import Index from "./pages/Index";

// Everything else is lazy-loaded for code splitting
const About = lazyPage(() => import("./pages/About"));
const Gallery = lazyPage(() => import("./pages/Gallery"));
const FAQ = lazyPage(() => import("./pages/FAQ"));
const NotFound = lazyPage(() => import("./pages/NotFound"));
const RoofCleaning = lazyPage(() => import("./pages/RoofCleaning"));
const GutterCleaning = lazyPage(() => import("./pages/GutterCleaning"));
const PressureWashing = lazyPage(() => import("./pages/PressureWashing"));
const WindowCleaning = lazyPage(() => import("./pages/WindowCleaning"));
const MossTreatment = lazyPage(() => import("./pages/MossTreatment"));
const Pricing = lazyPage(() => import("./pages/Pricing"));
const Reviews = lazyPage(() => import("./pages/Reviews"));
const ServiceAreas = lazyPage(() => import("./pages/ServiceAreas"));
const Services = lazyPage(() => import("./pages/Services"));
const Resources = lazyPage(() => import("./pages/Resources"));
const RoofGutterCleaningImportance = lazyPage(() => import("./pages/resources/RoofGutterCleaningImportance"));
const PreventMossAlgaeGrowth = lazyPage(() => import("./pages/resources/PreventMossAlgaeGrowth"));
const GutterCleaningSafetyTips = lazyPage(() => import("./pages/resources/GutterCleaningSafetyTips"));
const RoofCleaningCostSeattle = lazyPage(() => import("./pages/resources/RoofCleaningCostSeattle"));
const BestTimeRoofGutterCleaning = lazyPage(() => import("./pages/resources/BestTimeRoofGutterCleaning"));
const MossTreatmentVsRoofCleaning = lazyPage(() => import("./pages/resources/MossTreatmentVsRoofCleaning"));

// City location pages
const KenmoreLocation = lazyPage(() => import("./pages/locations/Kenmore"));
const LakeForestParkLocation = lazyPage(() => import("./pages/locations/LakeForestPark"));
const SeattleLocation = lazyPage(() => import("./pages/locations/Seattle"));
const ShorelineLocation = lazyPage(() => import("./pages/locations/Shoreline"));
const KirklandLocation = lazyPage(() => import("./pages/locations/Kirkland"));
const BothellLocation = lazyPage(() => import("./pages/locations/Bothell"));
const LynnwoodLocation = lazyPage(() => import("./pages/locations/Lynnwood"));
const WoodinvilleLocation = lazyPage(() => import("./pages/locations/Woodinville"));
const BellevueLocation = lazyPage(() => import("./pages/locations/Bellevue"));
const EdmondsLocation = lazyPage(() => import("./pages/locations/Edmonds"));
const MillCreekLocation = lazyPage(() => import("./pages/locations/MillCreek"));
const MountlakeTerraceLocation = lazyPage(() => import("./pages/locations/MountlakeTerrace"));
const RedmondLocation = lazyPage(() => import("./pages/locations/Redmond"));
const SammamishLocation = lazyPage(() => import("./pages/locations/Sammamish"));

const queryClient = new QueryClient();

// Minimal loading fallback
const PageFallback = () => (
  <div className="min-h-screen bg-background" />
);

const routes = (
  <>
    <Route path="/" element={<Index />} />

    {/* Core service pages */}
    <Route path="/services" element={<Services />} />
    <Route path="/roof-cleaning" element={<RoofCleaning />} />
    <Route path="/gutter-cleaning" element={<GutterCleaning />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/pressure-washing" element={<PressureWashing />} />
    <Route path="/window-cleaning" element={<WindowCleaning />} />
    <Route path="/commercial" element={<Navigate to="/services" replace />} />

    {/* Service areas hub */}
    <Route path="/service-areas" element={<ServiceAreas />} />

    {/* Primary city location pages with SEO-friendly URLs - Kenmore is home base */}
    <Route path="/kenmore-roof-gutter-cleaning" element={<KenmoreLocation />} />
    <Route path="/lake-forest-park-roof-gutter-cleaning" element={<LakeForestParkLocation />} />
    <Route path="/bothell-roof-gutter-cleaning" element={<BothellLocation />} />
    <Route path="/lynnwood-roof-gutter-cleaning" element={<LynnwoodLocation />} />
    <Route path="/kirkland-roof-gutter-cleaning" element={<KirklandLocation />} />
    <Route path="/shoreline-roof-gutter-cleaning" element={<ShorelineLocation />} />
    <Route path="/seattle-roof-gutter-cleaning" element={<SeattleLocation />} />
    <Route path="/woodinville-roof-gutter-cleaning" element={<WoodinvilleLocation />} />
    <Route path="/bellevue-roof-gutter-cleaning" element={<BellevueLocation />} />
    <Route path="/edmonds-roof-gutter-cleaning" element={<EdmondsLocation />} />
    <Route path="/mill-creek-roof-gutter-cleaning" element={<MillCreekLocation />} />
    <Route path="/mountlake-terrace-roof-gutter-cleaning" element={<MountlakeTerraceLocation />} />
    <Route path="/redmond-roof-gutter-cleaning" element={<RedmondLocation />} />
    <Route path="/sammamish-roof-gutter-cleaning" element={<SammamishLocation />} />

    {/* Supporting pages */}
    <Route path="/reviews" element={<Reviews />} />
    <Route path="/contact" element={<Navigate to="/#contact" replace />} />
    <Route path="/faq" element={<FAQ />} />
    <Route path="/about" element={<About />} />
    <Route path="/gallery" element={<Gallery />} />

    {/* Resources pages */}
    <Route path="/resources" element={<Resources />} />
    <Route path="/resources/roof-gutter-cleaning-importance" element={<RoofGutterCleaningImportance />} />
    <Route path="/resources/prevent-moss-algae-growth" element={<PreventMossAlgaeGrowth />} />
    <Route path="/resources/gutter-cleaning-safety-tips" element={<GutterCleaningSafetyTips />} />
    <Route path="/resources/roof-cleaning-cost-seattle" element={<RoofCleaningCostSeattle />} />
    <Route path="/resources/best-time-roof-gutter-cleaning-seattle" element={<BestTimeRoofGutterCleaning />} />
    <Route path="/resources/moss-treatment-vs-roof-cleaning" element={<MossTreatmentVsRoofCleaning />} />

    {/* 308 Permanent redirects for deprecated/old routes */}
    <Route path="/services/roof-cleaning" element={<Navigate to="/roof-cleaning" replace />} />
    <Route path="/services/gutter-cleaning" element={<Navigate to="/gutter-cleaning" replace />} />
    <Route path="/services/pressure-washing" element={<Navigate to="/pressure-washing" replace />} />
    <Route path="/services/house-washing" element={<Navigate to="/pressure-washing" replace />} />
    <Route path="/services/window-cleaning" element={<Navigate to="/window-cleaning" replace />} />
    <Route path="/house-washing" element={<Navigate to="/pressure-washing" replace />} />
    <Route path="/soft-wash" element={<Navigate to="/roof-cleaning" replace />} />
    <Route path="/moss-treatment" element={<MossTreatment />} />
    <Route path="/roof-moss" element={<Navigate to="/roof-cleaning" replace />} />
    <Route path="/roof-moss-removal" element={<Navigate to="/roof-cleaning" replace />} />

    {/* Old location page redirects */}
    <Route path="/kenmore" element={<Navigate to="/kenmore-roof-gutter-cleaning" replace />} />
    <Route path="/lake-forest-park" element={<Navigate to="/lake-forest-park-roof-gutter-cleaning" replace />} />
    <Route path="/locations/kenmore" element={<Navigate to="/kenmore-roof-gutter-cleaning" replace />} />
    <Route path="/bothell" element={<Navigate to="/bothell-roof-gutter-cleaning" replace />} />
    <Route path="/locations/bothell" element={<Navigate to="/bothell-roof-gutter-cleaning" replace />} />
    <Route path="/kirkland" element={<Navigate to="/kirkland-roof-gutter-cleaning" replace />} />
    <Route path="/locations/kirkland" element={<Navigate to="/kirkland-roof-gutter-cleaning" replace />} />
    <Route path="/seattle" element={<Navigate to="/seattle-roof-gutter-cleaning" replace />} />
    <Route path="/locations/seattle" element={<Navigate to="/seattle-roof-gutter-cleaning" replace />} />
    <Route path="/shoreline" element={<Navigate to="/shoreline-roof-gutter-cleaning" replace />} />
    <Route path="/locations/shoreline" element={<Navigate to="/shoreline-roof-gutter-cleaning" replace />} />
    <Route path="/lynnwood" element={<Navigate to="/lynnwood-roof-gutter-cleaning" replace />} />
    <Route path="/locations/lynnwood" element={<Navigate to="/lynnwood-roof-gutter-cleaning" replace />} />
    <Route path="/woodinville" element={<Navigate to="/woodinville-roof-gutter-cleaning" replace />} />
    <Route path="/locations/woodinville" element={<Navigate to="/woodinville-roof-gutter-cleaning" replace />} />
    <Route path="/bellevue" element={<Navigate to="/bellevue-roof-gutter-cleaning" replace />} />
    <Route path="/redmond" element={<Navigate to="/redmond-roof-gutter-cleaning" replace />} />
    <Route path="/sammamish" element={<Navigate to="/sammamish-roof-gutter-cleaning" replace />} />
    <Route path="/edmonds" element={<Navigate to="/edmonds-roof-gutter-cleaning" replace />} />
    <Route path="/mountlake-terrace" element={<Navigate to="/mountlake-terrace-roof-gutter-cleaning" replace />} />
    <Route path="/mill-creek" element={<Navigate to="/mill-creek-roof-gutter-cleaning" replace />} />

    {/* 404 catch-all */}
    <Route path="*" element={<NotFound />} />
  </>
);

// Load the current route's chunk before React mounts, so the prerendered page
// stays on screen instead of flashing the blank Suspense fallback.
export const preloadRoute = (pathname: string): Promise<void> => {
  const match = matchRoutes(createRoutesFromChildren(routes.props.children), pathname)?.[0];
  const page = (match?.route.element as { type?: Partial<PreloadablePage> } | undefined)?.type;
  return page?.preload?.() ?? Promise.resolve();
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            {routes}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
