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
    <div className=" bg-white px-4 py-16 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <h2 className="text-[56px] leading-tight font-bold mb-24">
          The best in the
          <br />
          country <span className="text-[#FF4F17]">trust us</span>
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, index) => (
            <div key={index} className="text-start">
              <div className={`text-7xl font-bold mb-3 ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-xl text-black font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Logo Marquee */}
        <div className="w-full overflow-hidden">
          <div className="logos-slide-track">
            {/* First set of logos */}
            {[...Array(2)].map((_, setIndex) =>
              universities.map((uni, index) => (
                <div
                  key={`${setIndex}-${index}`}
                  className="logo-slide flex-shrink-0 w-64 h-32 flex items-center justify-center mx-8"
                >
                  <img
                    src={uni.logo}
                    alt={uni.name}
                    className="max-w-full max-h-full object-contain"
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
