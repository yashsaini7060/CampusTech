import HeroContent from "./HeroContent";
import NavigationControls from "./NavigationControls";
import power from "../assets/power.svg";
import approved from "../assets/approved.svg";
import report from "../assets/report.svg";
import ai from "../assets/ai.svg";
import { useState } from "react";
import SliderControls from "./SliderControls";
const Hero = () => {
  const slides = [
    {
      title: "A",
      highlight: "power-packed solution",
      subtitle: "to streamline all educational and institutional processes.",
      description:
        "Campus Tech is a robust solution packed with best-in-class software, consulting, audits, and empowerment activities rolled into one for your institution.",
      buttonText: "Get a Demo",
      image: power,
    },
    {
      title: "Enables ",
      highlight: "efficient segregation",
      subtitle: "of tasks",
      description:
        "Campus Tech presents you with multiple dashboards to review the status of various accreditation tasks, including the tasks that are overdue, non-compliant, or need attention.",
      buttonText: "Accreditation & Compliance",
      image: ai,
    },
    {
      title: "Helps cater to ",
      highlight: "accreditation requirements",
      subtitle: "",
      description:
        "Campus Tech has created an associated full-fledged and robust campus automation software along with a dedicated mobile app for students that can cater to multiple accreditation and compliance requirements.",
      buttonText: "Accreditation & Compliance",
      image: approved,
    },
    {
      title: "",
      highlight: "Live reports",
      subtitle: "and comparative analysis made available",
      description:
        "Get live reports on data added for multiple accreditations, AI-based alerts for tracking of tasks assigned and completed.",
      buttonText: "Accreditation & Compliance",
      image: report,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 pt-16 md:pt-0">
      <div className="flex flex-col items-start px-5 md:px-20 w-full bg-white h-full">
        <div className="flex flex-col justify-center h-full w-full">
          <div className="w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <HeroContent data={slides[currentSlide]} />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src={slides[currentSlide].image}
                  alt="Educational technology illustration"
                  className="object-contain w-full aspect-[1.34] max-md:mt-5 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 mt-20 md:mt-32 mb-5 w-full max-w-[1328px]">
            <NavigationControls currentSlide={currentSlide} />
            <SliderControls nextSlide={nextSlide} prevSlide={prevSlide} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
