import { lazy, Suspense, ComponentType } from 'react';

interface LazyComponentProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const LazyWrapper = ({ children, fallback = <div className="min-h-[200px]" /> }: LazyComponentProps) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

export const createLazyComponent = <T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>
): ComponentType => {
  return lazy(importFunc);
};

export default LazyWrapper;