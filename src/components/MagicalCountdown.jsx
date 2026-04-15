import React, { useState, useEffect } from 'react';

const MagicalCountdown = () => {
  const [timeTogether, setTimeTogether] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const startDate = new Date('2026-02-01'); // CHANGE THIS DATE

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = now - startDate;
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (86400000)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (3600000)) / (1000 * 60));
      const seconds = Math.floor((difference % (60000)) / 1000);
      
      setTimeTogether({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeTogether.days, icon: '📅' },
    { label: 'Hours', value: timeTogether.hours, icon: '⏰' },
    { label: 'Mins', value: timeTogether.minutes, icon: '⏱️' },
    { label: 'Secs', value: timeTogether.seconds, icon: '⚡' },
  ];

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-2xl text-center mt-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-pink-100/20 animate-spin-slow"></div>
      <h3 className="text-2xl font-bold mb-4 animate-gradient">
        ⏰ Time Together ⏰
      </h3>
      <div className="grid grid-cols-4 gap-3 relative z-10">
        {timeUnits.map((unit, idx) => (
          <div key={idx} className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-3 transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-1">{unit.icon}</div>
            <div className="text-3xl font-bold text-purple-600 animate-pulse-slow">{unit.value}</div>
            <div className="text-xs text-gray-600 mt-1">{unit.label}</div>
          </div>
        ))}
      </div>
      <p className="text-gray-500 text-sm mt-4 animate-float-slow">
        of being madly in love ❤️
      </p>
    </div>
  );
};

export default MagicalCountdown;
