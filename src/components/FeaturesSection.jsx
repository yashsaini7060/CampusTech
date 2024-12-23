// import { Cpu, Hand, Layout, FileText, BarChart3, Globe } from "lucide-react";
import www from "../assets/www.svg";
import chart from "../assets/chart.svg";
import doc from "../assets/doc.svg";
import ai from "../assets/ai(1).svg";
import multi from "../assets/multi.svg";
import hand from "../assets/hand.svg";
const features = [
  {
    icon: hand,
    title: "Simple and easy-to-use interface",
    description: "interface",
  },
  {
    icon: multi,
    title: "Multi-institutional dashboard",
    description: "dashboard",
  },
  {
    icon: ai,
    title: "AI-based alerts for all activities",
    description: "to be conducted",
  },
  {
    icon: chart,
    title: "Track learning behaviour and",
    description: "learning outcomes",
  },
  {
    icon: www,
    title: "Build a new culture of compliance",
    description: "and accreditation",
  },
  {
    icon: doc,
    title: "Integration with your campus",
    description: "website",
  },
];

const FeatureSection = () => {
  return (
    <div className="relative bg-[#F8F7F7] p-4 sm:p-8 md:p-16 lg:p-20 py-24 sm:py-32">
      {/* Orange circle decoration */}
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-orange-500 rounded-full -translate-x-1/2 -translate-y-1/2" />

      {/* Green circle decoration */}
      <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-emerald-500 rounded-full translate-x-1/2 translate-y-1/2 z-10" />

      <div className="flex flex-col lg:flex-row p-4 sm:p-8 md:p-16 lg:p-20 relative">
        {/* Header Section */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            Why your
            <br />
            educational
            <br />
            <span className="text-[#EA4722]">institution needs</span>
            <br />
            Campus Tech
          </h2>
          <button className="bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 transition-colors">
            About Us
          </button>
        </div>

        {/* Features Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
