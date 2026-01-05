import heroImg from '../../public/heroImg.jpg';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#e8e2e2] flex flex-col items-center justify-center overflow-hidden text-center">
      
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeIn" }}
        className="absolute top-[15%] z-20 font-[Arsenica] text-7xl text-[#000000] tracking-normal flex sm:flex-row
                  flex-col sm:top-[20%] md:text-8xl md:top-[13%] lg:top-[15%]"
      >
        <h2 className="">Parvinder</h2>
        <h2 className="">Singh</h2>
      </motion.div>

      <motion.div 
        initial={{ rotate:0 ,opacity: 0 }}
        animate={{ y: 0, opacity: 1, rotate: -5 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="relative z-10 w-[80%] overflow-hidden rounded-2xl shadow-2xl bg-gray-300 mr-5 sm:w-[60%] lg:w-[40%]">
        <motion.img 
          whileHover={{
                scale: [null, 1, 1.05],
                transition: {
                    duration: 0.5,
                    times: [0, 0.8, 1],
                    ease: ["easeInOut", "easeOut"],
                },
            }}
          src={heroImg} 
          alt="Profile"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
      </motion.div>

      <div className="absolute bottom-[18%] z-20 flex flex-col items-center">
        <motion.h2 
         initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeIn" }}
        delay={1.5}
        className="text-6xl font-ibm font-bold text-[#1a1a1a] leading-none tracking-wide">
          PORTFOLIO
        </motion.h2>
        <p className="mt-4 text-lg md:text-xl font-ibm text-gray-600 tracking-widest uppercase">
          React and JavaScript Dev
        </p>
      </div>

    </div>
  )
}

export default Hero