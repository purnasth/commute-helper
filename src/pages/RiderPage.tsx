import RideBar from '../components/RideBar';
import Title from '../components/ui/Title';

const RiderPage = () => {
  return (
    <main>
      <Title
        title="Post a ride & Make an Impact"
        description="Share your ride with your co-workers and students sharing the same route and utilize the resources and empty seats of your vehicle. Save money, time and the environment. Your ride can make a difference. Share your ride now & be a hero!"
      />
      <RideBar />
    </main>
  );
};

export default RiderPage;
