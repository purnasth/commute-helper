import React from 'react';
import Intro from '../components/Intro';
import RideBar from '../components/RideBar';
import AboutInfo from '../components/AboutInfo';

const Home: React.FC = () => {
  return (
    <>
      <Intro />
      <RideBar fromHome />
      <AboutInfo />
    </>
  );
};

export default Home;
