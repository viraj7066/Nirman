import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingActions from "@/components/FloatingActions";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import Gallery from "@/pages/Gallery";
import TestImages from "@/pages/test-images";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contact} />
      <Route path="/test-images" component={TestImages} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ScrollToTop />
        <Router />
        <FloatingActions />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
