import { useState, useRef, useEffect } from 'react';

const MusicPlayer = ({ audioSrc, coverImage, title, artist }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const [isMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
      audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      // Auto-play when component mounts
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.log('Auto-play prevented:', error);
      });
      return () => {
        audioRef.current?.removeEventListener('timeupdate', handleTimeUpdate);
        audioRef.current?.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, []);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    audioRef.current.currentTime = time;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="w-full">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4">
        {/* Cover Image and Title Section */}
        <div className="flex flex-col items-center mb-4">
          <div className="w-48 h-48 mb-4 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={coverImage} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600">{artist}</p>
          </div>
        </div>

        {/* Controls Section */}
        <div className="flex-1">
          {/* Progress Bar */}
          <div className="mb-2">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleProgressChange}
              className="w-full h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-rose-500 [&::-webkit-slider-thumb]:shadow-md"
            />
            <div className="flex justify-between mt-1">
              <span className="text-xs text-gray-600">{formatTime(currentTime)}</span>
              <span className="text-xs text-gray-600">{formatTime(duration)}</span>
            </div>
          </div>

          {/* Playback Controls */}
          <div className="flex items-center justify-center gap-8 mt-4">
            <button className="text-2xl text-gray-600 hover:text-gray-800">⏮</button>
            <button
              onClick={togglePlay}
              className="w-14 h-14 rounded-full bg-rose-500 text-white flex items-center justify-center hover:bg-rose-600 transition-colors shadow-lg text-2xl"
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button className="text-2xl text-gray-600 hover:text-gray-800">⏭</button>
          </div>
        </div>
      </div>
      <audio ref={audioRef} src={audioSrc} preload="metadata" loop />
    </div>
  );
       
 };

export default MusicPlayer;
