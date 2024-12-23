import DotIndicator from "./DotIndicator";

const NavigationControls = ({ currentSlide }) => {
  // Create an array of 4 dots where only the currentSlide index is true
  const dots = Array(4)
    .fill(false)
    .map((_, index) => index === currentSlide);

  return (
    <div className="flex flex-1 gap-3.5 my-auto">
      {dots.map((isActive, index) => (
        <DotIndicator key={index} isActive={isActive} />
      ))}
    </div>
  );
};

export default NavigationControls;
