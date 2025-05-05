import { useParams } from 'react-router-dom';
import { userRoles } from '../constants/data';
import Error404 from './Error404';
import Title from '../components/ui/Title';
import RideBar from '../components/RideBar';

const RoleBasedPage = () => {
  const { roleId } = useParams<{ roleId: string }>();
  const role = userRoles.find((r) => r.id === roleId);

  return (
    <>
      {role ? (
        <main className="z-auto">
          <Title title={role.title} description={role.description} />

          <RideBar role={role.id} />

          <section className="pt-12 md:pt-16 lg:pt-24">
            <h2 className="mx-auto w-fit max-w-md rounded-full bg-teal-100 px-4 py-1 text-center text-sm font-medium uppercase leading-snug text-teal-700 sm:text-base md:text-xl">
              {role.rulesTitle}
            </h2>
            <div className="mt-3 grid items-center gap-6 sm:mt-5 lg:mt-12 lg:grid-cols-2 lg:gap-12">
              <div className="relative">
                <img
                  src={role.heroImage}
                  alt={role.id}
                  className="animate-floating-up drop-shadow"
                />
              </div>
              <ul className="list-inside list-decimal space-y-4 md:space-y-6 lg:space-y-12">
                {role.rules.map((rule, index) => (
                  <li
                    key={index}
                    className="text-pretty text-sm font-light sm:text-base md:text-lg"
                  >
                    <strong className="rounded-full bg-teal-100 px-1.5 font-semibold text-teal-700">
                      {rule.title}
                    </strong>
                    - {rule.description}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
      ) : (
        <Error404 />
      )}
    </>
  );
};

export default RoleBasedPage;
