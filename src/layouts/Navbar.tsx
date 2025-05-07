import { useState, useEffect } from 'react';
import SideNav from './SideNav';
import { Link, useLocation } from 'react-router-dom';
import { TbMenu2, TbPlus, TbSearch } from 'react-icons/tb';
import { getUserGreeting } from '../utils/functions';
import logo from '../assets/logo.svg';
import logoAlt from '../assets/logo-alt.svg';
import ThemeToggle from '../components/ui/ThemeToggle';

const navLinks = [
  {
    id: 1,
    title: 'Find a Ride',
    link: '/role/passenger',
    icon: <TbSearch className="text-lg" />,
  },
  {
    id: 2,
    title: 'Post a Ride',
    link: '/role/rider',
    icon: <TbPlus className="text-lg" />,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [userName, setUserName] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Close nav on route change
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }, [location]);

  // Greet user
  useEffect(() => {
    setUserName(getUserGreeting());
  }, []);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  const closeNav = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };
  return (
    <>
      <nav
        className={`sticky top-0 z-40 w-full transition-all duration-[1s] ${window.scrollY > 0 ? 'bg-white py-3 dark:bg-dark md:py-3' : 'p-3 md:p-6'} ${visible ? '' : '-translate-y-full'}`}
      >
        <div className={`flex items-center justify-between md:items-start`}>
          <Link
            to="/"
            className="transition-150 inline-flex items-center gap-3 text-sm font-semibold text-teal-950 dark:text-teal-300 md:text-xl"
          >
            <img
              src={logoAlt}
              alt="Logo"
              className="group-hover:filter-white transition-150 size-6 object-contain dark:hidden sm:size-9"
            />
            <img
              src={logo}
              alt="Logo"
              className="group-hover:filter-white transition-150 hidden size-6 object-contain dark:block sm:size-9"
            />
            Commute Connect
          </Link>

          <div className="flex items-center justify-end gap-8">
            <ul className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.link}
                    className="inline-flex items-center gap-2"
                  >
                    {link.icon}
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6">
              {userName ? (
                <p className="hidden items-center justify-center gap-2 rounded-full bg-teal-100 py-2 pl-4 pr-5 font-semibold text-teal-600 md:flex">
                  <span className="animate-wave">&#128075;</span>
                  Hi, {userName}!
                </p>
              ) : (
                <Link
                  to="/login"
                  className="hidden rounded-full bg-teal-300 px-6 py-2 font-semibold dark:text-dark md:flex"
                >
                  Login
                </Link>
              )}
              <div className="group flex items-center gap-4 rounded-full py-1 pl-5 pr-1.5">
                <button
                  type="button"
                  onClick={toggleNav}
                  aria-label="Toggle Navigation"
                >
                  <TbMenu2 className="scale-150 text-base" />
                </button>

                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <SideNav closeNav={closeNav} isOpen={isOpen} navLinks={navLinks} />
    </>
  );
};

export default Navbar;
