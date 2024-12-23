const DotIndicator = ({ isActive }) => (
  <div
    className={`flex shrink-0 rounded-full h-[18px] w-[18px] ${
      isActive ? "bg-orange-600" : "bg-zinc-300"
    }`}
    role="button"
    tabIndex={0}
    aria-label={isActive ? "Current slide" : "Go to slide"}
  />
);

export default DotIndicator;
