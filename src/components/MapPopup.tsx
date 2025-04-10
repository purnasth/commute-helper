import React, { useEffect, useRef, useState } from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat, toLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Style, Icon } from 'ol/style';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import 'ol/ol.css';
import { TbX } from 'react-icons/tb';
import { MapPopupProps } from '../interfaces/types';

const MapPopup: React.FC<MapPopupProps> = ({
  onClose,
  onSelect,
  initialLocation,
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<Map | null>(null); // Reference to the OpenLayers map instance
  const selectedCoordsRef = useRef<[number, number]>([85.324, 27.7172]); // Default Kathmandu
  const [selectedCoords, setSelectedCoords] = useState<[number, number]>([
    85.324, 27.7172,
  ]);
  const [address, setAddress] = useState<string>(initialLocation || '');
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>(''); // Search query state
  const markerRef = useRef<Feature | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const marker = new Feature({
      geometry: new Point(fromLonLat(selectedCoordsRef.current)),
    });
    marker.setStyle(
      new Style({
        image: new Icon({
          src: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
          scale: 0.5,
          anchor: [0.5, 1],
        }),
      }),
    );
    markerRef.current = marker;

    const markerSource = new VectorSource({
      features: [marker],
    });

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({ source: new OSM() }),
        new VectorLayer({ source: markerSource }),
      ],
      view: new View({
        center: fromLonLat(selectedCoordsRef.current),
        zoom: 14,
      }),
    });

    map.on('click', (evt) => {
      const coords = toLonLat(evt.coordinate) as [number, number];
      selectedCoordsRef.current = coords; // Update ref to avoid re-renders
      setSelectedCoords(coords);
      updateMarkerPosition(coords);
      reverseGeocode(coords);
      setIsConfirmed(false);
    });

    mapInstanceRef.current = map; // Store the map instance for later use

    return () => map.setTarget(undefined);
  }, []); // No dependency array issues since selectedCoordsRef is used

  const updateMarkerPosition = (coords: [number, number]) => {
    if (markerRef.current) {
      markerRef.current.setGeometry(new Point(fromLonLat(coords)));
    }
  };

  const reverseGeocode = async (coords: [number, number]) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords[1]}&lon=${coords[0]}`,
      );
      const data = await response.json();
      const locationName =
        data.display_name || `${coords[1].toFixed(4)}, ${coords[0].toFixed(4)}`;
      setAddress(locationName);
    } catch (error) {
      console.error('Error fetching location details:', error);
      const fallbackName = `${coords[1].toFixed(4)}, ${coords[0].toFixed(4)}`;
      setAddress(fallbackName);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          searchQuery,
        )}`,
      );
      const results = await response.json();
      if (results.length > 0) {
        const { lat, lon, display_name } = results[0];
        const coords: [number, number] = [parseFloat(lon), parseFloat(lat)];
        selectedCoordsRef.current = coords;
        setSelectedCoords(coords);
        updateMarkerPosition(coords);
        setAddress(display_name);
        setIsConfirmed(false);

        // Center the map on the searched location and zoom in
        if (mapInstanceRef.current) {
          const view = mapInstanceRef.current.getView();
          view.setCenter(fromLonLat(coords));
          view.setZoom(16); // Zoom level for a closer view
        }
      } else {
        alert('No results found for the search query.');
      }
    } catch (error) {
      console.error('Error searching location:', error);
      alert('Error searching location. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirm = () => {
    setIsConfirmed(true);
    onSelect(address, selectedCoords);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative h-screen w-full overflow-y-hidden bg-white">
        <div className="z-50 border-b bg-white/10 p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-base font-medium text-gray-700">
                Selected Location
              </p>
              <div className="flex items-center">
                <p className="text-sm text-gray-500">
                  {isLoading
                    ? 'Loading address...'
                    : address || 'Click on the map'}
                </p>
                {isLoading && (
                  <svg
                    className="ml-2 h-4 w-4 animate-spin text-teal-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
              </div>
            </div>
            <div className="flex flex-shrink-0 items-center space-x-2">
              {!isConfirmed ? (
                <button
                  onClick={handleConfirm}
                  className="transition-300 rounded-full bg-teal-500 px-6 py-2 text-white hover:bg-teal-600"
                >
                  Confirm Location
                </button>
              ) : (
                <button
                  onClick={onClose}
                  className="rounded-full bg-teal-500 px-4 py-2 text-white hover:bg-teal-600"
                >
                  Done
                </button>
              )}

              <button
                onClick={onClose}
                className="transition-300 rounded-full bg-teal-50 p-2 text-teal-600 outline outline-1 outline-teal-500 hover:bg-teal-100 hover:text-gray-700"
              >
                <TbX className="text-xl" />
              </button>
            </div>
          </div>
        </div>

        <div ref={mapRef} className="mt-auto h-[calc(100%-60px)] w-full" />
      </div>

      <div className="fixed bottom-5 left-1/2 flex h-fit w-full max-w-xl -translate-x-1/2 items-center gap-2 rounded-full bg-white p-2 shadow-lg">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a location"
          className="w-full rounded bg-transparent px-4 py-2 text-base"
        />
        <button
          onClick={handleSearch}
          className="transition-300 rounded-full bg-teal-500 px-5 py-2 text-white hover:bg-teal-600"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default MapPopup;
