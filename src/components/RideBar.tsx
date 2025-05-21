import { toast } from 'react-toastify';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { TbUser, TbMapPin, TbBrandHipchat } from 'react-icons/tb';

import { ImEye } from 'react-icons/im';

import { findRideFormFields } from '../constants/data';

import { RideFormData, RideBarProps } from '../interfaces/types';

import Modal from './ui/Modal';
import AgreeInfo from './ui/AgreeInfo';
import NoRideFound from './ui/NoRideFound';
import SearchingRide from './ui/SearchingRide';

import MessagePopup from './MessagePopup';
import LocationPopup from './LocationPopup';

import RideResultsList from '../pages/RideResultsList';

import useRideForm from '../hooks/useRideForm';
import useScrollVisibility from '../hooks/useScrollVisibility';

import { rideFormSchema } from '../schemas/formSchema';

const RideBar: React.FC<RideBarProps> = ({ fromHome = false, role }) => {
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [showMessagePopup, setShowMessagePopup] = useState(false);
  const [activeInput, setActiveInput] = useState<'from' | 'to' | null>(null);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [ridesFound, setRidesFound] = useState<RideFormData[]>([]); // Tracks found rides
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [showAvailableRidesBtn, setShowAvailableRidesBtn] = useState(false);
  const navigate = useNavigate();
  const showRideBar = useScrollVisibility(100);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<RideFormData>({
    defaultValues: {
      from: '',
      to: '',
      message: '',
      role: role || '',
    },
    resolver: yupResolver(rideFormSchema),
  });

  // Set the role to the provided role prop if it exists
  useEffect(() => {
    if (role) {
      setValue('role', role);
    }
  }, [role, setValue]);

  // Use the custom hook for pre-filling form data
  useRideForm(setValue);

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
    // Check if the user is logged in
    const user = localStorage.getItem('user');
    if (!user) {
      localStorage.setItem('rideFormData', JSON.stringify(data));
      localStorage.setItem('redirectAfterLogin', window.location.pathname);

      toast.error('Please log in to confirm your ride route.');
      navigate('/login');
      return;
    }

    const rideWithTimestamp = {
      ...data,
      timestamp: new Date().toISOString(),
    };

    const existingRides = JSON.parse(localStorage.getItem('rides') || '[]');
    localStorage.setItem(
      'rides',
      JSON.stringify([...existingRides, rideWithTimestamp]),
    );

    const loadingToastId = toast.loading('Submitting your ride route...');
    setTimeout(() => {
      toast.dismiss(loadingToastId);

      setIsLoading(true);
      setTimeout(() => {
        const availableRides = existingRides.filter(
          (ride: RideFormData) => ride.role !== data.role,
        );

        if (availableRides.length > 0) {
          // Case 1: Rides found
          setRidesFound(availableRides);
          toast.success(
            `Your ride route has been submitted! It will be visible to ${role === 'rider' ? 'passengers' : 'riders'} sharing the same route.`,
          );
        } else {
          // Case 2: No rides found
          setRidesFound([]);
          toast.info(
            `Your ride route has been submitted! Currently, no ${role === 'rider' ? 'passengers' : 'riders'} are sharing the same route.`,
          );
        }

        setIsLoading(false);
        setShowModal(true);

        reset({
          from: '',
          to: '',
          message: '',
          role: role || '',
        });
      }, 2000);
    }, 2000);
    console.log('Form Data:', rideWithTimestamp);
  };

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

  const onError = () => {
    const errorMessages = Object.values(errors)
      .map((error) => error?.message)
      .filter(Boolean)
      .join(', ');

    if (errorMessages) {
      // toast.error(`Please fill out the following fields: ${errorMessages}`);
      toast.error(`Please fill out all the fields:`);
    }
  };

  if (isLoading) {
    return (
      <Modal onClose={() => setIsLoading(false)}>
        <SearchingRide />
      </Modal>
    );
  }

  const handleReject = (ride: RideFormData) => {
    if (window.confirm('Are you sure you want to reject this ride?')) {
      // Remove the ride from local storage
      const existingRides = JSON.parse(localStorage.getItem('rides') || '[]');
      const updatedRides = existingRides.filter(
        (storedRide: RideFormData) => storedRide.timestamp !== ride.timestamp,
      );
      localStorage.setItem('rides', JSON.stringify(updatedRides));

      // Update the ridesFound state
      setRidesFound((prevRides) =>
        prevRides.filter((foundRide) => foundRide.timestamp !== ride.timestamp),
      );

      toast.info('Ride has been rejected.');
    }
  };

  const handleConfirm = (ride: RideFormData) => {
    if (window.confirm('Are you sure you want to confirm this ride?')) {
      // Remove the ride from local storage
      const existingRides = JSON.parse(localStorage.getItem('rides') || '[]');
      const updatedRides = existingRides.filter(
        (storedRide: RideFormData) => storedRide.timestamp !== ride.timestamp,
      );
      localStorage.setItem('rides', JSON.stringify(updatedRides));

      toast.success('Congratulations! Your ride has been confirmed!');

      navigate(
        `/ride-details?from=${encodeURIComponent(ride.from)}&to=${encodeURIComponent(
          ride.to,
        )}&message=${encodeURIComponent(ride.message)}&role=${encodeURIComponent(
          ride.role,
        )}&timestamp=${encodeURIComponent(ride.timestamp ?? '')}`,
      );
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (ridesFound.length > 0) {
      setShowAvailableRidesBtn(true);
    }
  };

  const handleShowAvailableRides = () => {
    setShowModal(true);
    setShowAvailableRidesBtn(false);
  };

  return (
    <>
      <main
        className={`${
          fromHome
            ? `fixed bottom-0 z-40 w-full bg-none py-0 transition-all duration-500 ease-in-out ${
                window.scrollY > 0 ? 'py-0' : 'px-6'
              } ${showRideBar ? 'translate-y-0' : 'translate-y-full lg:translate-y-20'}`
            : 'my-0 p-0'
        }`}
      >
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="flex flex-col items-center justify-between gap-2 rounded-3xl border bg-white p-2 shadow dark:border-teal-300 dark:bg-teal-600 lg:flex-row lg:rounded-full"
          aria-labelledby="ride-form-title"
        >
          {findRideFormFields.map(
            ({ name, label, type, placeholder, options }) => (
              <div
                key={name}
                className="relative inline-flex w-full items-center rounded-full bg-teal-100 focus-within:ring-1 focus-within:ring-teal-600"
              >
                <label
                  htmlFor={name}
                  className="inline-flex min-w-fit items-center gap-2 py-3 pl-4 text-sm text-dark"
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
                {name === 'role' && role ? (
                  <span className="mr-2 w-full rounded-full bg-transparent px-2 py-3 text-sm font-normal text-dark">
                    {role}
                  </span>
                ) : type === 'select' ? (
                  <select
                    id={name}
                    {...register(name)}
                    className={`mr-2 w-full rounded-full bg-transparent px-2 py-3 text-sm ring-inset focus:outline-none ${
                      errors[name] ? 'text-red-600' : 'text-dark'
                    }`}
                  >
                    <option value="" disabled>
                      {errors[name]
                        ? (errors[name]?.message as string)
                        : `Select your role`}
                    </option>
                    {options?.map((option) => (
                      <option
                        key={option}
                        value={option.toLowerCase()}
                        className="text-dark"
                      >
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
                    className={`w-full rounded-full bg-transparent px-2 py-3 text-sm text-dark ring-inset focus:outline-none ${
                      errors[name] ? 'placeholder:text-red-600' : ''
                    }`}
                    placeholder={
                      errors[name]
                        ? (errors[name]?.message as string)
                        : // 'is required*'
                          placeholder
                    }
                  />
                )}
              </div>
            ),
          )}
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-300 px-6 py-3 text-sm hover:!bg-teal-300 dark:text-dark lg:w-fit"
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
        <Modal onClose={handleCloseModal} aria-labelledby="modal-title">
          {ridesFound.length > 0 ? (
            <RideResultsList
              ridesFound={ridesFound}
              role={role || ''}
              handleConfirm={handleConfirm}
              handleReject={handleReject}
            />
          ) : (
            <NoRideFound />
          )}
        </Modal>
      )}

      {showAvailableRidesBtn && ridesFound.length > 0 && (
        <button
          type="button"
          aria-label="Show available rides"
          onClick={handleShowAvailableRides}
          className="fixed left-1/2 top-0 z-50 flex origin-center -translate-x-1/2 items-center gap-1.5 rounded-xl rounded-t-none bg-gradient-to-r from-teal-300 via-teal-400 to-teal-600 py-1.5 pl-4 pr-5 text-xs font-normal text-dark shadow-xl transition-all duration-200 hover:scale-105 hover:from-teal-400 hover:to-teal-500 md:text-base"
        >
          <ImEye className="text-sm md:text-lg" />
          Available Rides
        </button>
      )}
    </>
  );
};

export default RideBar;
