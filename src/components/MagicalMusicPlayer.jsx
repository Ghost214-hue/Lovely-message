import React, { useRef, useState } from 'react';

const MagicalMusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-2xl text-center overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-pink-100/20 animate-spin-slow"></div>
      
      <div className="relative z-10">
        <div className="mb-4">
          <span className="text-6xl animate-heartBeat inline-block">🎵</span>
        </div>
        
        <h3 className="text-2xl font-bold mb-4 animate-gradient">
          Our Song
        </h3>
        
        <div className="flex justify-center gap-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className={`w-1.5 bg-pink-500 rounded-full transition-all duration-300 ${isPlaying ? 'animate-pulse-slow' : ''}`}
              style={{ 
                height: isPlaying ? `${20 + Math.random() * 20}px` : '20px',
                animationDelay: `${i * 0.15}s`
              }}
            />
          ))}
        </div>
        
        <button 
          onClick={togglePlay}
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 w-full max-w-xs mx-auto block mb-4"
        >
          {isPlaying ? '⏸️ Pause Magic' : '▶️ Play Our Song'}
        </button>
        
        <audio 
          ref={audioRef} 
          src="/music/melanin.mp3" 
          loop 
        />
        
        <p className="text-gray-500 text-sm animate-float-slow">
          💕 Every note reminds me of you 💕
        </p>
        
        {isPlaying && (
          <div className="mt-4 text-2xl animate-bounce-slow">
            🎶 ✨ 💖 ✨ 🎶
          </div>
        )}
      </div>
    </div>
  );
};

export default MagicalMusicPlayer;
