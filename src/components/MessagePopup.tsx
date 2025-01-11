import React from 'react';
import { MdOutlineMarkChatUnread } from 'react-icons/md';
import { TbSend2, TbX } from 'react-icons/tb';

interface MessagePopupProps {
  onSelect: (message: string) => void;
  onClose: () => void;
}

const quickMessages = [
  "I'm leaving now",
  "I'll be there in 5 minutes",
  'See you at the location',
];

const MessagePopup: React.FC<MessagePopupProps> = ({ onSelect, onClose }) => {
  const [customMessage, setCustomMessage] = React.useState('');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Choose or Write Message</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <TbX className="text-2xl" />
          </button>
        </div>

        <div className="">
          <div className="relative">
            <input
              type="text"
              placeholder="Write custom message..."
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-3 pr-10 focus:border-teal-500"
            />
            {customMessage && (
              <button
                onClick={() => onSelect(customMessage)}
                className="absolute right-3 top-3 text-teal-500 hover:text-teal-600"
              >
                <TbSend2 className="text-2xl" />
              </button>
            )}
          </div>
        </div>

        <div className="space-y-2">
          {quickMessages.map((msg, idx) => (
            <div
              key={idx}
              className="cursor-pointer rounded-lg border px-3 py-3 transition-all duration-200 ease-in-out hover:bg-gray-100"
              onClick={() => onSelect(msg)}
            >
              <p className="flex items-center gap-3 font-normal">
                <MdOutlineMarkChatUnread className="text-lg" />
                {msg}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessagePopup;
