import React from 'react';
import Bakugo1 from '../assets/images/Bakugo1.jpeg';
import giyu from '../assets/images/Giyu.jpg';
import wonwoo from '../assets/images/wonwoo.jpg';
import levi from '../assets/images/Levi.jpg';
import gojo from '../assets/images/Gojo.jpg';


 const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  .animate-float {
    animation: float infinite;
  }
  
  .bg-radial-gradient {
    background: radial-gradient(
      circle at center,
      rgba(255,255,255,0.2) 0%,
      rgba(255,255,255,0.1) 20%,
      transparent 70%
    );
  }
`;
document.head.appendChild(style);

function Favorites() {
  const favorites = [
    {
      nameEn: "Gojo Satoru",
      image: gojo,
      title: "The Strongest Sorcerer",
      role: "Special Grade Jujutsu Sorcerer",
      series: "Jujutsu Kaisen",
      color: "from-sky-400/20 to-white/30",
      textColor: "text-sky-800",
      borderColor: "border-sky-300",
      glowColor: "sky"
    },
    {
      nameEn: "Giyu Tomioka",
      image: giyu,
      title: "Water Hashira",
      role: "Demon Slayer Corps",
      series: "Demon Slayer",
      color: "from-blue-500/20 to-cyan-500/20",
      textColor: "text-blue-800",
      borderColor: "border-blue-300",
      glowColor: "blue"
    },
    {
      nameEn: "Levi Ackerman",
      image: levi,
      title: "Captain",
      role: "Scout Regiment Commander",
      series: "Attack on Titan",
      color: "from-slate-500/20 to-gray-500/20",
      textColor: "text-slate-800",
      borderColor: "border-slate-300",
      glowColor: "slate"
    },
    {
      nameEn: "Bakugo Katsuki",
      image: Bakugo1,
      title: "Great Explosion Murder God",
      subTitle: "Dynamight",
      role: "Pro Hero",
      series: "My Hero Academia",
      color: "from-orange-500/20 to-red-500/20",
      textColor: "text-orange-800",
      borderColor: "border-orange-300",
      glowColor: "orange"
    },
    {
      nameEn: "Jeon Wonwoo",
      image: wonwoo,
      title: "Sub Vocalist",
      role: "Lead Rapper, Sub Vocalist",
      series: "SEVENTEEN",
      color: "from-indigo-500/20 to-violet-500/20",
      textColor: "text-indigo-800",
      borderColor: "border-indigo-300",
      glowColor: "indigo"
    }
  ];

  return (
    <div className="w-full">
      <div className="relative mb-12">
        <h2 className="text-2xl sm:text-3xl font-medium text-rose-800 text-center">Anya's Husbands</h2>
        <p className="text-rose-600/80 text-center mt-2 text-sm sm:text-base">
          (Aside from me)
        </p>
        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-300/50 to-transparent"></div>
      </div>

      <div className="flex flex-col gap-8">
        {favorites.map((character, index) => (
          <div 
            key={index}
            className="group relative"
          >
            {/* Character Banner */}
            <div className={`
              relative h-[300px] sm:h-[400px] w-full rounded-xl overflow-hidden
              shadow-lg transform transition-all duration-500
              hover:scale-[1.02] cursor-pointer
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
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                     backgroundSize: '100px 100px'
                   }}></div>
              
              {/* Animated Particles Effect */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-white/30 animate-float"
                    style={{
                      width: `${Math.random() * 4 + 2}px`,
                      height: `${Math.random() * 4 + 2}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 5}s`,
                      animationDuration: `${Math.random() * 3 + 2}s`
                    }}
                  />
                ))}
              </div>

              {/* Character Information - Left Side */}
              {/* Large Background Text */}
              <div className="absolute inset-0 flex items-center justify-center z-10 overflow-hidden pointer-events-none select-none">
                <h3 className={`text-[6rem] sm:text-[10rem] font-black ${character.textColor} opacity-[0.06] transform 
                              whitespace-nowrap text-center leading-none tracking-tight`}
                    style={{ letterSpacing: '-0.05em' }}>
                  {character.nameEn.split(' ')[0]}
                </h3>
              </div>

              {/* Character Info - Centered */}
              <div className="absolute bottom-2 left-0 right-0 z-30 px-4 text-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-1 sm:p-2 inline-block max-w-[70%] mx-auto
                              shadow-lg transform transition-all duration-300 group-hover:scale-105">
                  {/* Character Name */}
                  <h3 className={`text-base sm:text-lg font-bold leading-tight ${character.textColor}
                                drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]`}>
                    {character.nameEn}
                  </h3>

                  {/* Title */}
                  <p className={`text-[10px] sm:text-xs font-medium ${character.textColor} opacity-90`}>
                    {character.title}
                    {character.subTitle && (
                      <span className="block text-[8px] sm:text-[10px] opacity-75">
                        {character.subTitle}
                      </span>
                    )}
                  </p>

                  {/* Series */}
                  <p className={`text-[8px] sm:text-[10px] ${character.textColor} opacity-75 tracking-wider`}>
                    {character.series}
                  </p>
                </div>
              </div>

              {/* Character Standee Image - Centered */}
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[280px] sm:h-[340px] z-20
                            transform transition-all duration-500 group-hover:scale-[1.03]">
                {/* Background Removal Effect Container */}
                <div className="relative h-full aspect-[3/4]">
                  {/* Main Character Image with Blend Mode */}
                  <div className="relative h-full w-full">
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
                    
                    {/* Duplicated Image for Depth Effect */}
                    <img 
                      src={character.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover scale-[1.01] opacity-70"
                      style={{
                        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0.7))',
                        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0.7))',
                        filter: 'blur(4px) brightness(1.1)',
                        mixBlendMode: 'screen',
                      }}
                    />
                  </div>

                  {/* Enhanced Glow Effect */}
                  <div className={`
                    absolute -inset-4 blur-2xl opacity-30
                    bg-gradient-to-t from-${character.glowColor}-400 via-${character.glowColor}-300 to-transparent
                    transform scale-y-125
                  `}></div>
                </div>

                {/* Reflective Floor Effect */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-t from-white/20 to-transparent
                              backdrop-blur-sm rounded-full scale-y-50 transform -skew-x-12 opacity-60"></div>
              </div>



              {/* Decorative Elements */}
              <div className={`absolute top-4 left-4 w-20 h-1 ${character.borderColor}`}></div>
              <div className={`absolute top-4 left-4 w-1 h-20 ${character.borderColor}`}></div>
              <div className={`absolute bottom-4 right-4 w-20 h-1 ${character.borderColor}`}></div>
              <div className={`absolute bottom-4 right-4 w-1 h-20 ${character.borderColor}`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
