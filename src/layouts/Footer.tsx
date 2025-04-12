import { Link } from 'react-router-dom';
import { policies } from '../constants/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="flex flex-col justify-between gap-10 bg-teal-300 py-16 text-base text-dark hover:!bg-teal-300 md:flex-row md:items-end md:text-lg">
        <div className="space-y-3">
          <p className="">
            © Commute Helper {currentYear} | All rights reserved |
          </p>
          <p className="max-w-xl text-xs font-extralight">
            All logos, trademarks, and contents used in this website are for
            identification purposes only. Any unauthorized use, reproduction or
            distribution of the content of this website is subject to legal
            action.
          </p>
        </div>

        <div className="flex flex-col items-end gap-4">
          <ul className="policies flex flex-wrap gap-8 gap-x-6 gap-y-2">
            {policies.map((policy, index) => (
              <li key={index}>
                <Link
                  className="text-xs underline hover:no-underline"
                  to={policy.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {policy.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-sm">
            Developed by:{' '}
            <a
              href="https://www.purnashrestha.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base hover:underline"
            >
              Purna Shrestha
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
