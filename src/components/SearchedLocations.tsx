import React from 'react';
import { PiMapPinAreaBold } from 'react-icons/pi';
import { highlightMatch } from '../utils/functions';

interface SearchedLocationsProps {
  suggestions: { id: string; name: string; address: string; type: string }[];
  onSelect: (location: string) => void;
  onClose: () => void;
  searchQuery: string;
}

const SearchedLocations: React.FC<SearchedLocationsProps> = ({
  suggestions,
  onSelect,
  onClose,
  searchQuery,
}) => {
  return (
    <>
      <div className="space-y-2">
        <p className="font-normal text-dark">Searched Locations</p>

        <div className="scroll max-h-60 space-y-2 overflow-y-scroll">
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
                <p
                  className="text-sm font-medium"
                  dangerouslySetInnerHTML={{
                    __html: highlightMatch(location.name, searchQuery),
                  }}
                ></p>
                <p
                  className="text-xs text-gray-500"
                  dangerouslySetInnerHTML={{
                    __html: highlightMatch(location.address, searchQuery),
                  }}
                ></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchedLocations;
