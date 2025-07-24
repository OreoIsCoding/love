import { useState, useEffect } from "react";
import TimeCounter from "./components/TimeCounter";
import FloatingHearts from "./components/FloatingHearts";
import PhotoGallery from "./components/PhotoGallery";
import FadeInSection from "./components/FadeInSection";

import LoveReasons from "./components/LoveReasons";
import LoveMessage from "./components/LoveMessage";
import VintageLetter from "./components/VintageLetter";
import LetterModal from "./components/LetterModal";
import LockScreen from "./components/LockScreen";
import MusicPlayer from "./components/MusicPlayer";
import LovePuzzle from "./components/LovePuzzle";
import OurSong from "./assets/mp3/Taylor Swift - Lover.mp3";
import Cover from "./assets/images/Cover-music.jfif";
import Photo1 from "./assets/images/first1.JPEG";
import Photo2 from "./assets/images/first2.JPEG";
import Photo3 from "./assets/images/second1.JPEG";
import Photo4 from "./assets/images/second2.JPEG";
import Photo5 from "./assets/images/second3.JPEG";
import Photo6 from "./assets/images/second4.JPEG";
import Photo7 from "./assets/images/second5.JPEG";
import Photo8 from "./assets/images/second6.JPEG";
import Photo9 from "./assets/images/second7.JPEG";
import Photo10 from "./assets/images/second8.JPEG";
import Photo11 from "./assets/images/third1.jfif";
import Photo12 from "./assets/images/third2.jfif";

import Video1 from "./assets/images/IMG_1138.MP4";
import Video2 from "./assets/images/IMG_1145.MP4";
import Video3 from "./assets/images/IMG_1161.MP4";
import Video4 from "./assets/images/IMG_1166.MP4";
import Video5 from "./assets/images/third-vid-1.mp4";
import Video6 from "./assets/images/third-vid-2.mp4";
import EnchantedPuzzle from "./assets/images/Enchanted.JPEG";

function App() {
  const [isLocked, setIsLocked] = useState(true);
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [timeTogether, setTimeTogether] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Our anniversary date: November 22, 2024
  const startDate = new Date("2024-11-22");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = now.getTime() - startDate.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeTogether({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleLetterOpen = () => {
    setIsLetterOpen(true);
  };

  const photos = [
    Photo1,
    Photo2,
    Photo3,
    Photo4,
    Photo5,
    Photo6,
    Photo7,
    Photo8,
    Photo9,
    Photo10,

    Video1,
    Video2,
    Video3,
    Video4,
    Video5,
    Video6,
    Photo11,
    Photo12,
  ];

  const reasons = [
    "Your strength and resilience inspire me every day",
    "Your understanding and empathy know no bounds",
    "Your smile lights up my whole world",
    "Your unwavering faithfulness means everything",
    "Every moment with you is a blessing",
  ];

  return (
    <>
      {isLocked ? (
        <LockScreen onUnlock={() => setIsLocked(false)} />
      ) : (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 text-center relative">
          <FloatingHearts />

          {/* Full Screen Landing Section */}
          <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Previous background effects code remains the same */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-100/80 to-pink-100/80 backdrop-blur-sm" />

              {/* Rotating Light Rays */}
              <div
                className="absolute inset-0 animate-spin-slow origin-center"
                style={{
                  background: `radial-gradient(circle at 50% 50%, 
                       rgba(255,255,255,0.8) 0%,
                       rgba(255,255,255,0.3) 20%,
                       transparent 70%
                     )`,
                }}
              />

              {/* Glowing Orbs */}
              <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full animate-pulse-slow"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      width: `${Math.random() * 100 + 50}px`,
                      height: `${Math.random() * 100 + 50}px`,
                      background: `radial-gradient(circle at center, 
                        rgba(255,182,193,0.3),
                        rgba(255,192,203,0.1)
                      )`,
                      animationDelay: `${i * 0.5}s`,
                      filter: "blur(20px)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-4xl mx-auto px-3 sm:px-4 md:px-6">
              <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 sm:p-8 shadow-xl border-2 border-rose-200/50">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-rose-800 mb-4">
                  Hi Love,
                </h1>

                <TimeCounter timeTogether={timeTogether} />
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-rose-600">
              <span className="block text-xl sm:text-2xl">↓</span>
              <span className="text-xs sm:text-sm opacity-75">
                Scroll to explore
              </span>
            </div>
          </section>

          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 pb-20">
            <div className="grid gap-8 sm:gap-10 pt-16 sm:pt-20">
               <FadeInSection>
                <section className="group hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl border-2 border-rose-200/50 hover:border-rose-300/70 hover:shadow-rose-200/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-100/10 to-pink-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Corner decorations */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-rose-300/50 group-hover:border-rose-400/60 transition-colors"></div>
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-rose-300/50 group-hover:border-rose-400/60 transition-colors"></div>
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-rose-300/50 group-hover:border-rise-400/60 transition-colors"></div>
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-rose-300/50 group-hover:border-rose-400/60 transition-colors"></div>
                  <MusicPlayer
                    audioSrc={OurSong}
                    coverImage={Cover}
                    title="Lover"
                    artist="Taylor Swift"
                  />
                </section>
              </FadeInSection>             
               <FadeInSection>
                <section className="group hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl border-2 border-rose-200/50 hover:border-rose-300/70 hover:shadow-rose-200/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-100/10 to-pink-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-rose-200/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:bg-rose-300/30 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-200/20 rounded-full blur-3xl translate-y-16 -translate-x-16 group-hover:bg-pink-300/30 transition-colors duration-300" />
                  {/* Elegant corner decorations */}
                  <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-rose-300/50 group-hover:border-rose-400/60 transition-colors"></div>
                  <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-rose-300/50 group-hover:border-rose-400/60 transition-colors"></div>
                  <div className="relative z-10">
                    <LoveMessage />
                  </div>
                </section>
              </FadeInSection>

              <FadeInSection>
                <section className="group hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl border-2 border-rose-200/50 hover:border-rose-300/70 hover:shadow-rose-200/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-100/10 to-pink-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Elegant corners */}
                  <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-rose-300/50 group-hover:border-rose-400/60 transition-colors rounded-tl-lg"></div>
                  <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-rose-300/50 group-hover:border-rose-400/60 transition-colors rounded-tr-lg"></div>
                  <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-rose-300/50 group-hover:border-rose-400/60 transition-colors rounded-bl-lg"></div>
                  <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-rose-300/50 group-hover:border-rose-400/60 transition-colors rounded-br-lg"></div>
                  <div className="relative z-10">
                    <PhotoGallery photos={photos} />
                  </div>
                </section>
              </FadeInSection>
              <FadeInSection>
              <section className="group hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl border-2 border-rose-200/50 hover:border-rose-300/70 hover:shadow-rose-200/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-100/10 to-pink-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Decorative lines */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-300/30 to-transparent group-hover:via-rose-400/40 transition-colors"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-300/30 to-transparent group-hover:via-rose-400/40 transition-colors"></div>
                <div className="relative z-10">
                  <VintageLetter onOpenLetter={handleLetterOpen} />
                </div>
              </section>
              </FadeInSection>
              <LetterModal
                isOpen={isLetterOpen}
                onClose={() => setIsLetterOpen(false)}
              />

          <FadeInSection>
              <section className="group hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl border-2 border-rose-200/50 hover:border-rose-300/70 hover:shadow-rose-200/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjUwIDQ2MC40bC0xOTIuNy05OC41VjE0MS4xTDI1MCA0Mi42bDE5Mi43IDk4LjV2MjIwLjhMMjUwIDQ2MC40ek0yNTAgNDIxLjZsMTY1LjktODQuOFYxNjYuMkwyNTAgODEuNCA4NC4xIDE2Ni4ydjE3MC42TDI1MCA0MjEuNnoiIGZpbGw9InJnYmEoMjQ4LCAxMTMsIDExMywgMC4xKSIvPjwvc3ZnPg==')] bg-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Decorative corners with dots */}
                <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-rose-300/50 group-hover:border-rose-400/60 transition-colors"></div>
                <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-rose-300/50 group-hover:border-rose-400/60 transition-colors"></div>
                <div className="absolute top-5 left-5 w-2 h-2 rounded-full bg-rose-300/40 group-hover:bg-rose-400/50 transition-colors"></div>
                <div className="absolute top-5 right-5 w-2 h-2 rounded-full bg-rose-300/40 group-hover:bg-rose-400/50 transition-colors"></div>
                <div className="relative z-10">
                  <LoveReasons reasons={reasons} />
                </div>
              </section>
                </FadeInSection>


                <FadeInSection>
              <section className="group hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl border-2 border-rose-200/50 hover:border-rose-300/70 hover:shadow-rose-200/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-100/10 to-pink-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Decorative pattern background */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0icmdiYSgyNDgsIDExMywgMTEzLCAwLjEpIi8+PC9zdmc+')] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Decorative corners */}
                <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-rose-300/50 group-hover:border-rose-400/60 transition-colors"></div>
                <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-rose-300/50 group-hover:border-rose-400/60 transition-colors"></div>
                <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-rose-300/50 group-hover:border-rose-400/60 transition-colors"></div>
                <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-rose-300/50 group-hover:border-rose-400/60 transition-colors"></div>
                <div className="relative z-10">
                  <LovePuzzle imageSrc={EnchantedPuzzle} />
                </div>
              </section>
              </FadeInSection>

              <FadeInSection>
              <section className="group hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl border-2 border-rose-200/50 hover:border-rose-300/70 hover:shadow-rose-200/30 relative overflow-hidden mb-8 sm:mb-12">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-100/10 to-pink-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-200/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:bg-rose-300/30 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-200/20 rounded-full blur-3xl translate-y-16 -translate-x-16 group-hover:bg-pink-300/30 transition-colors duration-300" />
                {/* Decorative borders */}
                <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-rose-300/50 group-hover:border-rose-400/60 transition-colors"></div>
                <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-rose-300/50 group-hover:border-rose-400/60 transition-colors"></div>
                <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-rose-300/50 group-hover:border-rose-400/60 transition-colors"></div>
                <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-rose-300/50 group-hover:border-rose-400/60 transition-colors"></div>
                <div className="relative z-10 text-center">
                  <h2 className="text-2xl sm:text-3xl font-medium text-rose-800 mb-6">
                    Our Future Together
                  </h2>
                  <div className="space-y-4">
                    <p className="text-rose-700 leading-relaxed">
                      Looking forward to creating more beautiful memories with
                      you.
                    </p>
                    <p className="text-rose-700 leading-relaxed">
                      Every day with you is a new adventure, and I can't wait to
                      see where our journey takes us.
                    </p>
                    <div className="flex justify-center items-center gap-4 mt-6">
                      <div className="w-2 h-2 rounded-full bg-rose-400/60"></div>
                      <div className="w-3 h-3 rounded-full bg-rose-400/40"></div>
                      <div className="w-2 h-2 rounded-full bg-rose-400/60"></div>
                    </div>
                  </div>
                </div>
              </section>
              </FadeInSection>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
