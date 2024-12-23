import PropTypes from "prop-types";
import Acc from "../assets/accreditation.svg";
import Ilms from "../assets/ilms.svg";
import Exam from "../assets/exam.svg";

const SolutionCard = ({ icon, title, description, className = "" }) => (
  <div className="flex flex-col items-start p-4 md:p-6 space-y-4 w-full md:w-[30%]">
    <div className="text-orange-500">
      <img src={icon} alt={title} className="w-12 h-12 md:w-15 md:h-15" />
    </div>
    <h3 className="text-xl md:text-2xl font-bold text-[#EA4722]">{title}</h3>
    <p className="text-gray-600 text-sm md:text-base">{description}</p>
    <button className="px-4 md:px-6 py-2 mt-2 md:mt-4 font-bold border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors text-sm md:text-base">
      Learn More
    </button>
  </div>
);

SolutionCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const Solutions = () => {
  const solutions = [
    {
      icon: Acc,
      title: "Accreditation & Compliance",
      description:
        "Bring real-time monitoring for all users' accreditation requirements for continuous quality improvement",
    },
    {
      icon: Ilms,
      title: "ILMS",
      description:
        "Customise the learning system by giving users a unified platform for all academic needs with easy-to-use technology",
    },
    {
      icon: Exam,
      title: "Exam Management",
      description:
        "Streamline the examination process with Online Examinations, Live Proctoring, and more",
    },
  ];

  return (
    <>
      <section className="flex flex-col py-8 md:py-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
        <h2 className="text-3xl md:text-5xl font-bold px-4 md:px-20 max-md:max-w-full">
          Learn more about{" "}
          <span className="text-orange-500">what we solve</span>
        </h2>
        <div className="flex flex-col min-h-[400px] md:min-h-[40vh] justify-center items-center px-4 md:px-20 md:flex-row gap-8 mt-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Solutions;
