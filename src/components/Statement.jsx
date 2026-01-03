import React from 'react'

const Statement = () => {
  return (
    <div className="w-full h-screen bg-[#e8e2e2] flex flex-col items-center justify-center text-center text-[#1a1a1a] px-6">
        <div className="">
            <h2 className="text-7xl md:text-[10rem] font-ibm font-bold tracking-wider">
                I WAS
            </h2>
        </div>

    <div className="flex gap-10 ml-52">
        <h2 className="font-[Arsenic] italic text-7xl md:text-[11rem] leading-none tracking-tight">
          CREATED
        </h2>

        <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:block w-[50%] overflow-hidden rounded-lg grayscale">
                <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500" 
                    alt="Workspace" 
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    </div>

    <div className="flex gap-10">


        <div className="w-[25%] overflow-hidden rounded-lg grayscale translate-y-4">
          <img 
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=500" 
            alt="Artistic process" 
            className="w-full h-full object-cover"
          />
        </div>
      

      
      <h2 className="text-7xl md:text-[10rem] font-ibm font-bold tracking-tighter leading-none mt-4">
        TO CREATE
      </h2>
    </div>
    </div>
  );
};

export default Statement