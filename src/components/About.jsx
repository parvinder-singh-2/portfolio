import about1 from '../../public/about1.jpg'
import about2 from '../../public/about2.jpg'

const About = () => {
  return (
    <div className="w-full max-h-screen bg-[#e8e2e2] px-10 py-20 font-sans text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        <div className="relative">
          <h2 className="text-6xl md:text-8xl font-ibm leading-none tracking-tighter">
            A LITTLE <br /> ABOUT ME
          </h2>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-[80%] rounded-[40px] overflow-hidden shadow-xl rotate-12">
             <img 
              src={about1}
              alt="About Me Main" 
              className="w-full h-full object-cover grayscale "
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
        
        <div className="flex items-center md:pl-20">
          <p className="text-lg md:text-2xl leading-relaxed max-w-md text-gray-800">
            I am a digital nomad currently based in Hong Kong. I've been 
            working in graphic design for the past ten years. It was only 
            in the past three that I decided to focus full-time on illustrating.
          </p>
        </div>

        <div className="flex justify-center md:justify-center md:pt-10">
          <div className="w-[30%] rounded-3xl overflow-hidden shadow-lg -rotate-[9deg]">
            <img 
              src={about2}
              alt="About Me Small" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default About