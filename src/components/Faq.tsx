import React, { useState } from 'react';
import { TbCirclePlus } from 'react-icons/tb';
import { faqContents } from '../constants/data';
import { FaqItemProps } from '../interfaces/types';

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="rounded-3xl border border-teal-950/10 p-6 shadow-md sm:p-8 md:p-10 lg:p-12">
      <div className="space-y-4 sm:space-y-6 md:space-y-6">
        {faqContents.map((faq: FaqItemProps, index: number) => (
          <div
            key={index}
            className={`${
              index !== faqContents.length - 1
                ? 'border-b border-teal-950/10'
                : ''
            }`}
          >
            <div
              aria-hidden="true"
              onClick={() => toggleFAQ(index)}
              className="flex w-full items-center justify-between pb-4 text-left focus:outline-none"
            >
              <h3 className="text-base font-semibold sm:text-lg md:text-xl">
                {faq.question}
              </h3>
              <TbCirclePlus
                className={`text-xl text-teal-950 transition-transform sm:text-2xl ${
                  openIndex === index ? 'rotate-45' : 'rotate-0'
                }`}
              />
            </div>
            <div
              className={`transition-max-height overflow-hidden overflow-y-auto duration-500 ${
                openIndex === index ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <p className="rounded-md pb-6 text-sm text-gray-600 sm:text-base">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
