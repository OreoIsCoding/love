import React from 'react';

const VintageLetter = ({ onOpenLetter }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="flex justify-center items-center w-full min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
      <div 
        onClick={onOpenLetter}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative mx-auto w-[85vw] max-w-[320px] sm:max-w-[380px] md:max-w-[420px] 
          h-[160px] sm:h-[180px] md:h-[200px] cursor-pointer
          transform transition-all duration-500 ease-out
          ${isHovered ? 'scale-105' : 'scale-100'}`}
      >
        {/* Main Envelope Body */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 rounded-2xl shadow-2xl border border-slate-500/30">
          
          {/* Vintage Paper Texture Overlay */}
          <div className="absolute inset-0 rounded-2xl opacity-20"
               style={{
                 backgroundImage: `
                   radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0),
                   linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.1) 49%, rgba(255,255,255,0.1) 51%, transparent 52%)
                 `,
                 backgroundSize: '8px 8px, 16px 16px'
               }} />

          {/* Elegant Top Flap */}
          <div className={`absolute top-0 left-0 w-full h-24 sm:h-28 
            bg-gradient-to-br from-slate-500 to-slate-700 
            border border-slate-400/40 rounded-t-2xl 
            transform-gpu origin-top transition-all duration-700 ease-out z-20
            ${isHovered ? 'rotate-x-[20deg]' : ''}`}
               style={{ 
                 clipPath: 'polygon(0 0, 50% 85%, 100% 0, 100% 100%, 0 100%)',
                 transformStyle: 'preserve-3d'
               }}>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-300/10 to-slate-900/20" />
            
            {/* Flap Inner Pattern */}
            <div className="absolute inset-2 opacity-30"
                 style={{
                   backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)`
                 }} />
          </div>

          {/* Decorative Wax Seal */}
          <div className="absolute top-12 sm:top-14 left-1/2 transform -translate-x-1/2 w-16 sm:w-18 h-16 sm:h-18 z-30">
            {/* Outer Glow */}
            <div className={`absolute inset-0 bg-amber-400/30 rounded-full blur-md transition-all duration-300 ${
              isHovered ? 'scale-110 bg-amber-400/50' : ''
            }`} />
            
            {/* Wax Seal Base */}
            <div className="absolute inset-1 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-800 rounded-full shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent rounded-full" />
            </div>
            
            {/* Seal Design */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative text-amber-100 text-xl sm:text-2xl">
                <div className="absolute inset-0 text-amber-900/50 transform translate-x-0.5 translate-y-0.5">
                  💕
                </div>
                💕
              </div>
            </div>
            
            {/* Seal Border */}
            <div className="absolute inset-2 rounded-full border-2 border-amber-300/40" />
          </div>
          
          {/* Elegant Message Area */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-16 sm:pt-20">
            
            {/* Ornamental Top Border */}
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="w-6 sm:w-8 md:w-12 h-px bg-gradient-to-r from-transparent to-slate-300/60"></div>
              <div className="mx-2 sm:mx-3 text-slate-300 text-xs">✦</div>
              <div className="w-6 sm:w-8 md:w-12 h-px bg-gradient-to-l from-transparent to-slate-300/60"></div>
            </div>
            
            {/* Main Text */}
            <div className="text-slate-100 space-y-2 mt-4 sm:mt-8">
              <div className="mt-10 text-lg sm:text-xl md:text-2xl font-bold tracking-wide">
                <span className="text-slate-200">My</span>{' '}
                <span className="text-amber-300 drop-shadow-lg">Love</span>
              </div>
              
              <div className="text-xs sm:text-sm md:text-base italic opacity-90 tracking-wider">
                Open This Letter
              </div>
            </div>
            
            {/* Ornamental Bottom Border */}
            <div className="flex items-center mt-4 sm:mt-6 mb-3">
              <div className="w-6 sm:w-10 h-px bg-gradient-to-r from-transparent to-slate-300/60"></div>
              <div className="mx-2 text-slate-300 text-xs">❋</div>
              <div className="w-6 sm:w-10 h-px bg-gradient-to-l from-transparent to-slate-300/60"></div>
            </div>
            
            {/* Interactive Hint */}
            <div className={`text-xs sm:text-sm text-slate-300 transition-all duration-300 ${
              isHovered ? 'opacity-100 transform -translate-y-1' : 'opacity-70'
            }`}>
              <span className="inline-block animate-pulse mr-1">✨</span>
              Click to unveil
              <span className="inline-block animate-pulse ml-1">✨</span>
            </div>
          </div>

          {/* Corner Ornaments */}
          <div className="absolute top-3 left-3 w-6 h-6 border-l-3 border-t-3 border-slate-400/50 rounded-tl-lg opacity-60"></div>
          <div className="absolute top-3 right-3 w-6 h-6 border-r-3 border-t-3 border-slate-400/50 rounded-tr-lg opacity-60"></div>
          <div className="absolute bottom-3 left-3 w-6 h-6 border-l-3 border-b-3 border-slate-400/50 rounded-bl-lg opacity-60"></div>
          <div className="absolute bottom-3 right-3 w-6 h-6 border-r-3 border-b-3 border-slate-400/50 rounded-bl-lg opacity-60"></div>
          
          {/* Subtle Inner Glow */}
          <div className="absolute inset-3 rounded-xl border border-slate-300/10 pointer-events-none" />
          
          {/* Hover Effect Glow */}
          <div className={`absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none ${
            isHovered ? 'shadow-2xl shadow-amber-400/20 ring-1 ring-amber-400/30' : ''
          }`} />
          
          {/* Ambient Light Effect */}
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-transparent to-slate-300/5 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`} />
        </div>
      </div>
    </div>
  );
};

export default VintageLetter;