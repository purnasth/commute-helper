import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TbMapPin, TbBrandHipchat, TbUser } from 'react-icons/tb';
import { findRideFormFields } from '../constants/data';

interface RideFormProps {
  setShowLocationPopup: (show: boolean) => void;
  setShowMessagePopup: (show: boolean) => void;
  setActiveInput: (input: 'from' | 'to' | null) => void;
}

const RideForm: React.FC<RideFormProps> = ({
  setShowLocationPopup,
  setShowMessagePopup,
  setActiveInput,
}) => {
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({
    from: '',
    to: '',
    message: '',
    role: 'passenger',
  });

  const handleInputClick = (fieldName: string) => {
    if (fieldName === 'from' || fieldName === 'to') {
      setActiveInput(fieldName as 'from' | 'to');
      setShowLocationPopup(true);
    } else if (fieldName === 'message') {
      setShowMessagePopup(true);
    }
  };

  return (
    <form
      action=""
      className="flex items-center justify-between gap-2 rounded-full border bg-white p-2 shadow"
    >
      {findRideFormFields.map(({ name, label, type, placeholder, options }) => (
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
            {name === 'message' ? <TbBrandHipchat className="text-lg" /> : null}
            {name === 'role' ? <TbUser className="text-lg" /> : null}
            {label}
          </label>
          {type === 'select' ? (
            <select
              id={name}
              value={formValues[name]}
              onChange={(e) =>
                setFormValues({ ...formValues, [name]: e.target.value })
              }
              className="mr-2 w-full rounded-full bg-transparent px-2 py-3 text-sm text-dark text-dark/50 ring-inset focus:outline-none"
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
              value={formValues[name]}
              onClick={() => handleInputClick(name)}
              readOnly={name === 'from' || name === 'to'}
              placeholder={placeholder}
              className="w-full rounded-full bg-transparent px-2 py-3 text-sm text-dark ring-inset placeholder:text-dark/50 focus:outline-none"
            />
          )}
        </div>
      ))}
      <Link
        to="no-rides"
        className="inline-flex items-center gap-2 rounded-full bg-teal-300 px-6 py-3 text-sm"
      >
        Confirm
      </Link>
    </form>
  );
};

export default RideForm;
