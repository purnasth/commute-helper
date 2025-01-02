import FAQ from '../components/FAQ';
import CareOurEarth from '../components/ui/CareOurEarth';

const FAQPage = () => {
  return (
    <>
      <main>
        <div className="container mb-24 justify-items-center space-y-8 text-center">
          <CareOurEarth />
          <h2 className="text-5xl font-bold">Frequently Asked Questions</h2>
          <p className="max-w-2xl">
            Clear your doubts and get answers to the most frequently asked
            questions about our platform. If you have any other questions, feel
            free to contact us. We are here to help you. Didn't find what you
            were looking for?{' '}
            <a
              href="mailto:purnashrestha0310@gmail.com"
              className="text-teal-400 underline"
              target="_blank"
              rel="noreferrer"
            >
              Contact us
            </a>
          </p>
        </div>
        <FAQ />
      </main>
    </>
  );
};

export default FAQPage;
