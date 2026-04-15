import React, { useState } from 'react';
import FloatingHearts from './components/FloatingHearts';
import MagicalBackground from './components/MagicalBackground';
import MagicalLoveMessage from './components/MagicalLoveMessage';
import MagicalCountdown from './components/MagicalCountdown';
import MagicalReasons from './components/MagicalReasons';
import MagicalPhotoGallery from './components/MagicalPhotoGallery';
import MagicalMusicPlayer from './components/MagicalMusicPlayer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return (
          <>
            <MagicalLoveMessage />
            <MagicalCountdown />
          </>
        );
      case 'gallery':
        return <MagicalPhotoGallery />;
      case 'reasons':
        return <MagicalReasons />;
      case 'music':
        return <MagicalMusicPlayer />;
      default:
        return (
          <>
            <MagicalLoveMessage />
            <MagicalCountdown />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 relative overflow-x-hidden">
      <MagicalBackground />
      <FloatingHearts />
      
      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-4 left-4 right-4 z-20 bg-white/95 backdrop-blur-xl shadow-2xl rounded-full border border-white/20">
        <div className="flex justify-around items-center py-2 px-2">
          {[
            { id: 'home', icon: '🏠', label: 'Home' },
            { id: 'gallery', icon: '📸', label: 'Gallery' },
            { id: 'reasons', icon: '💖', label: 'Reasons' },
            { id: 'music', icon: '🎵', label: 'Music' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`flex flex-col items-center p-2 rounded-2xl transition-all duration-300 min-w-[70px] ${
                currentPage === item.id 
                  ? 'text-purple-600 bg-purple-50 scale-105 shadow-lg' 
                  : 'text-gray-500 hover:text-purple-400'
              }`}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-xs mt-1 font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 pb-28 pt-6">
        {renderPage()}
      </main>

      {/* Floating footer */}
      <footer className="relative z-10 text-center py-4 text-white/60 text-xs">
        Made with <span className="animate-heartBeat inline-block">💖</span> for my everything
      </footer>
    </div>
  );
}

export default App;
