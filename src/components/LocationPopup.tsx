import React, { useEffect, useState } from 'react';
import { TbCurrentLocation, TbMapPin, TbSearch, TbX } from 'react-icons/tb';
import { PiMapPinAreaBold, PiMapPinSimpleAreaBold } from 'react-icons/pi';

interface LocationPopupProps {
  activeInput: 'from' | 'to' | null;
  onClose: () => void;
  onSelect: (location: string) => void;
}

const mockLocations = [
  { id: '1', name: 'Kathmandu Mall', address: 'Sundhara, Kathmandu' },
  { id: '2', name: 'Kathmandu BernHardt College', address: 'Bafal, Kathmandu' },
  { id: '3', name: 'Civil Mall', address: 'Sundhara, Kathmandu' },
];

const LocationPopup: React.FC<LocationPopupProps> = ({
  onClose,
  onSelect,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<typeof mockLocations>([]);

  useEffect(() => {
    if (searchQuery.length > 2) {
      const filtered = mockLocations.filter((loc) =>
        loc.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
          );
          const data = await response.json();
          onSelect(data.display_name);
          onClose();
        },
        (error) => {
          console.error('Error fetching location:', error);
        },
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Choose Location</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <TbX className="text-2xl" />
          </button>
        </div>

        <div className="group relative">
          <input
            type="text"
            placeholder="Search for location"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg p-3 pr-10 outline outline-1 outline-teal-200 focus-visible:outline-2 focus-visible:outline-teal-300"
            id="searchLocation"
          />
          <label htmlFor="searchLocation">
            <TbSearch className="pointer-events-none absolute right-3 top-3 text-xl text-dark/40" />
          </label>
        </div>

        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={getCurrentLocation}
            className="transition-300 inline-flex w-full items-start justify-start gap-3 rounded-lg border border-teal-400 p-3 text-sm text-teal-500 hover:bg-teal-50"
          >
            <TbCurrentLocation className="text-xl text-teal-500" />
            <span className="font-medium">Use current location</span>
          </button>
          <button
            type="button"
            onClick={getCurrentLocation}
            className="transition-300 group inline-flex w-full items-start justify-start gap-3 rounded-lg border border-teal-300 bg-teal-300 p-3 text-sm font-semibold text-dark hover:bg-teal-50 hover:text-teal-500 hover:shadow-none"
          >
            <PiMapPinSimpleAreaBold className="transition-300 text-xl text-dark/60 group-hover:text-teal-500" />
            <span className="font-medium">Choose on Map</span>
          </button>
        </div>

        <hr />

        <div className="space-y-2">
          <p className="font-normal text-dark">Suggested for you</p>
          <button
            type="button"
            className="flex w-full cursor-pointer items-center gap-3 rounded-lg border px-3 py-2 transition-all duration-150 ease-in-out hover:bg-gray-100"
            onClick={() => {
              onSelect('Kathmandu BernHardt College');
              onClose();
            }}
          >
            <TbMapPin className="text-xl text-teal-500" />
            {/* <PiMapPinAreaBold className="text-xl text-teal-500" /> */}
            <div className="text-start">
              <p className="text-sm font-medium">Kathmandu BernHardt College</p>
              <p className="text-xs text-gray-500">Bafal, Kathmandu</p>
            </div>
          </button>
        </div>

        {suggestions.length > 0 && (
          <>
            <hr />
            <div className="space-y-2">
              <p className="font-normal text-dark">Searched Locations</p>

              {suggestions.map((location) => (
                <div
                  key={location.id}
                  className="flex cursor-pointer items-center gap-3 rounded-lg border px-3 py-2 transition-all duration-150 ease-in-out hover:bg-gray-100"
                  onClick={() => {
                    onSelect(location.name);
                    onClose();
                  }}
                >
                  <PiMapPinAreaBold className="text-xl text-teal-500" />
                  <div>
                    <p className="text-sm font-medium">{location.name}</p>
                    <p className="text-xs text-gray-500">{location.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LocationPopup;
