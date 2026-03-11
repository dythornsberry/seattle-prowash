import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Index is eagerly loaded (landing page — must render instantly)
import Index from "./pages/Index";

// Everything else is lazy-loaded for code splitting
const About = React.lazy(() => import("./pages/About"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const FAQ = React.lazy(() => import("./pages/FAQ"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const RoofCleaning = React.lazy(() => import("./pages/RoofCleaning"));
const GutterCleaning = React.lazy(() => import("./pages/GutterCleaning"));
const MossTreatment = React.lazy(() => import("./pages/MossTreatment"));
const PressureWashing = React.lazy(() => import("./pages/PressureWashing"));
const WindowCleaning = React.lazy(() => import("./pages/WindowCleaning"));
const Commercial = React.lazy(() => import("./pages/Commercial"));
const Pricing = React.lazy(() => import("./pages/Pricing"));
const Reviews = React.lazy(() => import("./pages/Reviews"));
const ServiceAreas = React.lazy(() => import("./pages/ServiceAreas"));
const Services = React.lazy(() => import("./pages/Services"));
const Resources = React.lazy(() => import("./pages/Resources"));
const RoofGutterCleaningImportance = React.lazy(() => import("./pages/resources/RoofGutterCleaningImportance"));
const PreventMossAlgaeGrowth = React.lazy(() => import("./pages/resources/PreventMossAlgaeGrowth"));
const GutterCleaningSafetyTips = React.lazy(() => import("./pages/resources/GutterCleaningSafetyTips"));

// City location pages
const KenmoreLocation = React.lazy(() => import("./pages/locations/Kenmore"));
const SeattleLocation = React.lazy(() => import("./pages/locations/Seattle"));
const ShorelineLocation = React.lazy(() => import("./pages/locations/Shoreline"));
const KirklandLocation = React.lazy(() => import("./pages/locations/Kirkland"));
const BothellLocation = React.lazy(() => import("./pages/locations/Bothell"));
const LynnwoodLocation = React.lazy(() => import("./pages/locations/Lynnwood"));
const WoodinvilleLocation = React.lazy(() => import("./pages/locations/Woodinville"));
const BellevueLocation = React.lazy(() => import("./pages/locations/Bellevue"));
const EdmondsLocation = React.lazy(() => import("./pages/locations/Edmonds"));
const MillCreekLocation = React.lazy(() => import("./pages/locations/MillCreek"));
const MountlakeTerraceLocation = React.lazy(() => import("./pages/locations/MountlakeTerrace"));
const RedmondLocation = React.lazy(() => import("./pages/locations/Redmond"));
const SammamishLocation = React.lazy(() => import("./pages/locations/Sammamish"));

const queryClient = new QueryClient();

// Minimal loading fallback — just a blank screen to avoid flicker
const PageFallback = () => (
  <div className="min-h-screen bg-background" />
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />

            {/* Core service pages */}
            <Route path="/services" element={<Services />} />
            <Route path="/roof-cleaning" element={<RoofCleaning />} />
            <Route path="/gutter-cleaning" element={<GutterCleaning />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/pressure-washing" element={<PressureWashing />} />
            <Route path="/window-cleaning" element={<WindowCleaning />} />
            <Route path="/commercial" element={<Commercial />} />

            {/* Service areas hub */}
            <Route path="/service-areas" element={<ServiceAreas />} />

            {/* Primary city location pages with SEO-friendly URLs - Kenmore is home base */}
            <Route path="/kenmore-roof-gutter-cleaning" element={<KenmoreLocation />} />
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
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
