import { useEffect, useState } from 'react';

import FontBrand from '../components/ui/FontBrand';
import LogoBrand from '../components/ui/LogoBrand';
import ColorBrand from '../components/ui/ColorBrand';

interface BrandLink {
  id: number;
  title: string;
  link: string;
}

const brandLinks = [
  {
    id: 1,
    title: 'Logo',
    link: 'logo',
  },
  {
    id: 2,
    title: 'Font',
    link: 'font',
  },
  {
    id: 3,
    title: 'Color',
    link: 'color',
  },
];

const Brand = () => {
  const [activeSection, setActiveSection] = useState('logo');

  useEffect(() => {
    const GAP = 100; // px gap from top
    const handleScroll = () => {
      const sectionIds = brandLinks.map((l) => l.link);
      let found = 'about';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= GAP) {
            found = id;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const GAP = 90; // px gap from top
      const y = el.getBoundingClientRect().top + window.scrollY - GAP;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <main>
      <div className="container w-4/5">
        <div className="grid grid-cols-5">
          <div className="sticky top-20 col-span-1 h-fit">
            <h1 className="mb-8 text-base font-medium">Brand Guidelines</h1>
            <ul className="space-y-5">
              {brandLinks.map((link: BrandLink) => (
                <li key={link.id} className="group w-fit">
                  <a
                    href={`#${link.link}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(link.link);
                    }}
                    className={`navlink ${activeSection === link.link ? 'bg-teal-700 text-light dark:bg-teal-500 dark:text-dark' : 'bg-teal-100/80 text-teal-600 dark:bg-teal-100/20 dark:text-teal-400'}`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-4 divide-y-8">
            <LogoBrand />
            <FontBrand />
            <ColorBrand />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Brand;
