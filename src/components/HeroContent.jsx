const HeroContent = ({ data }) => {
  const { title, highlight, subtitle, description, buttonText, image } = data;
  return (
    <div className="flex flex-col items-start mt-20 w-full text-xl text-black max-md:mt-10 max-md:max-w-full">
      <div className="self-stretch text-5xl font-bold max-md:max-w-full max-md:text-4xl">
        {title}
        <span className="text-orange-600"> {highlight}</span> {subtitle}
      </div>
      <div className="mt-16 max-md:mt-10 max-md:max-w-full">{description}</div>
      <button
        className="gap-2.5 px-5 py-3.5 mt-14 text-white bg-emerald-500 rounded-[62px] shadow-[0px_0px_5px_rgba(0,0,0,0.4)] max-md:mt-10"
        aria-label="Request a demo"
      >
        {buttonText}
      </button>
    </div>
  );
};
export default HeroContent;
