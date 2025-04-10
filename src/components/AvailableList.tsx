import React, { useEffect, useState } from 'react';
import { AvailableListProps } from '../interfaces/types';

const AvailableList: React.FC<AvailableListProps> = ({ role }) => {
  interface Ride {
    from: string;
    to: string;
    message: string;
    role: string;
  }

  const [items, setItems] = useState<Ride[]>([]);

  useEffect(() => {
    const storedRides = JSON.parse(localStorage.getItem('rides') || '[]');
    const filteredItems = storedRides.filter((ride: Ride) => ride.role === role);
    setItems(filteredItems);
  }, [role]);

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">
        {role === 'rider' ? 'Available Rides' : 'Available Passengers'}
      </h2>
      {items.length > 0 ? (
        items.map((item, index) => (
          <div key={index} className="mb-2 rounded border p-2">
            <p>
              <strong>From:</strong> {item.from}
            </p>
            <p>
              <strong>To:</strong> {item.to}
            </p>
            <p>
              <strong>Message:</strong> {item.message}
            </p>
          </div>
        ))
      ) : (
        <p>No {role === 'rider' ? 'rides' : 'passengers'} available.</p>
      )}
    </div>
  );
};

export default AvailableList;
