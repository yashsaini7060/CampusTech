import jadavpur from "../assets/jadavpur.svg";
import bangalore from "../assets/bangalore.svg";
import nujs from "../assets/nujs.svg";
import bennett from "../assets/bennett.svg";
const stats = [
  { number: "30", label: "Top Institutions", color: "text-[#F5A524]" },
  { number: "13", label: "in A/A+/A++ Tier", color: "text-[#40B093]" },
  { number: "3000", label: "Faculty Connect", color: "text-[#F5A524]" },
  { number: "90,000", label: "Students Benefited", color: "text-[#40B093]" },
];

const universities = [
  { name: "Jadavpur University", logo: jadavpur },
  { name: "Bangalore University", logo: bangalore },
  { name: "NUJS", logo: nujs },
  { name: "Bennett University", logo: bennett },
];

const TrustSection = () => {
  return (
    <div className="bg-white px-4 py-8 sm:py-16 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-[56px] leading-tight font-bold mb-12 sm:mb-24 text-center sm:text-left">
          The best in the
          <br />
          country <span className="text-[#FF4F17]">trust us</span>
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-16 sm:mb-32">
          {stats.map((stat, index) => (
            <div key={index} className="text-center sm:text-start">
              <div
                className={`text-4xl sm:text-5xl md:text-7xl font-bold mb-2 sm:mb-3 ${stat.color}`}
              >
                {stat.number}
              </div>
              <div className="text-base sm:text-lg md:text-xl text-black font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Logo Marquee */}
        <div className="w-full overflow-hidden">
          <div className="logos-slide-track">
            {[...Array(2)].map((_, setIndex) =>
              universities.map((uni, index) => (
                <div
                  key={`${setIndex}-${index}`}
                  className="logo-slide flex-shrink-0 w-40 sm:w-64 h-24 sm:h-32 flex items-center justify-center mx-4 sm:mx-8"
                >
                  <img
                    src={uni.logo}
                    alt={uni.name}
                    className="max-w-full max-h-full object-contain p-2 sm:p-0"
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
