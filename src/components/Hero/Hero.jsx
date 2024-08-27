import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className='relative flex justify-between'>
            <div className='z-10 relative inline-block ml-[102px] mt-40'>
                <div className='font-semibold text-8xl'>
                    Find The Per<span className='text-white'>fect</span>
                </div>
                <div className='font-semibold text-8xl'>
                    Plant For Yo<span className='text-white' >ur</span>
                </div>
                <div className='font-semibold text-8xl'>Home</div>
                <Link to= '/explore-plants'>
                    <button className="mt-10 md:mt-14 px-4 md:px-6 py-2 md:py-3 text-xl sm:text-2xl md:text-2xl lg:text-3xl bg-[#162C22] text-white rounded-full hover:bg-[#162C20] transition duration-300 mb-20">
                        Explore Plants
                    </button>
                </Link>

            </div>
            <div className="absolute top-0 right-0 z-0">
                <img src="/hero.svg" alt="hero" className='w-full h-auto' />
            </div>
        </div>
    );
}

export default Hero;
