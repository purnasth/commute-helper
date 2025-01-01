import { useState, useEffect } from 'react';
import SideNav from './SideNav';
import { Link, useLocation } from 'react-router-dom';
import { TbMenu2, TbPlus, TbSearch } from 'react-icons/tb';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
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
        className={`fixed top-0 z-40 w-full font-serif transition-all duration-[1s] ${window.scrollY > 0 ? 'py-6' : 'p-6'} ${visible ? '' : '-translate-y-full'}`}
      >
        <div className={`z-40 flex items-start justify-between`}>
          <a
            href="/"
            className="rounded-full bg-teal-300 px-6 py-2 font-semibold"
          >
            Commute Helper
          </a>

          <div className="flex items-center justify-end gap-8">
            <Link to="#" className="inline-flex items-center gap-2">
              <TbSearch className="text-lg" />
              Find a Ride
            </Link>
            <Link to="#" className="inline-flex items-center gap-2">
              <TbPlus className="text-lg" />
              Post a Ride
            </Link>
            <Link
              to="/login"
              className="rounded-full bg-teal-300 px-6 py-2 font-semibold"
            >
              Login
            </Link>
            <button
              className="inline-flex items-center justify-center gap-2 font-medium"
              onClick={toggleNav}
            >
              <TbMenu2 className="scale-150 text-base" />
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg> */}
              {/* Menu */}
            </button>
          </div>
        </div>
      </nav>

      <SideNav closeNav={closeNav} isOpen={isOpen} />
    </>
  );
};

export default Navbar;
