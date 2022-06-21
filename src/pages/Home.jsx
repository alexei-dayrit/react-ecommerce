import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Carousel />
    </div>
  );
};

export default Home;
