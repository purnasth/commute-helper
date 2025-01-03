import React, { useState } from 'react';
import { TbCirclePlus } from 'react-icons/tb';

const faqContents = [
  {
    question: 'What is the purpose of this web app?',
    answer:
      'This web app helps connect riders and passengers, allowing them to coordinate commutes efficiently. ',
  },
  {
    question: 'Which technologies are used in this project?',
    answer:
      'The frontend uses Vite, React.js, TypeScript, TailwindCSS, and pnpm, while the backend uses .NET Core with C#.',
  },
  {
    question: 'How can I post or search for a ride?',
    answer:
      "Simply fill in the 'From' and 'To' locations, select your role (Rider/Passenger), and confirm your ride details.",
  },
  {
    question: 'Is there real-time suggestion functionality?',
    answer:
      "Yes, the app provides real-time suggestions for 'From' and 'To' locations based on your input.",
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes, we prioritize data security and use secure communication protocols.',
  },
  {
    question: 'Can I change my role from Rider to Passenger later?',
    answer:
      'Yes, you can update your role anytime from your profile or while posting a ride.',
  },
  {
    question: 'Why was Commute Helper developed?',
    answer:
      'Commute Helper was developed to make daily commutes easier and more efficient by connecting riders and passengers.',
  },
  {
    question: 'What is the vision and mission of Commute Helper?',
    answer:
      'Our Vision is to live in a world where we all share resources to better preserve our economy and planet. Our Mission is to fill the empty seats in our ride and make our commute more affordable and sustainable.',
  },
  {
    question: 'Is Commute Helper profit-oriented?',
    answer:
      "Commute Helper is non profit-oriented and aims to provide a free service to the community and help reduce carbon emissions. It doesn't generate any revenue from the platform.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => (
  <div className="border-b border-teal-950/10">
    <button
      onClick={onClick}
      className="flex w-full items-center justify-between pb-4 text-left focus:outline-none"
    >
      <h3 className="text-xl font-semibold">{question}</h3>
      <TbCirclePlus
        className={`transition-300 text-2xl text-teal-950 ${isOpen ? 'rotate rotate-[135deg]' : 'rotate-0'} `}
      />
    </button>
    <div
      className={`transition-max-height overflow-hidden overflow-y-auto duration-500 ${
        isOpen ? 'max-h-40' : 'max-h-0'
      }`}
    >
      <p className="rounded-md pb-6 text-gray-600">{answer}</p>
    </div>
  </div>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="rounded-3xl border border-teal-950/10 p-12 shadow-md">
      <div className="space-y-6">
        {faqContents.map(({ question, answer }, index) => (
          <FAQItem
            key={index}
            question={question}
            answer={answer}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
