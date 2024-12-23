import girl from "../assets/girl.png";

const UpgradeCTA = () => {
  return (
    <div className="px-4 md:px-8 lg:px-20 min-h-[45vh] bg-white mt-10 md:mt-20">
      <div className="relative container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center min-h-full">
        {/* Left content */}
        <div className="w-full lg:w-1/2 z-10 mb-12 lg:mb-0 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
            Ready to give your{" "}
            <span className="text-orange-500">institution an upgrade?</span>
          </h2>
          <button className="bg-emerald-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-emerald-600 transition-colors text-base md:text-lg">
            Contact Us
          </button>
        </div>

        {/* Right image */}
        <div className="relative lg:absolute lg:top-0 lg:right-0 w-full lg:w-3/4 h-[300px] lg:h-full">
          <div className="relative w-full h-full">
            <img
              src={girl}
              alt="A student standing in front of an educational building, holding books and smiling"
              className="w-full h-full object-contain object-center lg:object-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeCTA;
