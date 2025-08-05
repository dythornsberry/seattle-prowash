import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';

interface AddressAutocompleteProps extends React.ComponentProps<typeof Input> {
  onAddressSelect?: (address: string) => void;
}

export const AddressAutocomplete: React.FC<AddressAutocompleteProps> = ({
  onAddressSelect,
  onChange,
  value,
  ...props
}) => {
  const [predictions, setPredictions] = useState<any[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [sessionToken] = useState(() => Math.random().toString(36).substring(2, 15));
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const fetchPredictions = async (input: string) => {
    if (input.length < 3) {
      setPredictions([]);
      setShowDropdown(false);
      return;
    }

    try {
      const { data } = await supabase.functions.invoke('places-autocomplete', {
        body: { input, sessionToken }
      });

      if (data?.predictions) {
        setPredictions(data.predictions);
        setShowDropdown(true);
      }
    } catch (error) {
      console.error('Error fetching predictions:', error);
      // Fail silently - just don't show predictions
      setPredictions([]);
      setShowDropdown(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (onChange) onChange(e);

    // Clear previous timeout
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    // Debounce API calls
    timeoutRef.current = setTimeout(() => {
      fetchPredictions(newValue);
    }, 300);
  };

  const handleSelectPlace = (prediction: any) => {
    const address = prediction.description;
    if (onAddressSelect) {
      onAddressSelect(address);
    }
    setShowDropdown(false);
    setPredictions([]);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Input
        {...props}
        value={value}
        onChange={handleInputChange}
        autoComplete="off"
      />
      
      {showDropdown && predictions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
          {predictions.map((prediction) => (
            <div
              key={prediction.place_id}
              className="px-4 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
              onClick={() => handleSelectPlace(prediction)}
            >
              <div className="font-medium text-brand-navy text-sm">
                {prediction.structured_formatting?.main_text || prediction.description}
              </div>
              {prediction.structured_formatting?.secondary_text && (
                <div className="text-xs text-gray-600">
                  {prediction.structured_formatting.secondary_text}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};