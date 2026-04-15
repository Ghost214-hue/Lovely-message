import React, { useState } from 'react';

const MagicalReasons = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const reasons = [
    "Your smile lights up my entire world 🌟",
    "The way you laugh makes my heart skip a beat 💓",
    "You're kind to everyone you meet 🤗",
    "Your intelligence amazes me every day 🧠",
    "You make me a better person 🌈",
    "The little things you do show how much you care 💝",
    "Your strength inspires me 💪",
    "The way you look at me like I'm the only one 👀",
    "Your hugs feel like home 🏠",
    "You accept me for exactly who I am 💯",
    "Every adventure is better with you 🎢",
    "You're my best friend and my love 👫",
  ];

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-2xl animate-fadeIn">
      <h2 className="text-3xl font-bold text-center mb-2 animate-gradient">
        💖 Reasons I Love You 💖
      </h2>
      <p className="text-center text-gray-500 text-sm mb-6 animate-bounce-slow">
        {reasons.length} magical reasons and counting...
      </p>
      <div className="space-y-3">
        {reasons.map((reason, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              transform: hoveredIndex === index ? 'translateX(10px)' : 'translateX(0)',
            }}
          >
            <div className="flex items-start gap-3">
              <span className="font-bold text-pink-500 text-lg min-w-[35px] animate-pulse-slow">
                {index + 1}
              </span>
              <span className="text-gray-700 flex-1 text-sm leading-relaxed">
                {reason}
              </span>
              {hoveredIndex === index && (
                <span className="text-2xl animate-bounce-slow">💖</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MagicalReasons;
