import React from 'react';
import { NavLink } from 'react-router-dom';

interface SideNavProps {
  isOpen: boolean;
  closeNav: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ isOpen, closeNav }) => {
  return (
    <div className="relative">
      <div
        className={`transition-700 fixed inset-0 z-30 bg-black/50 backdrop-blur-sm ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeNav}
      />

      <div
        className={`fixed left-0 top-0 h-full w-64 bg-teal-950 text-teal-50 transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } z-50`}
      >
        <div className="">
          <button
            onClick={closeNav}
            className="absolute right-4 top-4 text-4xl text-teal-50"
          >
            &times;
          </button>
          <ul className="mt-16">
            <li className="group">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `navlink ${isActive ? 'text-teal-300' : 'text-teal-50'}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="group">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `navlink ${isActive ? 'text-teal-300' : 'text-teal-50'}`
                }
              >
                About
              </NavLink>
            </li>
            <li className="group">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `navlink ${isActive ? 'text-teal-300' : 'text-teal-50'}`
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="group">
              <NavLink
                to="/help"
                className={({ isActive }) =>
                  `navlink ${isActive ? 'text-teal-300' : 'text-teal-50'}`
                }
              >
                Support
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
