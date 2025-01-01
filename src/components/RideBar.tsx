import { useEffect, useState } from 'react';
import { TbMapPin, TbMessageChatbot, TbUser } from 'react-icons/tb';

const RideBar = () => {
  const [showRideBar, setShowRideBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      const bottomThreshold = 100; // Adjust this value as needed

      if (
        scrollPosition > 0 &&
        scrollPosition + windowHeight < documentHeight - bottomThreshold
      ) {
        setShowRideBar(true);
      } else {
        setShowRideBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main
      className={`fixed bottom-0 z-40 w-full bg-none py-0 transition-all duration-500 ease-in-out ${window.scrollY > 0 ? 'py-0' : 'px-6'} ${showRideBar ? 'translate-y-0' : 'translate-y-20'} `}
    >
      <form
        action=""
        className="flex items-center justify-between gap-2 rounded-full border bg-white p-2 shadow"
      >
        <div className="inline-flex w-full items-center rounded-full bg-teal-100">
          <label htmlFor="from" className="inline-flex items-center gap-2 pl-4">
            <TbMapPin className="text-lg" />
            From
          </label>
          <input
            type="text"
            id="from"
            className="w-full rounded-full bg-transparent px-2 py-3 text-dark ring-inset placeholder:text-dark focus:ring-1 focus:ring-teal-600"
            placeholder="Current Location"
          />
        </div>
        <div className="inline-flex w-full items-center rounded-full bg-teal-100">
          <label htmlFor="to" className="inline-flex items-center gap-2 pl-4">
            <TbMapPin className="text-lg" />
            To
          </label>
          <input
            type="text"
            id="to"
            className="w-full rounded-full bg-transparent px-2 py-3 text-dark ring-inset placeholder:text-dark focus:ring-1 focus:ring-teal-600"
            placeholder="Kathmandu BernHardt College"
          />
        </div>
        <div className="inline-flex w-full items-center rounded-full bg-teal-100">
          <label
            htmlFor="message"
            className="inline-flex items-center gap-2 pl-4"
          >
            <TbMessageChatbot className="text-lg" />
            Message
          </label>
          <input
            type="text"
            id="message"
            className="w-full rounded-full bg-transparent px-2 py-3 text-dark ring-inset placeholder:text-dark focus:ring-1 focus:ring-teal-600"
            placeholder="Optional message"
          />
        </div>
        <div className="inline-flex w-full items-center rounded-full bg-teal-100">
          <label
            htmlFor="role"
            className="inline-flex min-w-20 items-center gap-2 pl-4"
          >
            <TbUser className="text-lg" />
            I'm a
          </label>
          <select
            id="role"
            className="mr-2 w-full rounded-full bg-transparent px-2 py-3 text-dark ring-inset placeholder:text-dark focus:ring-1 focus:ring-teal-600"
          >
            <option value="driver">Rider</option>
            <option value="passenger">Passenger</option>
          </select>
        </div>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-teal-300 px-4 py-3"
        >
          {/* <TbSearch className="text-lg" /> */}
          Confirm
        </button>
      </form>
    </main>
  );
};

export default RideBar;
