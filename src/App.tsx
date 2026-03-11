import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import RoofCleaning from "./pages/RoofCleaning";
import GutterCleaning from "./pages/GutterCleaning";
import MossTreatment from "./pages/MossTreatment";
import PressureWashing from "./pages/PressureWashing";
import WindowCleaning from "./pages/WindowCleaning";
import Commercial from "./pages/Commercial";
import Pricing from "./pages/Pricing";
import Reviews from "./pages/Reviews";
import ServiceAreas from "./pages/ServiceAreas";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import RoofGutterCleaningImportance from "./pages/resources/RoofGutterCleaningImportance";
import PreventMossAlgaeGrowth from "./pages/resources/PreventMossAlgaeGrowth";
import GutterCleaningSafetyTips from "./pages/resources/GutterCleaningSafetyTips";

// City location pages - primary cities (Kenmore is home base)
import KenmoreLocation from "./pages/locations/Kenmore";
import SeattleLocation from "./pages/locations/Seattle";
import ShorelineLocation from "./pages/locations/Shoreline";
import KirklandLocation from "./pages/locations/Kirkland";
import BothellLocation from "./pages/locations/Bothell";
import LynnwoodLocation from "./pages/locations/Lynnwood";
import WoodinvilleLocation from "./pages/locations/Woodinville";

// Additional city location pages
import BellevueLocation from "./pages/locations/Bellevue";
import EdmondsLocation from "./pages/locations/Edmonds";
import MillCreekLocation from "./pages/locations/MillCreek";
import MountlakeTerraceLocation from "./pages/locations/MountlakeTerrace";
import RedmondLocation from "./pages/locations/Redmond";
import SammamishLocation from "./pages/locations/Sammamish";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
