declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'set',
      target: string,
      config?: Record<string, any>
    ) => void;
  }
}

export {};