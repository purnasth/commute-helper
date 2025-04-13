import { useParams } from 'react-router-dom';
import { policies } from '../constants/data';

const Policies = () => {
  const { policyId } = useParams<{ policyId: string }>();

  const policy = policies.find((p) => p.id === policyId);

  if (!policy) {
    return (
      <main className="p-6">
        <h1 className="text-2xl font-bold text-red-500">Policy Not Found</h1>
        <p className="mt-4 text-base text-gray-700">
          The policy you are looking for does not exist.
        </p>
      </main>
    );
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-teal-500">{policy.title}</h1>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
        {policy.content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </main>
  );
};

export default Policies;
