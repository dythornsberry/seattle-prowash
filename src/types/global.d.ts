// Google Analytics gtag
interface GtagEventParams {
  [key: string]: string | number | boolean | undefined;
}

declare function gtag(command: 'js', date: Date): void;
declare function gtag(command: 'config', targetId: string, params?: GtagEventParams): void;
declare function gtag(command: 'event', eventName: string, params?: GtagEventParams): void;

interface Window {
  gtag?: typeof gtag;
  dataLayer?: unknown[];
  initializeFeaturableWidget?: (element: HTMLElement) => HTMLElement;
}

// Google Maps Places API (minimal types for autocomplete)
declare namespace google {
  namespace maps {
    namespace places {
      class Autocomplete {
        constructor(input: HTMLInputElement, options?: AutocompleteOptions);
        addListener(event: string, callback: () => void): void;
        getPlace(): PlaceResult;
      }

      interface AutocompleteOptions {
        types?: string[];
        componentRestrictions?: { country: string | string[] };
        fields?: string[];
      }

      interface PlaceResult {
        formatted_address?: string;
      }
    }
  }
}
