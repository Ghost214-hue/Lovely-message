import React, { useState, useEffect } from 'react';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  const createHeart = (e) => {
    let clientX, clientY;
    if (e.touches) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    const heartIcons = ['❤️', '💖', '💕', '💗', '💓', '💘', '💝', '💟'];
    const heart = {
      id: Date.now() + Math.random(),
      x: clientX,
      y: clientY,
      size: Math.random() * 25 + 15,
      icon: heartIcons[Math.floor(Math.random() * heartIcons.length)],
      rotation: Math.random() * 360,
    };
    setHearts((prev) => [...prev, heart]);
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== heart.id));
    }, 1500);
  };

  useEffect(() => {
    window.addEventListener('mousemove', createHeart);
    window.addEventListener('touchmove', createHeart);
    window.addEventListener('touchstart', createHeart);
    return () => {
      window.removeEventListener('mousemove', createHeart);
      window.removeEventListener('touchmove', createHeart);
      window.removeEventListener('touchstart', createHeart);
    };
  }, []);

  return (
    <>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: heart.x - heart.size / 2,
            top: heart.y - heart.size / 2,
            width: heart.size,
            height: heart.size,
            fontSize: heart.size,
            transform: `rotate(${heart.rotation}deg)`,
            animation: 'floatUp 1.5s ease-out forwards',
          }}
        >
          {heart.icon}
        </div>
      ))}
    </>
  );
};

export default FloatingHearts;
