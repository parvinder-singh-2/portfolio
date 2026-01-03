import FooterImg from '../assets/footerImg.jpg';

const Footer = () => {

  return (
    <footer className="relative w-full min-h-screen bg-[#e8e2e2] px-48 py-20 text-[#1a1a1a] flex flex-col md:flex-row items-center justify-between overflow-hidden">
      
      <div className="z-10 flex flex-col space-y-8 md:w-1/2">
        <div>
          <span className="font-[Arsenica] text-3xl">Parvinder Singh</span>
          <h2 className="text-7xl md:text-9xl font-ibm font-bold leading-none tracking-widest mt-4 uppercase">
            WORK <br /> WITH ME
          </h2>
        </div>

        <div className="space-y-4 pt-10">
          <p className="font-custom text-3xl">123 Anywhere St., Any City, ST 12345</p>
          <p className="font-custom text-3xl">123-456-7890</p>
          <p className="font-custom text-3xl">hello@reallygreatsite.com</p>
        </div>
      </div>


      <div className="relative md:w-1/2 flex justify-center md:justify-end mt-20 md:mt-0">
        <div className="w-[50%] rounded-[30px] overflow-hidden shadow-2xl rotate-[5deg] bg-gray-300">
          <img 
            src={FooterImg}
            alt="Tristan Clousso" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>

    </footer>
  );
};

export default Footer