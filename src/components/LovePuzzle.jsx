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
        backgroundSize: '300%',
        backgroundPosition: `${(index % 3) * 50}% ${Math.floor(index / 3) * 50}%`
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
    <div className="relative">
      <h2 className="text-2xl sm:text-3xl font-medium text-rose-800 mb-6">Love Puzzle</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
        {/* Reference Image */}
        <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl group">
          <img 
            src={imageSrc} 
            alt="Reference Image" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm text-white bg-black/40 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Reference Image
          </p>
          {completed && (
            <div className="absolute inset-0 bg-rose-400/20 animate-pulse-slow">
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-medium px-4 py-2 bg-rose-500/80 rounded-full shadow-lg">
                Completed! ✨
              </p>
            </div>
          )}
        </div>

        {/* Puzzle Grid */}
        <div className="relative aspect-square">
          <div className="grid grid-cols-3 gap-0.5 bg-rose-300/20 p-0.5 rounded-lg shadow-xl">
            {pieces.map((piece, index) => (
              piece.id === 8 ? (
                <div key={piece.id} className="aspect-square bg-white/10" />
              ) : (
                <button
                  key={piece.id}
                  onClick={() => handlePieceClick(index)}
                  onTouchStart={(e) => handleTouchStart(e, index)}
                  onTouchEnd={(e) => handleTouchEnd(e, index)}
                  className={`
                    aspect-square transition-all duration-300 relative
                    ${isValidMove(index) && !completed ? 'hover:scale-95 cursor-pointer' : 'cursor-default'}
                    ${touchStart?.index === index ? 'scale-95 opacity-80' : ''}
                    ${completed ? 'ring-2 ring-rose-400' : ''}
                    touch-none bg-white/5 backdrop-blur-sm
                  `}
                  style={piece.style}
                >
                  {isMobile && isValidMove(index) && !completed && (
                    <div className="absolute inset-0 bg-rose-400/10 animate-pulse"></div>
                  )}
                </button>
              )
            ))}
          </div>
        </div>
      </div>

      {showQuote && (
        <div className="animate-fade-in text-center space-y-4 mt-8">
          <p className="text-xl text-rose-700 italic">
            "Like these puzzle pieces finding their perfect place, we found each other and made our love story complete."
          </p>
          <div className="flex justify-center items-center gap-2">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-rose-300"></div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LovePuzzle;
