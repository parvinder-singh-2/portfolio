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
    <div className="w-full min-h-screen bg-[#e8e2e2] px-10 py-24 text-[#1a1a1a] mr-5 text-center">
      <div className="text-center mb-20">
        <h2 className="text-7xl md:text-8xl font-ibm font-bold tracking-tighter uppercase">
          MY ART
        </h2>
      </div>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mr-5">
        {artPieces.map((art, index) => (
          <div key={index} className={`flex flex-col ${art.custom}`}>
            {/* Image Box */}
            <div className="aspect-square w-full overflow-hidden bg-gray-300 mb-6">
              <img 
                src={art.img} 
                alt={art.title} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer "
              />
            </div>

            {/* Title - Using your custom local font */}
            <h3 className="font-[Arsenica] text-2xl mb-2">
              {art.title}
            </h3>

            {/* Description */}
            <p className="text-sm md:text-sm font-ibm uppercase tracking-widest text-gray-700 leading-relaxed">
              {art.desc}
            </p>

            <button className='mt-10 bg-gray-400 font-bold rounded-full tracking-tighter py-2'>Read More</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyArt