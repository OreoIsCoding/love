import React from 'react';

const LetterModal = ({ isOpen, onClose }) => {
  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-500">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/75 backdrop-blur-md" 
           onClick={onClose} />
      
      {/* Letter Content */}
      <div className={`relative w-[95%] sm:w-[90%] md:w-[85%] max-w-3xl mx-auto my-4 bg-gradient-to-br 
        from-amber-50 to-cream rounded-lg sm:rounded-xl shadow-2xl border border-amber-200 
        transform transition-all duration-700 overflow-y-auto max-h-[85vh] ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-24'
        }`} style={{ backgroundColor: '#faf7f0' }}>
        
        {/* Paper texture overlay */}
        <div className="absolute inset-0 opacity-20 rounded-xl"
             style={{
               backgroundImage: `
                 linear-gradient(45deg, transparent 0px, rgba(139, 69, 19, 0.05) 1px, transparent 1px),
                 linear-gradient(-45deg, transparent 0px, rgba(139, 69, 19, 0.05) 1px, transparent 1px)
               `,
               backgroundSize: '20px 20px'
             }} />

        {/* Decorative border */}
         
 
        {/* Close button */}
        <button 
          className="absolute top-3 sm:top-4 right-3 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 bg-amber-700 text-amber-100 rounded-full flex items-center justify-center hover:bg-amber-800 transition-colors shadow-lg z-10 text-sm sm:text-base"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Letter content */}
        <div className="relative p-4 sm:p-5 md:p-6 lg:p-8">
          
          {/* Date */}
          <div className="text-right mb-3 sm:mb-4 md:mb-5 text-amber-700 font-serif italic text-xs sm:text-sm md:text-base">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long',
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </div>

          {/* Letter body */}
          <div className="font-serif text-amber-900 space-y-3 sm:space-y-4 leading-relaxed">
            
            <div className="text-center mb-3 sm:mb-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-amber-800 mb-2">My Dearest Love,</h2>
              <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
            </div>

            <p className="text-base sm:text-lg leading-relaxed sm:leading-loose">
              I'm really thankful to God for bringing us together. We didn't expect things to go this far. Maybe it's because you were such a flirt. Haha just kidding.
            </p>

            <p className="text-base sm:text-lg leading-relaxed sm:leading-loose">
              I still remember how everything started between us, and up to now, those memories stay with me. Our beginning wasn't easy, and even now we still face challenges and problems, but we always find a way to get through them together.
            </p>

            <p className="text-base sm:text-lg leading-relaxed sm:leading-loose">
              Even when we fight, get into misunderstandings, or go through rough days, we still choose to understand each other. I'm still learning how to love you the way you deserve.
            </p>

            <p className="text-base sm:text-lg leading-relaxed sm:leading-loose">
              Thank you for everything, love. For your support, for your love, and for making everything feel right. As long as we're together, I know we'll be okay. I'll keep choosing you every single day.
            </p>

            <p className="text-base sm:text-lg leading-relaxed sm:leading-loose">
              I'm always here for you, your teammate, your safe place, your partner in everything. I'll be with you through the hard times and the good ones too, love.
            </p>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              I love you so much.
            </p>

            {/* Signature */}
            <div className="pt-4 sm:pt-6 md:pt-8 text-center space-y-2 sm:space-y-3 md:space-y-4">
              <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
              <p className="text-lg sm:text-xl">
                Forever and always yours,
              </p>
              <p className="text-xl sm:text-2xl font-bold italic text-amber-800">
                Paul Axel Dionisio
              </p>
              <div className="flex justify-center mt-3 sm:mt-4">
               </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute inset-4 pointer-events-none">
            {/* Top left corner */}
            <div className="absolute -top-1 -left-1 w-8 sm:w-10 h-8 sm:h-10 border-l-4 border-t-4 border-amber-400/40 rounded-tl-xl"></div>
            {/* Top right corner */}
            <div className="absolute -top-1 -right-1 w-8 sm:w-10 h-8 sm:h-10 border-r-4 border-t-4 border-amber-400/40 rounded-tr-xl"></div>
            {/* Bottom left corner */}
            <div className="absolute -bottom-1 -left-1 w-8 sm:w-10 h-8 sm:h-10 border-l-4 border-b-4 border-amber-400/40 rounded-bl-xl"></div>
            {/* Bottom right corner */}
            <div className="absolute -bottom-1 -right-1 w-8 sm:w-10 h-8 sm:h-10 border-r-4 border-b-4 border-amber-400/40 rounded-br-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterModal;
