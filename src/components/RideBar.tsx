import React, { useEffect, useState } from 'react';
import {
  TbMapPin,
  TbBrandHipchat,
  TbUser,
  TbCircleDashed,
  TbAlarm,
} from 'react-icons/tb';
import AgreeInfo from './ui/AgreeInfo';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LocationPopup from './LocationPopup';
import MessagePopup from './MessagePopup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { RideFormData, RideBarProps } from '../interfaces/types';
import Modal from './ui/Modal';
import NoRideFound from './ui/NoRideFound';
import SearchingRide from './ui/SearchingRide';

// Validation schema using Yup
const schema = yup.object().shape({
  from: yup.string().required('From location is required'),
  to: yup.string().required('To location is required'),
  message: yup.string().required('Message is required'),
  role: yup.string().required('Role is required'),
});

const findRideFormFields: Array<{
  name: 'from' | 'to' | 'message' | 'role';
  label: string;
  type: string;
  placeholder?: string;
  options?: string[];
}> = [
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

const RideBar: React.FC<RideBarProps> = ({ fromHome = false, role }) => {
  const [showRideBar, setShowRideBar] = useState(false);
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [showMessagePopup, setShowMessagePopup] = useState(false);
  const [activeInput, setActiveInput] = useState<'from' | 'to' | null>(null);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [ridesFound, setRidesFound] = useState<RideFormData[]>([]); // Tracks found rides
  const [showModal, setShowModal] = useState(false); // Modal visibility state

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      from: '',
      to: '',
      message: '',
      role: role || '',
    },
    resolver: yupResolver(schema),
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
    setValue(activeInput!, location);
    setShowLocationPopup(false);
  };

  const handleMessageSelect = (message: string) => {
    setValue('message', message);
    setShowMessagePopup(false);
  };

  const onSubmit = (data: RideFormData) => {
    // Add a timestamp to the ride data
    const rideWithTimestamp = {
      ...data,
      timestamp: new Date().toISOString(), // Save the current time as ISO string
    };

    // Save the ride data to local storage
    const existingRides = JSON.parse(localStorage.getItem('rides') || '[]');
    localStorage.setItem(
      'rides',
      JSON.stringify([...existingRides, rideWithTimestamp]),
    );

    const loadingToastId = toast.loading('Searching for available rides...');
    setTimeout(() => {
      toast.dismiss(loadingToastId);

      // Simulate loading and check for available rides
      setIsLoading(true);
      setTimeout(() => {
        const availableRides = existingRides.filter(
          (ride: RideFormData) => ride.role !== data.role, // Find rides with the opposite role
        );

        if (availableRides.length > 0) {
          // Case 1: Rides found
          setRidesFound(availableRides);
          toast.success('Rides found!');
        } else {
          // Case 2: No rides found
          setRidesFound([]); // Clear ridesFound
          toast.error('No rides found!');
        }

        setIsLoading(false);
        setShowModal(true); // Show the modal with the message
      }, 2000); // Simulate a 2-second delay
    }, 2000);
    console.log('Form Data:', rideWithTimestamp);
  };

  const onError = () => {
    Object.values(errors).forEach((error) => {
      toast.error(error?.message || 'Invalid input');
    });
  };

  if (isLoading) {
    return (
      <Modal onClose={() => setIsLoading(false)}>
        <SearchingRide />
      </Modal>
    );
  }

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
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="flex items-center justify-between gap-2 rounded-full border bg-white p-2 shadow"
        >
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
                    {...register(name)}
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
                    {...register(name)}
                    onClick={() => handleInputClick(name)}
                    readOnly={name === 'from' || name === 'to'}
                    className="w-full rounded-full bg-transparent px-2 py-3 text-sm text-dark ring-inset placeholder:text-dark/50 focus:outline-none"
                    placeholder={placeholder}
                  />
                )}
              </div>
            ),
          )}
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-teal-300 px-6 py-3 text-sm"
          >
            Confirm
          </button>
        </form>
      </main>
      {!fromHome && <AgreeInfo />}

      {showLocationPopup && (
        <LocationPopup
          activeInput={activeInput}
          onClose={() => setShowLocationPopup(false)}
          onSelect={handleLocationSelect}
          initialSearchQuery={activeInput ? '' : ''}
        />
      )}
      {showMessagePopup && (
        <MessagePopup
          onSelect={handleMessageSelect}
          onClose={() => setShowMessagePopup(false)}
        />
      )}

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {ridesFound.length > 0 ? (
            <div className="relative w-full max-w-xl rounded-3xl bg-white p-5 shadow-lg">
              <h3 className="pb-4 text-base font-medium text-teal-500">
                {role === 'rider' ? 'Available Passengers' : 'Available Rides'}
              </h3>
              <ul className="max-h-[50vh] space-y-2 overflow-y-auto">
                {ridesFound.map((ride, index) => (
                  <li
                    key={index}
                    className="space-y-3 rounded-xl border border-gray-200/80 bg-teal-50 p-4 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex flex-col items-center">
                        <TbCircleDashed className="text-base text-teal-500" />
                        <div className="h-4 w-px border border-dashed border-teal-500"></div>
                        <TbMapPin className="text-base text-green-500" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <p className="text-sm font-normal text-dark">
                          {ride.from}
                        </p>
                        <p className="text-sm font-normal text-dark">
                          {ride.to}
                        </p>
                      </div>
                    </div>
                    <div className="relative rounded-xl bg-teal-200 p-3">
                      <div className="absolute -top-2 right-5 size-0 origin-top rotate-90 scale-[2] border-l-[10px] border-r-[2px] border-t-[10px] border-l-transparent border-r-transparent border-t-teal-200"></div>
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-normal text-dark">
                          {ride.message}
                        </p>
                        <p className="flex min-w-24 items-center justify-center gap-0.5 rounded-full bg-teal-50 py-1 text-sm font-normal lowercase text-teal-500 shadow">
                          <TbAlarm className="text-lg" />
                          {ride.timestamp
                            ? new Date(ride.timestamp).toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit',
                              })
                            : 'Invalid timestamp'}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <NoRideFound />
          )}
        </Modal>
      )}
    </>
  );
};

export default RideBar;
