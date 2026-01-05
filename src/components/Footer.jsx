import footerImg from '../../public/footerImg.jpg';
import { motion } from 'motion/react';

const Footer = () => {

  return (
    <>
    <footer className="relative max-h-screen w-full bg-[#e8e2e2] text-[#1a1a1a] flex flex-col md:flex-row items-center justify-between text-center">
      
      <div className="z-10 flex flex-col space-y-8 md:w-1/2 md:ml-[5%]">
        <div>
          <span className="font-[Arsenica] text-3xl">Parvinder Singh</span>
          <h2 className="text-7xl font-ibm font-bold leading-none tracking-widest mt-4 uppercase md:tracking-tight">
            WORK <br /> WITH ME
          </h2>
        </div>

        <div className="space-y-4 ml-5">
          <p className="font-ibm text-lg">Indore, India</p>
          <p className="font-ibm text-lg">+91 93011 82667</p>
          <p className="font-ibm text-lg">mr.parvindersinghgandhi@gmail.com</p>
        </div>
      </div>


      <div className="relative flex justify-center mx-auto items-center my-15">
        <div className="w-[50%] md:w-[80%] lg:w-[50%] rounded-[30px] overflow-hidden shadow-2xl rotate-[5deg] bg-gray-300">
          <motion.img 
            src={footerImg}
             whileHover={{
                scale: [null, 1, 1.05],
                transition: {
                    duration: 0.5,
                    times: [0, 0.8, 1],
                    ease: ["easeInOut", "easeOut"],
                },
            }}
            alt="Tristan Clousso" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>

    </footer>
    <div className="h-14 text-white bg-black w-full text-center flex items-center justify-center text-sm">
        <p className='font-ibm'>Copyright@2026 by Parvinder Singh</p>
    </div>
    </>
  );
};

export default Footer