import { useState, useEffect, useCallback } from 'react';

function LovePuzzle({ imageSrc }) {
  const [pieces, setPieces] = useState([]);
  const [emptyIndex, setEmptyIndex] = useState(8); // Bottom-right corner
  const [completed, setCompleted] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if device is mobile
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Check if a move is valid (piece is adjacent to empty space)
  const isValidMove = (index) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    const emptyRow = Math.floor(emptyIndex / 3);
    const emptyCol = emptyIndex % 3;
    
    return (
      (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
      (Math.abs(col - emptyCol) === 1 && row === emptyRow)
    );
  };

  // Initialize puzzle
  useEffect(() => {
    const initialPieces = Array.from({ length: 9 }, (_, index) => ({
      id: index,
      currentPosition: index,
      style: {
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: '300% 300%',
        backgroundPosition: `${(index % 3) * 50}% ${Math.floor(index / 3) * 50}%`,
        backgroundRepeat: 'no-repeat'
      }
    }));

    // Create a solvable puzzle
    let shuffled;
    do {
      shuffled = shuffleArray([...initialPieces.slice(0, 8)]);
      // Add empty piece at the end
      shuffled.push({ id: 8, currentPosition: 8, style: {} });
    } while (!isSolvable(shuffled) || isCompleted(shuffled));

    setPieces(shuffled);
    setEmptyIndex(8);
  }, [imageSrc]);

  // Check if puzzle is solvable
  const isSolvable = (pieces) => {
    let inversions = 0;
    const values = pieces.map(p => p.id).filter(id => id !== 8);
    
    for (let i = 0; i < values.length - 1; i++) {
      for (let j = i + 1; j < values.length; j++) {
        if (values[i] > values[j]) inversions++;
      }
    }
    
    return inversions % 2 === 0;
  };

  // Check if puzzle is completed
  const isCompleted = (pieces) => {
    return pieces.every((piece, index) => piece.id === index);
  };

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Handle piece movement
  const movePiece = useCallback((index) => {
    if (completed || !isValidMove(index)) return;

    const newPieces = [...pieces];
    [newPieces[index], newPieces[emptyIndex]] = [newPieces[emptyIndex], newPieces[index]];
    
    setPieces(newPieces);
    setEmptyIndex(index);

    // Check if puzzle is solved
    if (isCompleted(newPieces)) {
      setCompleted(true);
      setTimeout(() => setShowQuote(true), 1000);
    }
  }, [pieces, emptyIndex, completed]);

  const handleTouchStart = (e, index) => {
    if (completed || !isMobile) return;
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      index
    });
  };

  const handleTouchEnd = (e, index) => {
    if (!touchStart || completed || !isMobile) return;

    const touchEnd = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    };

    const dx = touchEnd.x - touchStart.x;
    const dy = touchEnd.y - touchStart.y;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    if (Math.max(absDx, absDy) > 30) { // Minimum swipe distance
      if (isValidMove(index)) {
        movePiece(index);
      }
    }
    setTouchStart(null);
  };

  const handlePieceClick = (index) => {
    if (completed || isMobile) return;
    if (isValidMove(index)) {
      movePiece(index);
    }
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="flex flex-col items-center">
        <div className="relative mb-8">
          <h2 className="text-2xl sm:text-3xl font-medium text-rose-800 text-center">Love Puzzle</h2>
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-300/50 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
          {/* Reference Image */}
          <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-2xl group mx-auto transform transition-all duration-500 hover:scale-[1.02]" 
               style={{ maxWidth: "300px", perspective: "1000px" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-rose-200/20 to-pink-200/20 opacity-50"></div>
            <img 
              src={imageSrc} 
              alt="Reference Image" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-sm text-white bg-black/60 backdrop-blur-sm px-4 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-lg">
              Complete the Puzzle ✨
            </p>
            {completed && (
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-pink-500/20 animate-pulse-slow">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white font-medium px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full shadow-xl transform hover:scale-105 transition-transform">
                    Completed! 🎉
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Puzzle Grid */}
          <div className="relative w-full aspect-square mx-auto" style={{ maxWidth: "300px" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-rose-200/20 to-pink-200/20 rounded-xl -m-1"></div>
            <div className="relative grid grid-cols-3 gap-1 bg-white/10 p-1.5 rounded-xl shadow-xl backdrop-blur-sm">
              {pieces.map((piece, index) => (
                piece.id === 8 ? (
                  <div key={piece.id} className="aspect-square bg-white/5 rounded-lg transition-all duration-300" />
                ) : (
                  <button
                    key={piece.id}
                    onClick={() => handlePieceClick(index)}
                    onTouchStart={(e) => handleTouchStart(e, index)}
                    onTouchEnd={(e) => handleTouchEnd(e, index)}
                    className={`
                      aspect-square transition-all duration-300 relative rounded-lg overflow-hidden
                      ${isValidMove(index) && !completed ? 'hover:scale-95 cursor-pointer hover:shadow-lg hover:brightness-110' : 'cursor-default'}
                      ${touchStart?.index === index ? 'scale-95 brightness-90' : ''}
                      ${completed ? 'ring-2 ring-rose-400 shadow-lg' : 'shadow-md'}
                      touch-none bg-white/10 backdrop-blur-sm transform hover:z-10
                    `}
                    style={{
                      ...piece.style,
                      boxShadow: isValidMove(index) && !completed ? '0 0 15px rgba(244, 63, 94, 0.2)' : ''
                    }}
                  >
                    {(isValidMove(index) && !completed) && (
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-400/10 to-pink-400/10 animate-pulse"></div>
                    )}
                  </button>
                )
              ))}
            </div>
          </div>
        </div>
      </div>

      {showQuote && (
        <div className="animate-fade-in text-center space-y-6 mt-12">
          <div className="relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-2xl">✨</div>
            <div className="relative bg-white/30 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-rose-200/30 transform hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-rose-200/10 to-pink-200/10 rounded-2xl"></div>
              <p className="relative text-xl text-rose-700 italic leading-relaxed">
                "Like these puzzle pieces finding their perfect place, we found each other and made our love story complete."
              </p>
              <div className="flex justify-center items-center gap-3 mt-4">
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
                <div className="text-rose-400">❤️</div>
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LovePuzzle;
