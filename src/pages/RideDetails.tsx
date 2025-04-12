import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TbAlarm, TbCircleDashed, TbMapPin, TbMapSearch } from 'react-icons/tb';
import { formatFullDate } from '../utils/functions';
import { FaWalking } from 'react-icons/fa';
import { MdOutlineDirectionsBike } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';

const RideDetails: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [showMap, setShowMap] = useState(false);

  const from = searchParams.get('from');
  const to = searchParams.get('to');
  const message = searchParams.get('message');
  const role = searchParams.get('role');
  const timestamp = searchParams.get('timestamp');

  const getDirectionsUrl = () => {
    if (!from || !to) return 'https://www.openstreetmap.org';
    return `https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=${encodeURIComponent(from)}%3B${encodeURIComponent(to)}`;
  };

  return (
    <main>
      <h1 className="mb-5 text-center text-2xl font-semibold text-teal-500">
        Ride Details
      </h1>

      <div className="mx-auto max-w-4xl space-y-6 rounded-xl border border-gray-200/80 bg-teal-50 p-6 shadow-sm transition-shadow hover:shadow-md">
        <div>
          <p className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-teal-100 px-4 py-1 text-base font-medium text-teal-500">
            {role === 'rider' ? <MdOutlineDirectionsBike /> : <FaWalking />}
            {role === 'rider' ? 'Rider' : 'Passenger'}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <TbCircleDashed className="text-xl text-teal-500" />
            <div className="h-7 w-px border border-dashed border-teal-500"></div>
            <TbMapPin className="text-xl text-teal-500" />
          </div>
          <div className="flex-1 space-y-6">
            <p className="text-base font-normal text-dark">{from}</p>
            <p className="text-base font-normal text-dark">{to}</p>
          </div>
        </div>
        <div className="relative rounded-xl bg-teal-200 p-3">
          <div className="absolute -top-2 right-5 size-0 origin-top rotate-90 scale-[2] border-l-[10px] border-r-[2px] border-t-[10px] border-l-transparent border-r-transparent border-t-teal-200"></div>
          <div className="flex items-center justify-between gap-2">
            <p className="pl-2 text-base font-normal text-dark">{message}</p>
            <p className="flex items-center justify-center gap-0.5 rounded-full bg-teal-50 px-3 py-1 text-base font-normal capitalize text-teal-500 shadow">
              <TbAlarm className="text-lg" />
              {timestamp ? formatFullDate(timestamp) : 'Just now'}
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <button
            onClick={() => setShowMap(!showMap)}
            className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors hover:bg-teal-200 ${
              showMap
                ? 'bg-teal-100 text-teal-600'
                : 'bg-teal-100 text-teal-600'
            }`}
          >
            {showMap ? (
              <IoClose className="scale-110 text-xl" />
            ) : (
              <TbMapSearch className="text-xl" />
            )}
            {showMap ? 'Hide Route' : 'View Route'}
          </button>
          {showMap && (
            <>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-gray-200">
                <iframe
                  title="OpenStreetMap Directions"
                  src={getDirectionsUrl()}
                  width="100%"
                  height="500"
                  className="absolute inset-0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <p>
                Having trouble with the map?{' '}
                <a
                  href={getDirectionsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-500 underline hover:text-teal-600 hover:no-underline"
                >
                  Open in new tab
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default RideDetails;
