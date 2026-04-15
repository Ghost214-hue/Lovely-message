import React, { useEffect, useState } from 'react';

const MagicalBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starCount = 100;
    const newStars = [];
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 5,
      });
    }
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating hearts background */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute text-2xl opacity-10 animate-float-slow"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        >
          {['❤️', '💖', '💕', '💗', '💓', '💘'][Math.floor(Math.random() * 6)]}
        </div>
      ))}
      
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-pulse-slow"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            opacity: Math.random() * 0.5 + 0.2,
          }}
        />
      ))}
    </div>
  );
};

export default MagicalBackground;
