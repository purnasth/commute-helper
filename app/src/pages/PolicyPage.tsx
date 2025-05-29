import { policies } from '../constants/data';
import CareOurEarth from '../components/ui/CareOurEarth';
import LogoBar from '../components/ui/LogoBar';

const PolicyPage = () => {
  return (
    <>
      <main className="flex items-center justify-center px-0">
        <div className="container flex size-full max-w-4xl flex-col items-center justify-center gap-4 text-center">
          <CareOurEarth />
          <h1 className="mt-4 text-2xl font-bold capitalize leading-snug text-teal-500 md:text-4xl md:leading-snug lg:text-5xl lg:leading-snug">
            Terms, Policies & Legal
          </h1>
          <p className="max-w-2xl font-body text-xs sm:text-sm md:text-sm">
            This page outlines the key policies, terms, and legal information
            for using Commuto. Please read carefully to understand your rights,
            responsibilities, and our commitment to your privacy, safety, and a
            positive community experience.
          </p>
        </div>
      </main>
      <LogoBar />
      <main>
        <div className="container max-w-4xl space-y-10">
          {policies.map(({ title, description, list }, index) => (
            <section key={index} className="space-y-4">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="text-sm">{description}</p>
              <ul className="ml-6 list-disc space-y-1 text-sm">
                {list.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
    </>
  );
};

export default PolicyPage;
