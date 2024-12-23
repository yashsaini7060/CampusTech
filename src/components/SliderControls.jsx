import { ChevronLeft, ChevronRight } from "lucide-react";

const SliderControls = ({ nextSlide, prevSlide }) => {
  return (
    <>
      <button
        onClick={prevSlide}
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
      >
        <ChevronRight size={24} />
      </button>
    </>
  );
};

export default SliderControls;
