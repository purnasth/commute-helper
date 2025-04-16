import { Link } from 'react-router-dom';
import { policies } from '../../constants/data';

const AgreeInfo = () => {
  return (
    <>
      <p className="mt-3 bg-white text-center text-xs leading-normal sm:text-sm">
        By confirming, I agree to the{' '}
        {policies.map((policy, index) => (
          <span key={index}>
            <Link to={policy.link} className="text-dark underline">
              {policy.title}
            </Link>
            {index < policies.length - 1 ? ', ' : ' '}
          </span>
        ))}
        and{' '}
        <strong className="font-semibold">
          I understand breaking the rules will result in a ban from the
          platform.
        </strong>
      </p>
    </>
  );
};

export default AgreeInfo;
