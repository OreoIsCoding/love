const LoveMessage = () => {
    const milestones = [
        {
            date: "November 22, 2024",
            title: "When Our Story Began Officially",
            description: "The day you said yes."
        },
        {
            date: "March 11, 2025",
            title: "Our First Meet",
            description: "Seeing you for the first time in person made our hearts happy, because we had been waiting for that moment"
        },
        {
            date: "April 25, 2025",
            title: "Enchanted Kingdom Date",
            description: "We went together to EK for the first time."
        },
        {
            date: "July 11, 2025",
            title: "Tagaytay Date",
            description: "We ate Lomi and went to Skyranch Tagaytay. Then our first kiss happened at the top of the Sky Eye."
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl sm:text-3xl mb-6 font-medium text-rose-800 text-center">Our Journey Together</h2>
            <div className="relative w-full">

                 <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-rose-300/50 hidden sm:block"></div>
                
                {milestones.map((milestone, index) => (
                    <div key={index} className="relative flex flex-col sm:flex-row items-center sm:items-start mb-8 group">
                        <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8 sm:ml-auto'} mb-4 sm:mb-0`}>
                            <div className="bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-sm p-6 rounded-2xl border-2 border-rose-200/50 
                                          transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-rose-100/10 to-pink-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative z-10">
                                    <p className="text-rose-400 text-sm mb-2">{milestone.date}</p>
                                    <h3 className="text-rose-800 font-medium text-lg mb-3">{milestone.title}</h3>
                                    <p className="text-rose-700 leading-relaxed">{milestone.description}</p>
                                </div>
                            </div>
                        </div>

                         <div className="w-3 h-3 sm:w-4 sm:h-4 bg-rose-400/30 backdrop-blur-sm rounded-full border-2 border-rose-300/50
                                    group-hover:scale-125 transition-transform duration-300
                                    sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:translate-y-6"></div>
                    </div>
                ))}
            </div>
        </div>
     );
}
export default LoveMessage
 