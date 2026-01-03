import skillsImg from "../assets/skillsImg.jpg";

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
    <section className="relative w-full min-h-screen bg-[#e8e2e2] px-10 py-24 text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Overlapping Heading and Image */}
        <div className="relative">
          <h2 className="text-7xl md:text-8xl font-ibm font-bold leading-[0.8] tracking-tighter relative z-10">
            SKILLS & <br /> EXPERTISE
          </h2>
          <div className="w-full md:w-[80%] aspect-video rounded-3xl overflow-hidden shadow-sm">
            <img 
              src={skillsImg}
              alt="Workspace" 
              className="w-full h-full object-cover grayscale opacity-80"
            />
          </div>
        </div>

        
    
    <div className="absolute bottom-36 right-24 z-50">
        <div className=" backdrop-blur-sm p-6 rounded-2xl  flex gap-15">
          
          <div className="flex flex-col gap-y-10">
            {skillSets.map((skills, index) => (
              <div key={index} className="flex flex-col">
                <span className="font-[Arsenica] text-4xl uppercase tracking-widest text-black mb-1">
                  {skills.category}
                </span>
                <span className=" text-3xl tracking-tight font-extralight text-[#1a1a1a]">
                  <ul className="">
                  {skills.items.map((skill, index) => {
                    return <li key={index}>{skill}</li>;
                  })}
                  </ul>
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-y-10">
            {skillSets.map((skills, index) => (
              <div key={index} className="flex flex-col">
                <span className="font-[Arsenica] text-4xl uppercase tracking-widest text-black mb-1">
                  {skills.category}
                </span>
                <span className=" text-3xl tracking-tight font-extralight text-[#1a1a1a]">
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
    </section>
  );
};

export default Skills