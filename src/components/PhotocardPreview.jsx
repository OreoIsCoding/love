import React from 'react';

function PhotocardPreview({ character, onClose }) {
  // Function to stop all audio elements
  const stopAllAudio = () => {
    document.querySelectorAll('audio').forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
  };

  // Handle close with audio stop
  const handleClose = () => {
    stopAllAudio();
    onClose();
  };
  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md overflow-hidden"
      onClick={handleClose}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div 
        className="relative w-full h-full flex items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="fixed top-4 right-4 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm
                    flex items-center justify-center transition-colors z-[200]"
          onClick={handleClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        {/* Photocard */}
        <div className={`
          relative rounded-xl overflow-hidden
          shadow-2xl hover:scale-[1.02] transition-transform duration-300
          mx-auto
          w-[95vw] sm:w-[85vw] md:w-[75vw] lg:w-[65vw]
          h-[80vh] sm:h-[85vh] md:h-[90vh]
          max-w-[500px]
        `}>
          {/* Banner Background with Dynamic Gradient */}
          <div className={`
            absolute inset-0 bg-gradient-to-r ${character.color}
            opacity-90 transition-opacity duration-300
          `}></div>
          
          {/* Radial Gradient for Character Spotlight */}
          <div className="absolute inset-0 bg-radial-gradient opacity-70"></div>

          {/* Dynamic Background Pattern */}
          <div className="absolute inset-0 opacity-10"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                 backgroundSize: '100px 100px'
               }}></div>

          {/* Large Background Text */}
          <div className="absolute inset-0 flex items-center justify-center z-10 overflow-hidden pointer-events-none select-none">
            <h3 className={`text-[8rem] font-black ${character.textColor} opacity-[0.06] transform 
                          whitespace-nowrap text-center leading-none tracking-tight`}
                style={{ letterSpacing: '-0.05em' }}>
              {character.nameEn.split(' ')[0]}
            </h3>
          </div>

          {/* Character Standee Image - Centered */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[80%] z-20">
            <div className="relative h-full aspect-[3/4]">
              <img 
                src={character.image}
                alt={character.nameEn}
                className="h-full w-full object-cover scale-[1.02]"
                style={{
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0.7))',
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0.7))',
                  mixBlendMode: 'multiply',
                }}
              />
            </div>
          </div>

          {/* Character Info */}
          <div className="absolute bottom-2 left-0 right-0 z-30 px-4 text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-1 inline-block max-w-[60%] mx-auto
                          shadow-lg">
              <h3 className={`text-base font-bold leading-tight ${character.textColor}
                            drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]`}>
                {character.nameEn.split(' ')[0]}
              </h3>
              <p className={`text-xs font-medium ${character.textColor} opacity-90`}>
                {character.title}
              </p>
              <p className={`text-[10px] ${character.textColor} opacity-75 tracking-wider`}>
                {character.series}
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className={`absolute top-4 left-4 w-16 h-0.5 ${character.borderColor}`}></div>
          <div className={`absolute top-4 left-4 w-0.5 h-16 ${character.borderColor}`}></div>
          <div className={`absolute bottom-4 right-4 w-16 h-0.5 ${character.borderColor}`}></div>
          <div className={`absolute bottom-4 right-4 w-0.5 h-16 ${character.borderColor}`}></div>
        </div>
      </div>
    </div>
  );
}

export default PhotocardPreview;
