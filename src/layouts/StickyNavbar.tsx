import { Link } from 'react-router-dom';
import { navLinks } from '../constants/data';

const StickyNavbar = () => {
  return (
    <>
      <div className="fixed bottom-0 z-10 w-full overflow-hidden border bg-white shadow-lg dark:border-light/30 dark:bg-dark">
        <div className="flex items-center justify-center px-6 xl:justify-between">
          <div className="hidden xl:block">
            <p className="dark:opacity-70">Let's Get You Back on the Track!</p>
          </div>
          <ul className="flex items-center justify-center">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="transition-150 hover:bg-teal-50 hover:text-teal-600"
              >
                <Link
                  to={link.link}
                  className="inline-block border border-y-0 px-5 py-2 font-semibold dark:border-light/30 md:px-10 md:py-3"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden xl:block">
            <p className="dark:opacity-70">
              Connect, share & make a difference.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyNavbar;
