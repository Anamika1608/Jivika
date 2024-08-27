import React from 'react'

function Seeds() {
    return (
        <div className='flex flex-col md:flex-row bg-[#E4ECED] justify-around'>
            <div className='mt-10 md:mt-20 mx-4 md:ml-20'>
                <div className='text-3xl md:text-5xl font-semibold mb-3'>Sprout Your Garden!</div>
                <div className='text-xl md:text-5xl font-semibold'>Locate Nearby Seed Shops.</div>
                <button className="mt-6 md:mt-14 px-4 md:px-6 py-2 md:py-3 text-xl sm:text-2xl md:text-2xl lg:text-3xl bg-[#53A18A] text-white rounded-full hover:bg-[#53A11A] transition duration-300 mb-10 md:mb-20">
                    Find Shops
                </button>
            </div>
            <div className='flex justify-center md:block'>
                <img src="/shop.svg" alt="shop" className='scale-75 md:scale-75 -mt-10 md:-mt-32'/>
            </div>
        </div>
    )
}

export default Seeds