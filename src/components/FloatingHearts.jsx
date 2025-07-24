import { FaHeart, FaHeartbeat } from 'react-icons/fa'
import { IoHeartCircle, IoHeartDislike, IoHeartHalf, IoHeartSharp } from 'react-icons/io5'
import { AiFillHeart } from 'react-icons/ai'

const FloatingHearts = () => {
  const icons = [
    { Icon: FaHeart, color: 'text-rose-300' },
    { Icon: IoHeartCircle, color: 'text-pink-300' },
    { Icon: AiFillHeart, color: 'text-red-300' },
    { Icon: IoHeartSharp, color: 'text-rose-400' },
    { Icon: FaHeartbeat, color: 'text-pink-400' }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(25)].map((_, i) => {
        const size = Math.random() * 24 + 12;
        const { Icon, color } = icons[Math.floor(Math.random() * icons.length)];
        
        return (
          <div
            key={i}
            className={`absolute animate-float ${color} opacity-20 hover:opacity-40 transition-opacity duration-300`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 4}s`,
              fontSize: `${size}px`,
              filter: 'blur(0.5px)',
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            <Icon className="w-full h-full transition-transform duration-300 hover:scale-110" />
          </div>
        );
      })}
    </div>
  )
}

export default FloatingHearts
