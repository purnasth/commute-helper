import React from 'react';
import Intro from '../components/Intro';
import RideBar from '../components/RideBar';

const Home: React.FC = () => {
  return (
    <>
      <Intro />
      <RideBar fromHome/>
    </>
  );
};

export default Home;
