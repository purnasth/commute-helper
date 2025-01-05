const AgreeInfo = () => {
  return (
    <>
      <p className="mt-3 bg-white text-center text-sm">
        By confirming, I agree to the{' '}
        <a href="/terms" className="text-teal-500 underline">
          Ride Cancellation Policy
        </a>
        {',  '}
        <a href="/terms" className="text-teal-500 underline">
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="/privacy" className="text-teal-500 underline">
          Privacy Policy
        </a>{' '}
        and{', '}
        <strong className="font-semibold">
          I understand breaking the rules will result in a ban from the
          platform.
        </strong>
      </p>
    </>
  );
};

export default AgreeInfo;
