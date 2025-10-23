import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
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
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/kenmore" element={<Kenmore />} />
          <Route path="/bothell" element={<Bothell />} />
          <Route path="/kirkland" element={<Kirkland />} />
          <Route path="/bellevue" element={<Bellevue />} />
          <Route path="/redmond" element={<Redmond />} />
          <Route path="/sammamish" element={<Sammamish />} />
          <Route path="/woodinville" element={<Woodinville />} />
          <Route path="/reviews" element={<Reviews />} />
          {/* Redirects for old services */}
          <Route path="/services" element={<RoofCleaning />} />
          <Route path="/moss-treatment" element={<RoofMoss />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
