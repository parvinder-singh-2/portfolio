import skillsImg from "../../public/skillsImg.jpg";
import { motion } from "motion/react";

const Skills = () => {
  const skillSets = [
    {
      category: "Graphic Design",
      items: ["Logo Design", "Brand Identity", "Poster Design", "Environmental Design"],
    },
    {
      category: "Illustration",
      items: ["Digital Illustration", "Street Art and Murals"],
    },
  ];

  return (
    <section className="relative w-full max-h-screen bg-[#e8e2e2] text-center text-[#1a1a1a]">
      <div className="flex flex-col">
        
          <h2 className="text-7xl font-ibm font-bold leading-[0.8] tracking-tighter relative z-10 ">
            SKILLS & <br /> EXPERTISE
          </h2>
          <div className="flex flex-col md:flex-row mx-auto justify-center align-middle items-center">
          <div className="w-full mt-20 mb-10 flex justify-center align-middle items-center sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%]">
            <motion.img 
              src={skillsImg}
               whileHover={{
                scale: [null, 1, 1.05],
                transition: {
                    duration: 0.5,
                    times: [0, 0.8, 1],
                    ease: ["easeInOut", "easeOut"],
                },
            }}
              alt="Workspace" 
              className="w-[80%] rounded-3xl object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-500 "
            />
          </div>

        
    
    <div className="flex text-center justify-center items-center mr-5">
        <div className=" rounded-2xl flex gap-15">
          
          <div className="flex flex-col gap-y-10">
            {skillSets.map((skills, index) => (
              <div key={index} className="flex flex-col">
                <span className="font-[Arsenica] text-2xl uppercase tracking-widest text-black mb-1">
                  {skills.category}
                </span>
                <span className=" text-xl tracking-tight font-extralight text-[#1a1a1a]">
                  <ul className="">
                  {skills.items.map((skill, index) => {
                    return <li key={index}>{skill}</li>;
                  })}
                  </ul>
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
      </div>
      </div>
    </section>
  );
};

export default Skills