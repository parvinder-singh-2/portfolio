import React from 'react'

const Statement = () => {
  return (
    <div className="w-full min-h-screen bg-[#e8e2e2] flex flex-col items-center justify-center text-center text-[#1a1a1a]">
        <div className="">
            <h2 className="text-7xl font-ibm font-bold tracking-wider">
                I WAS
            </h2>
        </div>

    <div className="flex flex-col">
        <h2 className="font-[Arsenic] italic text-7xl md:text-[11rem] leading-none tracking-tight">
          CREATED
        </h2>

        <div className="flex items-center gap-4 md:gap-8">
            <div className="w-72 overflow-hidden rounded-lg grayscale hover:grayscale-0 transition-all duration-50">
                <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500" 
                    alt="Workspace" 
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    </div>

    <div className="flex flex-row-reverse">


        <div className="w-[20%] overflow-hidden rounded-lg grayscale translate-y-4 hover:grayscale-50 transition-all duration-50 hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=500" 
            alt="Artistic process" 
            className="w-full h-full object-cover"
          />
        </div>
      

      
      <h2 className="text-7xl font-ibm font-bold tracking-tighter leading-none">
        TO CREATE
      </h2>
    </div>
    </div>
  );
};

export default Statement