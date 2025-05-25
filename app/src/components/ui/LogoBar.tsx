import logo from '../../assets/logo.svg';
import logoAlt from '../../assets/logo-alt.svg';

const LogoBar = () => {
  return (
    <div className={`relative flex items-center justify-center`}>
      <span className="before:absolute before:left-0 before:h-[1px] before:w-[45%] before:bg-teal-950 before:content-[''] after:absolute after:right-0 after:h-[1px] after:w-[45%] after:bg-teal-400 after:content-[''] dark:before:bg-teal-400 dark:after:bg-light md:before:w-[47%] md:after:w-[47%]" />
      <img
        src={logoAlt}
        alt="Commuto"
        className={`z-10 size-14 select-none object-contain dark:hidden`}
        draggable="false"
      />
      <img
        src={logo}
        alt="Commuto"
        className={`z-10 hidden size-14 select-none object-contain dark:block`}
        draggable="false"
      />
    </div>
  );
};

export default LogoBar;
