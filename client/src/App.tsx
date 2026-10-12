import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { WorkLinkApp } from "./pages/WorkLink";

function Router() {
  return (
    <Switch>
      <Route path="/" component={WorkLinkApp} />
      <Route path="/workers" component={WorkLinkApp} />
      <Route path="/workers/:id" component={WorkLinkApp} />
      <Route path="/jobs" component={WorkLinkApp} />
      <Route path="/jobs/new" component={WorkLinkApp} />
      <Route path="/dashboard" component={WorkLinkApp} />
      <Route path="/messages" component={WorkLinkApp} />
      <Route path="/bookings" component={WorkLinkApp} />
      <Route path="/profile" component={WorkLinkApp} />
      <Route path="/pricing" component={WorkLinkApp} />
      <Route path="/auth/signin" component={WorkLinkApp} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
