import React, { useState, useEffect } from 'react';
import CartoonEK from '../assets/images/Cartoon_EK.png';


const LockScreen = ({ onUnlock }) => {
  const [pin, setPin] = useState(['', '', '', '', '', '']);
  const [isShaking, setIsShaking] = useState(false);
  const [error, setError] = useState('');
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const correctPin = '100824';

  // Handle digit input
  const handleDigitChange = (index, value) => {
    if (isNaN(value)) return;
    
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    // Auto-focus next input
    if (value !== '' && index < 5) {
      const nextInput = document.querySelector(`input[data-index="${index + 1}"]`);
      if (nextInput) nextInput.focus();
    }

    // Check pin when all digits are filled
    if (index === 5 && value !== '') { // Changed from 7 to 5
      const enteredPin = newPin.join('');
      if (enteredPin === correctPin) {
        handleSuccess();
      } else {
        handleError();
      }
    }
  };

  // Handle key navigation
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && pin[index] === '') {
      const prevInput = document.querySelector(`input[data-index="${index - 1}"]`);
      if (prevInput) {
        prevInput.focus();
        const newPin = [...pin];
        newPin[index - 1] = '';
        setPin(newPin);
      }
    }
  };

  // Handle error animation
  const handleError = () => {
    setError('Incorrect date. Try again.');
    setIsShaking(true);
    setPin(['', '', '', '', '', '']);
    const firstInput = document.querySelector('input[data-index="0"]');
    if (firstInput) firstInput.focus();
    
    setTimeout(() => {
      setIsShaking(false);
    }, 500);
  };

  // Handle successful unlock
  const handleSuccess = () => {
    setError('');
    setShowSuccess(true);
    setIsUnlocking(true);
    
    // Delay the transition to next page
    setTimeout(() => {
      const elements = document.querySelectorAll('.success-unlock');
      elements.forEach(el => {
        el.style.transform = 'translateY(-100vh)';
        el.style.opacity = '0';
      });
      setTimeout(onUnlock, 1000);
    }, 2000);
  };

  // Auto focus first input on mount
  useEffect(() => {
    const firstInput = document.querySelector('input[data-index="0"]');
    if (firstInput) firstInput.focus();
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] success-unlock transition-all duration-1000">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-pink-100" />
      
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.2) 1px, transparent 0)',
                 backgroundSize: '40px 40px'
               }} />
        </div>
      </div>

      {/* Success Animation Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all duration-500">
          <div className="relative flex flex-col items-center">
            {/* Floating Hearts Animation */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-float-heart"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${3 + Math.random() * 2}s`
                  }}
                >
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-rose-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              ))}
            </div>

            {/* Success Message */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center animate-success-pop">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-rose-100 flex items-center justify-center">
                <svg className="w-12 h-12 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-rose-800 mb-2">Welcome Love!</h2>
              <p className="text-rose-600">Get ready for our story...</p>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl w-full max-w-md lg:max-w-4xl flex flex-col lg:flex-row">
        {/* Left Side - Photo */}
          <div className="lg:w-1/2 relative h-48 sm:h-64 lg:h-auto lg:aspect-square">
            <img
              src={CartoonEK}
              alt="Our Photo"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

                  {/* Right Side - Lock Screen */}
          <div className="lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col items-center justify-center bg-gradient-to-br from-white to-rose-50">
            {/* Lock Icon */}
            <div className={`mb-6 sm:mb-8 transform transition-transform ${isShaking ? 'animate-shake' : ''}`}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-rose-100 border-4 border-rose-500 flex items-center justify-center shadow-lg">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-6 h-6 sm:w-8 sm:h-8 text-rose-500" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" 
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-lg sm:text-xl lg:text-2xl font-medium text-rose-800 mb-2 text-center">
              Enter Our Special Date
            </h1>
            <p className="text-xs sm:text-sm text-rose-600 mb-4 sm:mb-6 text-center px-4">
              The day we first matched and talked (MMDDYY)
            </p>

            {/* Pin Display */}
            <div className="flex gap-2 sm:gap-3 mb-6 sm:mb-8">
              {pin.map((digit, index) => (
                <div
                  key={index}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 ${
                    digit ? 'border-rose-500 bg-rose-100' : 'border-rose-200'
                  } flex items-center justify-center`}
                >
                  {digit && <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-rose-500" />}
                </div>
              ))}
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-xs sm:text-sm text-rose-500 mb-4 sm:mb-6">{error}</p>
            )}

            {/* Keypad */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-[240px] sm:max-w-xs">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0, 'del'].map((num, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (num === 'del') {
                      const newPin = [...pin];
                      for (let i = pin.length - 1; i >= 0; i--) {
                        if (newPin[i]) {
                          newPin[i] = '';
                          break;
                        }
                      }
                      setPin(newPin);
                    } else if (num !== null) {
                      for (let i = 0; i < pin.length; i++) {
                        if (!pin[i]) {
                          const newPin = [...pin];
                          newPin[i] = num.toString();
                          setPin(newPin);
                          
                          // Check pin when all digits are filled
                          if (i === 5) { // Changed from 7 to 5
                            const enteredPin = newPin.join('');
                            if (enteredPin === correctPin) {
                              handleSuccess();
                            } else {
                              handleError();
                            }
                          }
                          break;
                        }
                      }
                    }
                  }}
                  className={`
                    w-12 h-12 sm:w-14 sm:h-14 rounded-full text-lg sm:text-xl font-medium 
                    ${num === null 
                      ? 'invisible'
                      : num === 'del'
                        ? 'bg-rose-200 text-rose-800 hover:bg-rose-300 active:bg-rose-400'
                        : 'bg-white text-rose-800 hover:bg-rose-100 active:bg-rose-200 border-2 border-rose-100'
                    }
                    transition-all flex items-center justify-center shadow-sm
                    touch-manipulation
                  `}
                  disabled={isUnlocking}
                >
                  {num === 'del' ? '⌫' : num}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add these keyframes to your existing styles */}
      <style jsx>{`
        @keyframes float-heart {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.8; }
          100% { transform: translate(${Math.random() * 100 - 50}px, -100vh) rotate(${Math.random() * 360}deg); opacity: 0; }
        }
        @keyframes success-pop {
          0% { transform: scale(0.8); opacity: 0; }
          40% { transform: scale(1.1); }
          70% { transform: scale(0.95); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-float-heart {
          animation: float-heart 3s ease-in-out forwards;
        }
        .animate-success-pop {
          animation: success-pop 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default LockScreen;

