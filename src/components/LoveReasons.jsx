const LoveReasons = ({ reasons }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <h2 className="text-2xl sm:text-3xl mb-8 font-medium text-rose-800 text-center italic">
          Why I Love You
        </h2>
        <div className="space-y-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} group`}
            >
              <div 
                className={`
                  relative w-[85%] sm:w-[75%] p-5 
                  bg-gradient-to-br from-white/40 to-white/20
                  backdrop-blur-sm rounded-2xl
                  border-2 border-rose-200/50
                  transform transition-all duration-300
                  hover:scale-[1.02] hover:shadow-lg
                  ${index % 2 === 0 ? 'rounded-l-none' : 'rounded-r-none'}
                `}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-rose-100/10 to-pink-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <p className="relative z-10 text-lg sm:text-xl text-rose-800 italic font-light leading-relaxed">
                  {reason}
                </p>
                <div className={`
                  absolute top-1/2 -translate-y-1/2
                  ${index % 2 === 0 ? '-left-3' : '-right-3'}
                  w-6 h-6 bg-rose-400/30 backdrop-blur-sm
                  rounded-full border-2 border-rose-300/50
                  group-hover:scale-110 transition-transform duration-300
                `} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LoveReasons
           