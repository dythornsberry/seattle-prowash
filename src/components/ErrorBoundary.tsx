import React from "react";
import { Button } from "@/components/ui/button";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
  error?: Error;
};

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error("App crashed:", error, errorInfo);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
        <div className="max-w-xl w-full rounded-xl border bg-card text-card-foreground p-6">
          <h1 className="text-xl font-bold mb-2">Something went wrong</h1>
          <p className="text-sm text-muted-foreground mb-4">
            The app hit a runtime error and couldn’t render. Reloading usually fixes preview glitches.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="default" onClick={() => window.location.reload()}>
              Reload
            </Button>
            <Button variant="outline" onClick={() => (this.setState({ hasError: false, error: undefined }))}>
              Try again
            </Button>
          </div>
          {this.state.error?.message ? (
            <pre className="mt-4 text-xs overflow-auto rounded-lg bg-muted p-3">{this.state.error.message}</pre>
          ) : null}
        </div>
      </div>
    );
  }
}
