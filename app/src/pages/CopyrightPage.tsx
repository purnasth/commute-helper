import { copyrightSections } from '../constants/data';
import CareOurEarth from '../components/ui/CareOurEarth';
import LogoBar from '../components/ui/LogoBar';

const CopyrightPage = () => {
  return (
    <>
      <main className="flex items-center justify-center px-0">
        <div className="container flex size-full max-w-4xl flex-col items-center justify-center gap-4 text-center">
          <CareOurEarth />
          <h1 className="mt-4 text-2xl font-bold capitalize leading-snug text-teal-500 md:text-4xl md:leading-snug lg:text-5xl lg:leading-snug">
            Trademark and Copyright Notice
          </h1>
          <p className="max-w-2xl font-body text-xs sm:text-sm md:text-sm">
            This page outlines the trademark and copyright policies for Commuto.
            Unauthorized use of our trademarks or copyrighted materials may
            result in legal action. Please read carefully to understand your
            rights and responsibilities regarding the use of Commuto's
            intellectual property.
          </p>
        </div>
      </main>
      <LogoBar />
      <main>
        <div className="container max-w-4xl space-y-10">
          {copyrightSections.map((section) => (
            <section className="space-y-4" key={section.id}>
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <p>{section.description}</p>
              {section.list && section.list.length > 0 && (
                <ul className="ml-6 list-disc text-sm">
                  {section.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </main>
    </>
  );
};

export default CopyrightPage;
