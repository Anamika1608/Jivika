import React from 'react'
import { Link } from 'react-router-dom'
function Tour() {
    return (
        <div className='bg-[#E6EFEE]'>
            <div >
                <div className='text-3xl ml-3 pt-10 font-semibold'>Virtual Tour</div>
                <div className='text-xl ml-3 mt-3 font-medium'>Take a walk in our lush garden</div>
                <Link to='/medicinal-plants'>
                <button className="mt-6 md:mt-14 ml-5 px-4 md:px-6 py-2 md:py-3 text-xl sm:text-2xl md:text-2xl lg:text-3xl bg-[#53A18A] text-white rounded-full hover:bg-[#53A11A] transition duration-300 mb-10 md:mb-20">
                    Take a look
                </button>
                </Link>
            </div>

            <div>
                <img src="/tour.svg" alt="tour" className='scale-90 rounded-2xl pb-5'/>
            </div>

        </div>
    )
}

export default Tour