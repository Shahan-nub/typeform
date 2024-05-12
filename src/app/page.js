import OurAwards from '@/components/AWARDS/OurAwards';
import HomePage from '@/components/Home/HomePage';
import React from 'react';


const Home = () => {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <HomePage></HomePage>
      <OurAwards></OurAwards>
    </div>
  );
};

export default Home;
