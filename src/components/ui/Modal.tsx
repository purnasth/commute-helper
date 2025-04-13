import React from 'react';
import { TbX } from 'react-icons/tb';
import useDisableScroll from '../../hooks/useDisableScroll';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  useDisableScroll();

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 -z-10 size-full bg-black/50 backdrop-blur-sm"
        aria-hidden="true"
        onClick={handleOverlayClick}
      ></div>
      {/* <div className="relative rounded-3xl bg-white p-6 shadow-lg"> */}
      {children}
      <button
        onClick={onClose}
        className="absolute right-5 top-5 z-50 rounded-full border border-teal-500/20 bg-teal-50 p-1.5 text-teal-500 shadow hover:bg-teal-100"
      >
        <TbX className="text-xl" />
      </button>
      {/* </div> */}
    </div>
  );
};

export default Modal;
