import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import ReCAPTCHA from 'react-google-recaptcha';
import 'react-toastify/dist/ReactToastify.css';
import { LoginFormData } from '../interfaces/types';

// Validation schema
const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const Login = () => {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
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

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
      toast.success('Form submitted successfully!');
      reset();
    } catch (error) {
      toast.error('Failed to submit form. Please try again later.');
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
          className="mx-auto max-w-lg rounded-xl border bg-white p-12 shadow"
        >
          {formInputs.map((input) => (
            <div key={input.name} className="relative mb-4">
              <label htmlFor={input.name} className="mb-2 block text-teal-800">
                {!errors[input.name] && input.label}
                {errors[input.name] && (
                  <span className="text-red-500">
                    {errors[input.name]?.message}*
                  </span>
                )}
              </label>
              {input.type === 'textarea' ? (
                <textarea
                  {...register(input.name)}
                  id={input.name}
                  className={`errors[input.name] ? 'border outline-0' : 'outline-1 outline-teal-600/30' } h-32 w-full resize-none rounded border-red-500 px-4 py-2 outline`}
                  placeholder={input.placeholder}
                />
              ) : (
                <input
                  {...register(input.name)}
                  id={input.name}
                  type={input.type}
                  className={`w-full rounded px-4 py-2 outline outline-teal-100 ${
                    errors[input.name]
                      ? 'border border-red-500 outline-0'
                      : 'outline-1 outline-teal-600/30'
                  }`}
                  placeholder={input.placeholder}
                />
              )}
            </div>
          ))}

          <div className="my-6">
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={handleRecaptchaChange}
            />
          </div>

          <div className="mb-6 flex items-center justify-between">
            <label htmlFor="remember" className="select-none text-gray-700">
              <input
                type="checkbox"
                id="remember"
                className="mr-2 accent-teal-400"
                checked
              />
              Remember Me
            </label>
            <a
              href="#"
              className="text-sm font-light text-teal-500 underline hover:no-underline"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className={`w-full rounded-full bg-teal-300 px-4 py-2 text-dark ${
              isSubmitting ? 'cursor-not-allowed opacity-75' : ''
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging...' : 'Login'}
          </button>
        </form>
      </main>
    </>
  );
};

export default Login;
