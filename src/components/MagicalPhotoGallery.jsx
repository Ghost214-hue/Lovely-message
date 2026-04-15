import React, { useState } from 'react';

const MagicalPhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  // REPLACE WITH YOUR ACTUAL PHOTOS
  const photos = [
    { id: 1, src: 'images/sara1.jpeg', caption: 'Our beautiful journey begins 💕' },
    { id: 2, src: 'images/sara2.jpeg', caption: 'Every moment with you is magic ✨' },
    { id: 3, src: 'images/sara3.jpeg', caption: 'You make everything better 🌟' },
    { id: 4, src: 'images/sara4.jpeg', caption: 'My favorite person 📸' },
    { id: 5, src: 'images/sara5.jpeg', caption: 'Endless love 💖' },
    { id: 6, src: 'images/sara6.jpeg', caption: 'Forever and always 🌹' },
  ];

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-2xl">
      <h2 className="text-3xl font-bold text-center mb-6 animate-gradient">
        📸 Our Beautiful Memories
      </h2>
      
      <div className="grid grid-cols-2 gap-4">
        {photos.map((photo) => (
          <div 
            key={photo.id} 
            className="group cursor-pointer transform transition-all duration-500"
            onClick={() => setSelectedPhoto(photo)}
            onMouseEnter={() => setHoveredId(photo.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              transform: hoveredId === photo.id ? 'scale(1.05) rotate(2deg)' : 'scale(1)',
            }}
          >
            <div className="overflow-hidden rounded-2xl shadow-lg relative">
              <img 
                src={photo.src} 
                alt={photo.caption}
                className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                <span className="text-white text-sm font-bold animate-bounce-slow">✨ Click to see ✨</span>
              </div>
            </div>
            <p className="text-center mt-2 text-gray-600 text-xs font-medium">{photo.caption}</p>
          </div>
        ))}
      </div>

      {/* Magical Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[10000] flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-full max-h-full transform animate-bounce-slow">
            <img 
              src={selectedPhoto.src} 
              alt={selectedPhoto.caption}
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />
            <p className="text-white text-center mt-4 text-base bg-gradient-to-r from-purple-500 to-pink-500 py-2 px-4 rounded-full inline-block mx-auto w-auto">
              {selectedPhoto.caption}
            </p>
            <button 
              className="absolute -top-12 right-0 bg-white/20 hover:bg-white/30 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl transition-all hover:rotate-90 duration-300"
              onClick={() => setSelectedPhoto(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MagicalPhotoGallery;
