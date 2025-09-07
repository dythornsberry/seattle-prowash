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
import MossTreatment from "./pages/MossTreatment";
import Resources from "./pages/Resources";
import RoofGutterCleaningImportance from "./pages/resources/RoofGutterCleaningImportance";
import PreventMossAlgaeGrowth from "./pages/resources/PreventMossAlgaeGrowth";
import GutterCleaningSafetyTips from "./pages/resources/GutterCleaningSafetyTips";
import Kenmore from "./pages/locations/Kenmore";
import Bothell from "./pages/locations/Bothell";
import Kirkland from "./pages/locations/Kirkland";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/moss-treatment" element={<MossTreatment />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/roof-gutter-cleaning-importance" element={<RoofGutterCleaningImportance />} />
          <Route path="/resources/prevent-moss-algae-growth" element={<PreventMossAlgaeGrowth />} />
          <Route path="/resources/gutter-cleaning-safety-tips" element={<GutterCleaningSafetyTips />} />
          <Route path="/kenmore" element={<Kenmore />} />
          <Route path="/bothell" element={<Bothell />} />
          <Route path="/kirkland" element={<Kirkland />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
