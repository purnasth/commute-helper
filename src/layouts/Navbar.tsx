import { useState, useEffect } from 'react';
import SideNav from './SideNav';
import { Link, useLocation } from 'react-router-dom';
import { TbMenu2, TbPlus, TbSearch } from 'react-icons/tb';
import { getUserGreeting } from '../utils/functions';

const navLinks = [
  {
    id: 1,
    title: 'Find a Ride',
    link: '/passenger',
    icon: <TbSearch className="text-lg" />,
  },
  {
    id: 2,
    title: 'Post a Ride',
    link: '/hero',
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
        className={`sticky top-0 z-40 w-full transition-all duration-[1s] ${window.scrollY > 0 ? 'bg-white py-3 md:py-6' : 'p-3 md:p-6'} ${visible ? '' : '-translate-y-full'}`}
      >
        <div className={`flex items-center justify-between md:items-start`}>
          <Link
            to="/"
            className="rounded-full bg-teal-300 px-6 py-2 text-sm font-semibold md:text-base"
          >
            Commute Helper
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
            {userName ? (
              <p className="hidden items-center justify-center gap-2 rounded-full bg-teal-100 py-2 pl-4 pr-5 font-semibold text-teal-600 md:flex">
                <span className="animate-wave">&#128075;</span>
                Hi, {userName}!
              </p>
            ) : (
              <Link
                to="/login"
                className="hidden rounded-full bg-teal-300 px-6 py-2 font-semibold md:flex"
              >
                Login
              </Link>
            )}
            <button
              type="button"
              onClick={toggleNav}
              aria-label="Toggle Navigation"
            >
              <TbMenu2 className="scale-150 text-base" />
            </button>
          </div>
        </div>
      </nav>

      <SideNav closeNav={closeNav} isOpen={isOpen} navLinks={navLinks} />
    </>
  );
};

export default Navbar;
