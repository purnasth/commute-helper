import React from 'react';

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
          className="mt-4 w-full rounded bg-teal-500 px-4 py-2 text-white hover:bg-teal-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
