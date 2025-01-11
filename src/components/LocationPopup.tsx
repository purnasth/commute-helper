import React, { useState, useEffect } from 'react';
import { PiMapPinAreaBold } from 'react-icons/pi';
import { TbMapPin, TbSearch, TbCurrentLocation, TbX } from 'react-icons/tb';

interface LocationPopupProps {
  onSelect: (location: string) => void;
  onClose: () => void;
}

const mockLocations = [
  { id: '1', name: 'Kathmandu Mall', address: 'Kamalpokhari, Kathmandu' },
  { id: '2', name: 'Kathmandu BernHardt College', address: 'Bafal, Kathmandu' },
  { id: '3', name: 'Civil Mall', address: 'Sundhara, Kathmandu' },
];

const LocationPopup: React.FC<LocationPopupProps> = ({ onSelect, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState(mockLocations);

  useEffect(() => {
    setSuggestions(
      searchQuery
        ? mockLocations.filter((loc) =>
            loc.name.toLowerCase().includes(searchQuery.toLowerCase()),
          )
        : mockLocations,
    );
  }, [searchQuery]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md space-y-3 rounded-lg bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Choose Location</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <TbX className="text-2xl" />
          </button>
        </div>
        <div>
          <div className="group relative">
            <input
              type="text"
              placeholder="Search location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-dark/30 p-3 focus:border-teal-500"
              id="searchLocation"
            />
            <label htmlFor="searchLocation">
              <TbSearch className="pointer-events-none absolute right-3 top-4 text-lg text-dark/40" />
            </label>
          </div>
        </div>

        <button className="transition-300 inline-flex w-full items-start justify-start gap-3 rounded-lg border border-teal-400 p-3 text-sm text-teal-500 hover:bg-teal-50">
          <PiMapPinAreaBold className="text-xl text-teal-500" />
          Choose on Map
        </button>

        <div className="space-y-2">
          {suggestions.map((location) => (
            <div
              key={location.id}
              className="flex cursor-pointer items-center gap-3 rounded-lg border px-3 py-2 transition-all duration-150 ease-in-out hover:bg-gray-100"
              onClick={() => onSelect(location.name)}
            >
              <TbMapPin className="text-xl text-teal-500" />
              <div>
                <p className="text-sm font-medium">{location.name}</p>
                <p className="text-xs text-gray-500">{location.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationPopup;
