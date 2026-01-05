import React from 'react'

const MyArt = () => {
  const artPieces = [
    {
      title: "Thunder and Lightning",
      desc: "CREATED FOR THE WILLOWPANES AND USED DURING THEIR ASIAN TOUR",
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000",
      custom: "pt-0"
    },
    {
      title: "Pasta from the Moon",
      desc: "A POSTER SAMPLE FROM A DESIGN COMPETITION IN 2019",
      img: "https://images.unsplash.com/photo-1543857182-68106299b6b2?q=80&w=1000",
      custom: "pt-0"
    },
    {
      title: "In Bloom",
      desc: "STREET ART IN A SKATE PARK, LOCATED IN WHELTON CITY CENTER",
      img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000",
      custom: "pt-0"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#e8e2e2] text-[#1a1a1a] mr-5 text-center pb-24">
      <div className="text-center mb-20">
        <h2 className="text-7xl md:text-8xl font-ibm font-bold tracking-tighter uppercase">
          MY ART
        </h2>
      </div>

      {/* Grid Container */}
      <div className="flex flex-col justify-center align-middle text-center gap-12 md:flex-row">
        {artPieces.map((art, index) => (
          <div key={index} className={`flex flex-col ${art.custom}`}>
            {/* Image Box */}
            <div className="aspect-square flex align-middle justify-center mb-6 mx-auto sm:w-[60%] lg:w-[90%]">
              <img 
                src={art.img} 
                alt={art.title} 
                className="object-cover w-[80%] grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer rounded-4xl"
              />
            </div>

            {/* Title - Using your custom local font */}
            <h3 className="font-[Arsenica] text-2xl mb-2">
              {art.title}
            </h3>

            {/* Description */}
            <p className="text-sm font-ibm uppercase tracking-widest text-gray-700 leading-relaxed sm:w-[80%] md:w-[60%] lg:w-[90%] mx-auto">
              {art.desc}
            </p>

            <button className='mt-10 bg-[#9ca3af] hover:bg-[#868e96] transition-colors font-medium rounded-full tracking-tighter py-2 px-8 self-center'>
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyArt