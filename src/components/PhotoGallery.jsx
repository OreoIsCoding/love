import { useState, useRef, useEffect } from 'react'

const fadeOutAnimation = `@keyframes fadeOut {
  0%, 20% { opacity: 0.7 }
  100% { opacity: 0 }
}`

const PhotoGallery = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const videoRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Hide swipe hint after first interaction
  useEffect(() => {
    if (showSwipeHint) {
      const timer = setTimeout(() => {
        setShowSwipeHint(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSwipeHint]);

  // Handle touch events for swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setShowSwipeHint(false);
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // minimum distance for swipe

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextPhoto(); // Swipe left
      } else {
        prevPhoto(); // Swipe right
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Handle autoplay when switching to a video
  useEffect(() => {
    const currentFile = photos[currentIndex];
    if (videoRef.current && (currentFile.endsWith('.MP4') || currentFile.endsWith('.mp4'))) {
      videoRef.current.play().catch(err => console.log('Video autoplay failed:', err));
    }
  }, [currentIndex, photos]);

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="my-4 sm:my-8 px-4 sm:px-0">
      <style>{fadeOutAnimation}</style>
      <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 font-medium text-rose-800 text-center">Our Moments</h2>
      
      <div className="relative max-w-md mx-auto group">
        {/* Main Media (Image or Video) */}
        <div 
          className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {photos[currentIndex].endsWith('.MP4') || photos[currentIndex].endsWith('.mp4') ? (
            <video 
              ref={videoRef}
              key={currentIndex}
              src={photos[currentIndex]}
              className="w-full h-full object-cover"
              controls
              playsInline
              loop
              muted={false}
              controlsList="nodownload"
              poster={photos[currentIndex].replace('.MP4', '-thumbnail.jpg')}
            />
          ) : (
            <img 
              src={photos[currentIndex]} 
              alt={`Together ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/20 pointer-events-none" />
        </div>

        {/* Navigation Buttons - Desktop Only */}
        <div className="hidden sm:block">
          <button 
            onClick={prevPhoto}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/10 backdrop-blur text-white/70 hover:bg-black/30 hover:text-white transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 text-2xl"
            aria-label="Previous photo"
          >
            ‹
          </button>
          <button 
            onClick={nextPhoto}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/10 backdrop-blur text-white/70 hover:bg-black/30 hover:text-white transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 text-2xl"
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
        
        {/* Swipe Indicator for Mobile - Only shows initially */}
        {showSwipeHint && (
          <div className="sm:hidden absolute inset-x-0 bottom-4 text-center text-white/70 text-sm pointer-events-none"
               style={{ animation: 'fadeOut 3s forwards' }}>
            Swipe to navigate
          </div>
        )}

        {/* Indicators */}
        <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-rose-500 w-4' 
                  : 'bg-rose-300 hover:bg-rose-400'
              }`}
              aria-label={`Go to photo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PhotoGallery
           