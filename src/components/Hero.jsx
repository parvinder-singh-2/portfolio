import heroImg from '../assets/heroImg.jpg'

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-[#e8e2e2] flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. Top Heading - Overlaps the image */}
      <h1 className="absolute top-[20%] z-20 font-[Arsenica] text-[20%] md:text-9xl text-[#000000] tracking-tight pl-10">
        Pa<span className='text-gray-300'>rvinder Si</span>ngh
      </h1>

      {/* 2. Centered Image Card */}
      <div className="relative z-10 w-[30%] overflow-hidden rounded-2xl shadow-2xl rotate-[-4deg] bg-gray-300">
        <img 
          src={heroImg} 
          alt="Profile"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>

      {/* 3. Bottom Content Container */}
      <div className="absolute bottom-[12%] z-20 flex flex-col items-center">
        <h2 className="text-6xl md:text-[10rem] font-ibm font-bold text-[#1a1a1a] leading-none tracking-wide">
          PORTFOLIO
        </h2>
        <p className="mt-4 text-lg md:text-xl font-ibm text-gray-600 tracking-widest uppercase">
          React and JavaScript Dev
        </p>
      </div>

    </div>
  )
}

export default Hero