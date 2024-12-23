import girl from "../assets/girl.png";

const UpgradeCTA = () => {
  return (
    <div className="px-20 h-[45vh] bg-white mt-20">
      <div className="relative container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center h-full">
        {/* Left content */}
        <div className="w-full lg:w-1/2 z-10 mb-12 lg:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to give your <br />
            <span className="text-orange-500">
              institution an
              <br />
              upgrade?
            </span>
          </h2>
          <button className="bg-emerald-500 text-white px-8 py-4 rounded-full hover:bg-emerald-600 transition-colors text-lg">
            Contact Us
          </button>
        </div>

        {/* Right image - adjusted for new container height */}
        <div className="absolute top-0 right-0 w-full lg:w-3/4 h-full">
          <div className="relative w-full h-full">
            <img
              src={girl}
              alt="A student standing in front of an educational building, holding books and smiling"
              className="w-full h-full object-contain object-right scale-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeCTA;
