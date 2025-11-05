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
import RoofMoss from "./pages/RoofMoss";
import Kenmore from "./pages/locations/Kenmore";
import Bothell from "./pages/locations/Bothell";
import Kirkland from "./pages/locations/Kirkland";
import Bellevue from "./pages/locations/Bellevue";
import Redmond from "./pages/locations/Redmond";
import Sammamish from "./pages/locations/Sammamish";
import Woodinville from "./pages/locations/Woodinville";
import Seattle from "./pages/locations/Seattle";
import Lynnwood from "./pages/locations/Lynnwood";
import Shoreline from "./pages/locations/Shoreline";
import Edmonds from "./pages/locations/Edmonds";
import MountlakeTerrace from "./pages/locations/MountlakeTerrace";
import MillCreek from "./pages/locations/MillCreek";
import Reviews from "./pages/Reviews";
import ServiceAreas from "./pages/ServiceAreas";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/roof-cleaning" element={<RoofCleaning />} />
          <Route path="/gutter-cleaning" element={<GutterCleaning />} />
          <Route path="/roof-moss" element={<RoofMoss />} />
          <Route path="/roof-moss-removal" element={<RoofMoss />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/seattle" element={<Seattle />} />
          <Route path="/kenmore" element={<Kenmore />} />
          <Route path="/bothell" element={<Bothell />} />
          <Route path="/kirkland" element={<Kirkland />} />
          <Route path="/bellevue" element={<Bellevue />} />
          <Route path="/redmond" element={<Redmond />} />
          <Route path="/sammamish" element={<Sammamish />} />
          <Route path="/woodinville" element={<Woodinville />} />
          <Route path="/lynnwood" element={<Lynnwood />} />
          <Route path="/shoreline" element={<Shoreline />} />
          <Route path="/edmonds" element={<Edmonds />} />
          <Route path="/mountlake-terrace" element={<MountlakeTerrace />} />
          <Route path="/mill-creek" element={<MillCreek />} />
          <Route path="/reviews" element={<Reviews />} />
          
          {/* 301 Redirects for deprecated services */}
          <Route path="/services" element={<Navigate to="/roof-cleaning" replace />} />
          <Route path="/moss-treatment" element={<Navigate to="/roof-moss" replace />} />
          <Route path="/window-cleaning" element={<Navigate to="/roof-cleaning" replace />} />
          <Route path="/pressure-washing" element={<Navigate to="/roof-cleaning" replace />} />
          <Route path="/house-washing" element={<Navigate to="/roof-cleaning" replace />} />
          <Route path="/soft-wash" element={<Navigate to="/roof-cleaning" replace />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
