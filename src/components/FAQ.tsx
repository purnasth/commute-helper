import React, { useState } from 'react';
import { TbCirclePlus } from 'react-icons/tb';
import { faqContents } from '../constants/data';
import { FAQItemProps } from '../interfaces/types';

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
