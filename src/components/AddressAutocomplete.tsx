import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';

interface Prediction {
  place_id: string;
  description: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
}

interface AddressAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  onAddressSelect?: (address: {
    formatted_address: string;
    city: string;
    state: string;
    zip: string;
  }) => void;
  placeholder?: string;
  className?: string;
  id?: string;
  required?: boolean;
}

export const AddressAutocomplete: React.FC<AddressAutocompleteProps> = ({
  value,
  onChange,
  onAddressSelect,
  placeholder = "Enter your address",
  className,
  id,
  required
}) => {
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [sessionToken] = useState(() => Math.random().toString(36).substring(2, 15));
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const fetchPredictions = async (input: string) => {
    if (input.length < 3) {
      setPredictions([]);
      setShowDropdown(false);
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('places-autocomplete', {
        body: { input, sessionToken }
      });

      if (error) throw error;

      if (data?.predictions) {
        setPredictions(data.predictions);
        setShowDropdown(true);
      }
    } catch (error) {
      console.error('Error fetching predictions:', error);
      setPredictions([]);
      setShowDropdown(false);
    }
  };

  const handleSelectPlace = async (prediction: Prediction) => {
    onChange(prediction.description);
    setShowDropdown(false);
    setPredictions([]);

    try {
      const { data, error } = await supabase.functions.invoke('places-details', {
        body: { placeId: prediction.place_id, sessionToken }
      });

      if (error) throw error;

      if (data?.result?.address_components) {
        const components = data.result.address_components;
        let city = '';
        let state = '';
        let zip = '';

        components.forEach((component: any) => {
          if (component.types.includes('locality')) {
            city = component.long_name;
          } else if (component.types.includes('administrative_area_level_1')) {
            state = component.short_name;
          } else if (component.types.includes('postal_code')) {
            zip = component.long_name;
          }
        });

        if (onAddressSelect) {
          onAddressSelect({
            formatted_address: data.result.formatted_address,
            city,
            state,
            zip
          });
        }
      }
    } catch (error) {
      console.error('Error fetching place details:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    fetchPredictions(newValue);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Input
        ref={inputRef}
        id={id}
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={cn("border-brand-yellow/30 focus:border-brand-yellow", className)}
        required={required}
        autoComplete="off"
      />
      
      {showDropdown && predictions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
          {predictions.map((prediction) => (
            <div
              key={prediction.place_id}
              className="px-4 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
              onClick={() => handleSelectPlace(prediction)}
            >
              <div className="font-medium text-brand-navy">
                {prediction.structured_formatting.main_text}
              </div>
              <div className="text-sm text-gray-600">
                {prediction.structured_formatting.secondary_text}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};