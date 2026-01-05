import about1 from '../../public/about1.jpg'
import about2 from '../../public/about2.jpg'
import { motion } from 'motion/react';

const About = () => {
  return (
    <div className="w-full min-h-screen bg-[#e8e2e2] font-sans text-[#1a1a1a] ">
      <div className=" mx-auto flex flex-col md:flex-row justify-center align-middle text-center">
        
        <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="relative">
          <h2 className="text-6xl font-ibm md:w-full md:pt-[20%] leading-none tracking-tighter text-center md:ml-24 lg:ml-32 xl:ml-44 lg:text-7xl">
            A LITTLE <br /> ABOUT ME
          </h2>
        </motion.div>

        <div className="flex justify-center">
          <motion.div 
        initial={{ rotate:0 ,opacity: 0 }}
        animate={{ y: 0, opacity: 1, rotate: 5 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
          className="w-[60%] rounded-[40px] overflow-hidden shadow-xl rotate-12 sm:mt-12 md:w-[50%] xl:w-[40%]">
             <motion.img 
             whileHover={{
                scale: [null, 1, 1.05],
                transition: {
                    duration: 0.5,
                    times: [0, 0.8, 1],
                    ease: ["easeInOut", "easeOut"],
                },
            }}
              src={about1}
              alt="About Me Main" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 "
            />
          </motion.div>
        </div>
      </div>

      <div className=" mx-auto flex flex-col md:flex-row-reverse xl:flex-row justify-center align-middle text-center w-full">
        
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
        className="flex items-center text-center">
          <p className="text-lg font-ibm sm:w-[70%] m-auto leading-relaxed my-20 text-gray-800">
            I am a digital nomad currently based in India. I've been 
            working in graphic design for the past year. Currently working in BPO looking to switch into full time Devloupment roles.
          </p>
        </motion.div>

        <div className="flex justify-center ">
          <motion.div
          initial={{ rotate:0 ,opacity: 0 }}
          animate={{ y: 0, opacity: 1, rotate: -5 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="w-[60%] rounded-3xl overflow-hidden shadow-lg -rotate-[9deg] mb-36 md:mt-24 sm:w-[40%] md:w-[50%] xl:w-[40%] xl:mt-0">
            <motion.img 
            whileHover={{
                scale: [null, 1, 1.05],
                transition: {
                    duration: 0.5,
                    times: [0, 0.8, 1],
                    ease: ["easeInOut", "easeOut"],
                },
            }}
              src={about2}
              alt="About Me Small" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 "
            />
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default About