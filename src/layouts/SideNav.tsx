import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SideNavProps } from '../interfaces/types';
import logo from '../assets/logo.svg';

const routeLinks = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'About',
    link: '/about',
  },
  {
    id: 3,
    title: 'FAQ',
    link: '/help',
  },
];

const SideNav: React.FC<SideNavProps> = ({ isOpen, closeNav, navLinks }) => {
  return (
    <div className="relative">
      <div
        className={`transition-700 fixed inset-0 z-50 bg-black/30 backdrop-blur-sm ${
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
          <div className="flex p-4 items-center justify-between">
            <Link
              to="/"
              className="transition-150 inline-flex items-center gap-3 text-sm font-semibold text-teal-950 md:text-xl"
            >
              <img
                src={logo}
                alt="Logo"
                className="group-hover:filter-white transition-150 size-6 object-contain sm:size-10"
              />
            </Link>
            <button
              type="button"
              aria-label="Close Menu"
              onClick={closeNav}
              className="text-4xl text-teal-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="mt-14">
            {routeLinks.map((link) => (
              <li key={link.id} className="group">
                <NavLink
                  to={link.link}
                  className={({ isActive }) =>
                    `navlink ${
                      isActive ? 'bg-teal-300 text-teal-950' : 'text-teal-50'
                    }`
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-4 px-3 pt-8 md:hidden">
            {navLinks.map((link) => (
              <li key={link.id} className="group">
                <NavLink
                  key={link.id}
                  to={link.link}
                  className={({ isActive }) =>
                    `transition-150 flex items-center gap-2 rounded-md px-4 py-3 font-medium transition-colors duration-200 hover:bg-teal-400 hover:text-dark ${
                      isActive
                        ? 'bg-teal-300 text-teal-950'
                        : 'bg-teal-100 text-teal-600'
                    }`
                  }
                >
                  {link.icon}
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-5 px-3">
            <Link
              to="/login"
              className="inline-block w-full rounded-full bg-teal-300 px-6 py-2 text-center font-semibold text-teal-950"
            >
              Visit Login Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
