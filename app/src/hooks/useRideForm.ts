import { useEffect } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { RideFormData } from '../interfaces/types';

const useRideForm = (setValue: UseFormSetValue<RideFormData>) => {
  useEffect(() => {
    const savedFormData = localStorage.getItem('rideFormData');
    if (savedFormData) {
      const parsedData: Partial<RideFormData> = JSON.parse(savedFormData);

      // Prefill the form fields
      (Object.keys(parsedData) as (keyof RideFormData)[])
        .filter((key) => key !== 'timestamp')
        .forEach((key) => {
          if (parsedData[key]) {
            setValue(key, parsedData[key] as string);
          }
        });

      localStorage.removeItem('rideFormData');
    }
  }, [setValue]);
};

export default useRideForm;
