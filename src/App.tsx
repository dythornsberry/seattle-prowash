import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";

// Lazy load non-critical pages
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Gallery = lazy(() => import("./pages/Gallery"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route 
            path="/about" 
            element={
              <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>}>
                <About />
              </Suspense>
            } 
          />
          <Route 
            path="/services" 
            element={
              <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>}>
                <Services />
              </Suspense>
            } 
          />
          <Route 
            path="/gallery" 
            element={
              <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>}>
                <Gallery />
              </Suspense>
            } 
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route 
            path="*" 
            element={
              <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>}>
                <NotFound />
              </Suspense>
            } 
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
