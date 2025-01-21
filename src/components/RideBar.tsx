import React, { useEffect, useState } from 'react';
import { TbMapPin, TbBrandHipchat, TbUser } from 'react-icons/tb';
import AgreeInfo from './ui/AgreeInfo';
import { Link } from 'react-router-dom';
import MessagePopup from './MessagePopup';
import LocationPopup from './LocationPopup';

interface RideBarProps {
  fromHome?: boolean;
}

const findRideFormFields = [
  {
    name: 'from',
    label: 'From',
    type: 'text',
    placeholder: 'Current Location',
  },
  {
    name: 'to',
    label: 'To',
    type: 'text',
    placeholder: 'Kathmandu BernHardt College',
  },
  {
    name: 'message',
    label: 'Message',
    type: 'text',
    placeholder: "I'm leaving in 5 minutes",
  },
  {
    name: 'role',
    label: "I'm a",
    type: 'select',
    options: ['Rider', 'Passenger'],
  },
];

const RideBar: React.FC<RideBarProps> = ({ fromHome = false }) => {
  const [showRideBar, setShowRideBar] = useState(false);
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [showMessagePopup, setShowMessagePopup] = useState(false);
  const [activeInput, setActiveInput] = useState<'from' | 'to' | null>(null);
  const [formValues, setFormValues] = useState({
    from: '',
    to: '',
    message: '',
    role: 'passenger',
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      const bottomThreshold = 100;

      if (
        scrollPosition > 0 &&
        scrollPosition + windowHeight < documentHeight - bottomThreshold
      ) {
        setShowRideBar(true);
      } else {
        setShowRideBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputClick = (fieldName: string) => {
    if (fieldName === 'from' || fieldName === 'to') {
      setActiveInput(fieldName as 'from' | 'to');
      setShowLocationPopup(true);
      setShowMessagePopup(false);
    } else if (fieldName === 'message') {
      setShowMessagePopup(true);
      setShowLocationPopup(false);
    }
  };

  const handleLocationSelect = (location: string) => {
    setFormValues((prev) => ({
      ...prev,
      [activeInput!]: location,
    }));
    setShowLocationPopup(false);
  };

  const handleMessageSelect = (message: string) => {
    setFormValues((prev) => ({
      ...prev,
      message,
    }));
    setShowMessagePopup(false);
  };

  return (
    <>
      <main
        className={`${
          fromHome
            ? `fixed bottom-0 z-40 w-full bg-none py-0 transition-all duration-500 ease-in-out ${
                window.scrollY > 0 ? 'py-0' : 'px-6'
              } ${showRideBar ? 'translate-y-0' : 'translate-y-20'}`
            : 'my-0 p-0'
        }`}
      >
        <form className="flex items-center justify-between gap-2 rounded-full border bg-white p-2 shadow">
          {findRideFormFields.map(
            ({ name, label, type, placeholder, options }) => (
              <div
                key={name}
                className="relative inline-flex w-full items-center rounded-full bg-teal-100 focus-within:ring-1 focus-within:ring-teal-600"
              >
                <label
                  htmlFor={name}
                  className="inline-flex min-w-fit items-center gap-2 pl-4 text-sm"
                >
                  {name === 'from' || name === 'to' ? (
                    <TbMapPin className="text-lg" />
                  ) : null}
                  {name === 'message' ? (
                    <TbBrandHipchat className="text-lg" />
                  ) : null}
                  {name === 'role' ? <TbUser className="text-lg" /> : null}
                  {label}
                </label>
                {type === 'select' ? (
                  <select
                    id={name}
                    value={formValues[name as keyof typeof formValues]}
                    onChange={(e) =>
                      setFormValues((prev) => ({
                        ...prev,
                        [name]: e.target.value,
                      }))
                    }
                    className="mr-2 w-full rounded-full bg-transparent px-2 py-3 text-sm text-dark ring-inset focus:outline-none"
                  >
                    {options?.map((option) => (
                      <option key={option} value={option.toLowerCase()}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={type}
                    id={name}
                    value={formValues[name as keyof typeof formValues]}
                    onChange={(e) =>
                      setFormValues((prev) => ({
                        ...prev,
                        [name]: e.target.value,
                      }))
                    }
                    onClick={() => handleInputClick(name)}
                    readOnly={name === 'from' || name === 'to'}
                    className="w-full rounded-full bg-transparent px-2 py-3 text-sm text-dark ring-inset placeholder:text-dark/50 focus:outline-none"
                    placeholder={placeholder}
                  />
                )}
              </div>
            ),
          )}
          <Link
            to="no-rides"
            className="inline-flex items-center gap-2 rounded-full bg-teal-300 px-6 py-3 text-sm"
          >
            Confirm
          </Link>
        </form>
      </main>
      {!fromHome && <AgreeInfo />}

      {showLocationPopup && (
        <LocationPopup
          activeInput={activeInput}
          onClose={() => setShowLocationPopup(false)}
          onSelect={handleLocationSelect}
          initialSearchQuery={formValues[activeInput!]}
        />
      )}
      {showMessagePopup && (
        <MessagePopup
          onSelect={handleMessageSelect}
          onClose={() => setShowMessagePopup(false)}
        />
      )}
    </>
  );
};

export default RideBar;
