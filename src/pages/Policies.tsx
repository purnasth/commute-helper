import { useParams } from 'react-router-dom';
import { policies } from '../constants/data';
import Error404 from './Error404';

const Policies = () => {
  const { policyId } = useParams<{ policyId: string }>();

  const policy = policies.find((p) => p.id === policyId);

  if (!policy) {
    return <Error404 />;
  }

  return (
    <main>
      <h1 className="text-2xl font-bold text-teal-500">{policy.title}</h1>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700 dark:text-light/70">
        {policy.content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </main>
  );
};

export default Policies;
