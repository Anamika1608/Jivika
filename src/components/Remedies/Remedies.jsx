import React from 'react'

function Remedies() {
    return (
        <div className='bg-[#E6EFEE] min-h-screen'>
            <div className='text-2xl sm:text-4xl xs:text-3xl font-semibold pt-10 pb-4 text-center px-4'>
                Branch out into botanical benefits
            </div>
            <div className='flex flex-col lg:flex-row justify-evenly items-center'>
                <img 
                    src="/plants.svg" 
                    alt="plant" 
                    className='rounded-xl scale-90 max-w-full h-auto mb-8 lg:mb-0'
                />
                <div className='mt-8 w-full lg:w-auto px-4 lg:px-0'>
                    <div className='bg-[#9CBC6E] cursor-pointer rounded-xl p-12 sm:p-16 md:p-20 lg:p-24 text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8'>
                        Remedies
                    </div>
                    <div className='bg-[#CADABD] cursor-pointer rounded-xl p-12 sm:p-16 md:p-20 lg:p-24 text-2xl sm:text-3xl md:text-4xl font-semibold text-center'>
                        Benefits
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Remedies