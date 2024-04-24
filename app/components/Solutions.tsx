import Image from "next/image";
import { FaChalkboardTeacher } from "react-icons/fa";

const Sol = [
  {
    title: "Fast",
    description:
      "Fast load times and lag free interaction, my highest priority.",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Responsive",
    description: "My layouts will work on any device, big or small.",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Intuitive",
    description: "Strong preference for easy to use, intuitive UX/UI.",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Dynamic",
    description:
      "Websites don't have to be static, I love making pages come to life.",
    icon: <FaChalkboardTeacher />,
  },
];

const Solutions = () => {
  return (
    <section id="Solutions" className="section w-9/12 mx-auto pt-12 pb-10">
      <h3 className="text-4xl pt-10 font-bold text-center">
        Our Solutions For Your School
      </h3>
      <h6 className="text-center text-gray-400 pt-5">
        We make it easy for users to use our platform, that's why we provide
        this benefit.
      </h6>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center py-20 gap-y-10 xl:gap-3">
        {Sol.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-4 border-2 pt-10 pb-20 px-3 rounded-xl shadow-sm bg-white">
            <div className="flex items-center justify-center size-16 [&>*]:text-4xl rounded-lg bg-primary-light text-primary-main">
              {item.icon}
            </div>
            <p className="text-xl font-semibold">{item.title}</p>
            <p className="text-sm text-gray-400 w-60 text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
