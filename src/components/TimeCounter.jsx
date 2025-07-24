const TimeCounter = ({ timeTogether }) => {
return (
    <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl sm:text-3xl text-rose-700 mb-8">We've Been Together For</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            {Object.entries(timeTogether).map(([key, value]) => (
                <div key={key} className="flex flex-col items-center bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl">
                    <span className="text-3xl sm:text-4xl font-bold text-rose-600 mb-2">
                        {value}
                    </span>
                    <span className="text-sm sm:text-base text-rose-500 capitalize">
                        {key}
                    </span>
                </div>
            ))}
        </div>
    </div>
);
};

export default TimeCounter;
 