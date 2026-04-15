import React, { useState, useEffect } from 'react';

const MagicalLoveMessage = () => {
  const [messageRevealed, setMessageRevealed] = useState(false);
  const [sparkles, setSparkles] = useState([]);
  const herName = "My Love"; // CHANGE THIS
  const yourName = "Your Name"; // CHANGE THIS

  const createSparkle = () => {
    const newSparkle = {
      id: Date.now() + Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
    };
    setSparkles(prev => [...prev, newSparkle]);
    setTimeout(() => {
      setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
    }, 1000);
  };

  useEffect(() => {
    if (messageRevealed) {
      const interval = setInterval(createSparkle, 300);
      return () => clearInterval(interval);
    }
  }, [messageRevealed]);

  return (
    <div className="relative bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-2xl animate-fadeIn overflow-hidden">
      {/* Animated border */}
      <div className="absolute inset-0 rounded-3xl animate-glow pointer-events-none"></div>
      
      <h1 className="text-4xl font-bold text-center mb-4 animate-gradient">
        Hey {herName} <span className="inline-block animate-wave text-5xl">✨</span>
      </h1>
      
      {!messageRevealed ? (
        <div className="text-center relative">
          <button 
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 w-full max-w-xs mx-auto block animate-pulse-slow"
            onClick={() => setMessageRevealed(true)}
          >
            💌 Open Your Love Letter 💌
          </button>
          <div className="mt-4 text-2xl animate-bounce-slow">💖</div>
        </div>
      ) : (
        <div className="relative animate-fadeIn">
          {/* Sparkles */}
          {sparkles.map(sparkle => (
            <div
              key={sparkle.id}
              className="fixed text-2xl pointer-events-none animate-float"
              style={{
                left: `${sparkle.x}%`,
                top: `${sparkle.y}%`,
              }}
            >
              ✨
            </div>
          ))}
          
          <div className="text-center">
            <div className="text-6xl mb-4 animate-heartBeat">💖</div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Every day with you feels like a beautiful dream. 
              You make my world brighter just by being in it.
              I fall in love with you a little more every single day.
              <br/><br/>
              <span className="animate-gradient font-bold">You are my sunshine, my moon, and all my stars.</span>
            </p>
            <div className="flex justify-center gap-2 my-4">
              {['❤️', '💖', '💕', '💗', '💓', '💘'].map((heart, i) => (
                <div key={i} className="text-2xl animate-bounce-slow" style={{ animationDelay: `${i * 0.1}s` }}>
                  {heart}
                </div>
              ))}
            </div>
            <p className="text-center text-purple-600 italic">
              Forever yours,<br/>
              <strong className="text-2xl animate-gradient">{yourName}</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MagicalLoveMessage;
