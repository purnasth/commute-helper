import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SideNavProps } from '../interfaces/types';
// import logo from '../assets/logo.svg';
import { IoClose } from 'react-icons/io5';

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

const SideNav: React.FC<SideNavProps> = ({
  isOpen,
  closeNav,
  navLinks,
  userName,
}) => {
  return (
    <div className="relative">
      <div
        className={`transition-700 fixed inset-0 z-50 bg-black/30 backdrop-blur-sm ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeNav}
      />

      <div
        className={`fixed left-0 top-0 w-64 p-6 transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } z-50`}
      >
        <div className="">
          <div className="flex items-center justify-between">
            {/* <Link
              to="/"
              className="transition-150 inline-flex items-center gap-3 text-sm font-semibold text-teal-950 md:text-xl"
            >
              <img
                src={logo}
                alt="Logo"
                className="group-hover:filter-white transition-150 size-6 object-contain sm:size-10"
              />
            </Link> */}
            <button
              type="button"
              aria-label="Close Menu"
              onClick={closeNav}
              className="rounded-full bg-dark/50 p-0.5 text-lg text-teal-50 dark:bg-light/30 dark:text-light"
            >
              <IoClose />
            </button>
          </div>

          <ul className="mt-4 space-y-3">
            {routeLinks.map((link) => (
              <li key={link.id} className="group w-fit">
                <NavLink
                  to={link.link}
                  className={({ isActive }) =>
                    `navlink ${isActive ? 'bg-teal-700 text-light dark:bg-teal-500 dark:text-dark' : 'bg-dark/50 text-light dark:bg-light/30 dark:text-light'}`
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* <hr className="border-teal-50 lg:hidden" /> */}

          <ul className="flex flex-col gap-4 py-8 lg:hidden">
            {navLinks.map((link) => (
              <li key={link.id} className="group">
                <NavLink
                  key={link.id}
                  to={link.link}
                  className={({ isActive }) =>
                    `transition-150 inline-flex items-center gap-2 rounded-full py-3 pl-4 pr-5 text-xs font-normal transition-colors duration-200 hover:bg-teal-400 hover:text-dark ${isActive ? 'bg-teal-700 text-light dark:bg-teal-500 dark:text-dark' : 'bg-dark/50 text-light dark:bg-light/30 dark:text-light'}`
                  }
                >
                  {link.icon}
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* <hr className="border-teal-300/40 md:hidden" /> */}

          <div>
            {/* <Link
              to="/login"
              className="inline-block w-full rounded-full bg-teal-300 px-6 py-2 text-center font-semibold text-teal-950"
            >
              Visit Login Page
            </Link> */}
            {userName ? (
              <Link
                to="/profile"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-100 py-3 pl-4 pr-5 text-sm font-semibold text-teal-600 md:hidden md:text-base"
              >
                <span className="animate-wave">&#128075;</span>
                Hi, {userName}!
              </Link>
            ) : (
              <Link
                to="/login"
                className="inline-flex rounded-full bg-teal-300 px-6 py-2 font-semibold dark:text-dark md:hidden"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
