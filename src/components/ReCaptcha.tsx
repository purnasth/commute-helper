import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import ReCAPTCHA from 'react-google-recaptcha';

const ReCaptcha = () => {
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      toast.error('Please complete the reCAPTCHA verification.');
      return;
    }

    toast.success('Form submitted successfully!');
  };

  return (
    <>
      <form onSubmit={onSubmit} className="mt-24">
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // reCAPTCHA site key
          onChange={handleRecaptchaChange}
        />

        <button type="submit">Submit</button>
      </form>

      <ToastContainer />
    </>
  );
};

export default ReCaptcha;
