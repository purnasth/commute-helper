import Faq from '../components/Faq';
import Title from '../components/ui/Title';

const FAQPage = () => {
  return (
    <>
      <main>
        <Title
          title="Frequently Asked Questions"
          description="Clear your doubts and get answers to the most frequently asked questions about our platform. If you have any other questions, feel free to contact us. We are here to help you."
        />
        <Faq />
      </main>
    </>
  );
};

export default FAQPage;
