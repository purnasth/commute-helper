import * as yup from 'yup';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import 'react-toastify/dist/ReactToastify.css';
import { yupResolver } from '@hookform/resolvers/yup';

import { LoginFormData } from '../interfaces/types';
// import { useNavigate } from 'react-router-dom';
import { authorizedUsers } from '../constants/data';
import { getFirstNameFromEmail } from '../utils/functions';

// Validation schema
const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const Login = () => {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  // const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
  });

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const onSubmit = async (data: LoginFormData) => {
    if (!recaptchaToken) {
      toast.error('Please complete the reCAPTCHA verification.');
      return;
    }

    const user = authorizedUsers.find((user) => user.email === data.email);
    if (!user) {
      toast.error('Access denied. Please use an authorized email address.');
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const firstName = getFirstNameFromEmail(data.email);

      // Store user info in localStorage
      const userWithTimestamp = {
        ...user,
        loginTimestamp: Date.now(),
      };
      localStorage.setItem('user', JSON.stringify(userWithTimestamp));

      toast.success(`Login successful! Welcome, ${firstName}!`);

      const redirectAfterLogin = localStorage.getItem('redirectAfterLogin');
      if (redirectAfterLogin) {
        localStorage.removeItem('redirectAfterLogin');
        // navigate(redirectAfterLogin);
        window.location.href = redirectAfterLogin;
      } else {
        window.location.href = '/';
      }
    } catch {
      toast.error('Failed to login. Please try again later.');
    }
  };

  const formInputs: {
    name: keyof LoginFormData;
    label: string;
    placeholder: string;
    type: string;
  }[] = [
    {
      name: 'email',
      label: 'Email',
      placeholder: 'Enter Your Email',
      type: 'email',
    },
    {
      name: 'password',
      label: 'Password',
      placeholder: 'Enter Your Password',
      type: 'password',
    },
  ];

  return (
    <>
      <main>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto max-w-lg rounded-xl bg-white p-3 dark:bg-dark"
        >
          {formInputs.map((input) => (
            <div key={input.name} className="relative mb-4">
              <label
                htmlFor={input.name}
                className="mb-2 block text-teal-800 dark:text-light"
              >
                {!errors[input.name] && input.label}
                {errors[input.name] && (
                  <span className="text-red-500">
                    {errors[input.name]?.message}*
                  </span>
                )}
              </label>
              <input
                {...register(input.name)}
                id={input.name}
                type={input.type}
                className={`block w-full rounded-md bg-transparent px-4 py-2.5 text-base font-normal text-dark outline outline-1 -outline-offset-1 outline-teal-500/50 placeholder:font-light placeholder:text-dark/40 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-400 active:bg-teal-50 dark:text-light dark:placeholder:text-light/60 active:dark:bg-teal-950 sm:text-lg ${
                  errors[input.name] && 'outline-1 outline-red-500'
                }`}
                placeholder={input.placeholder}
              />
            </div>
          ))}

          <div className="my-6">
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={handleRecaptchaChange}
            />
          </div>

          <div className="mb-6 flex items-center justify-between">
            <label
              htmlFor="remember"
              className="select-none text-gray-700 dark:text-light"
            >
              <input
                type="checkbox"
                id="remember"
                className="mr-2 accent-teal-400"
                defaultChecked
              />
              Remember Me
            </label>
            {/* <a
              href="#"
              className="text-sm font-light text-teal-500 underline hover:no-underline"
            >
              Forgot Password?
            </a> */}
          </div>

          <button
            type="submit"
            className={`w-full rounded-full bg-teal-300 px-4 py-3 uppercase text-dark ${
              isSubmitting ? 'cursor-not-allowed opacity-75' : ''
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging...' : 'Login'}
          </button>
        </form>

        <div className="mx-auto mt-8 max-w-lg space-y-4 px-5 text-center">
          <p className="text-sm">
            To access this platform, you must use an{' '}
            <strong>authorized email address</strong> of{' '}
            <strong>Kathmandu BernHardt College</strong>.
          </p>
          <p className="text-xs">
            This ensures that only verified users can access the platform. If
            you encounter any issues or not a member of the organization,,
            please contact the administrator of{' '}
            <strong>Kathmandu BernHardt College</strong> for access.
          </p>
        </div>
      </main>
    </>
  );
};

export default Login;
