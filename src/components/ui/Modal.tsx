import React from 'react';
import { TbX } from 'react-icons/tb';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="rounded-lg bg-white p-6 shadow-lg">
        {children}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-500 hover:text-gray-700"
        >
          <TbX className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
