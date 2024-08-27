import React from 'react';

const About1 = () => {
  return (
    <div className="bg-green-50 rounded-lg shadow-md my-6 overflow-hidden">
      <div className="bg-[#CADACB] p-6 sm:p-14 sm:rounded-se-[110px]">
        <div className="sm:flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-green-800 mb-2">ALOE VERA PLANT</h2>
            <div className="text-green-700 mb-4">
              <p className="flex items-center">
                <span className="mr-2">🌡️</span>
                Temperature: <span className="font-medium ml-2">30°C</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📏</span>
                Height: <span className="font-medium ml-2">30-61 cm</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">☀️</span>
                Sunlight: <span className="font-medium ml-2">6h/Day</span>
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-4 sm:mt-0">
            <img src="/p1.svg" alt="Aloe Vera Plant" className="object-contain sm:ml-10 p-4 scale-[1.5] rounded-lg" />
          </div>
        </div>
      </div>
      
      <div className="p-6 sm:ml-44 bg-white sm:py-5 sm:w-1/3">
        <h3 className="text-green-700 font-semibold text-2xl mb-2">Details</h3>
        <p className="text-gray-600 text-md mb-4">
          Aloe Vera Has Anti-inflammatory, Antimicrobial, And Antioxidant Properties. It's Used To Soothe Burns, Hydrate Skin, And Aid Digestion. Its Gel And Juice Are Popular For Treating Minor Wounds And Promoting Overall Health.
        </p>
        <button className="bg-green-600 text-white px-4 py-2 rounded-full">Read More</button>
      </div>
    </div>
  );
};

export default About1;