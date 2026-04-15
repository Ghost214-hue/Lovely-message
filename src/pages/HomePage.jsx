import React from 'react';
import LoveMessage from '../components/LoveMessage';
import CountdownTimer from '../components/CountdownTimer';

const HomePage = () => {
  return (
    <div className="space-y-6">
      <LoveMessage />
      <CountdownTimer />
    </div>
  );
};

export default HomePage;