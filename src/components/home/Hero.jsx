import Image from 'next/image'
import React from 'react'

function Hero() {
    return (
        <div className='relative w-full h-[40%]'>
            <img
                src={'/assets/icons/Pattern.svg'}
                className='absolute w-full h-full object-cover -z-0'
                alt='pattern'

            />
            <div className=' absolute w-full flex flex-col justify-center items-center h-full z-10 p-[20px] mt-[20px]'>
                <div>
                    <h1 className='font-[montserrat-semibold] text-[#5E56E7] text-[48px] leading-[56px]'>Gutenberg Project</h1>
                    <p className='font-[montserrat-semibold] text-[#333333] text-[20px] mt-[20px]'>A social cataloging website that allows you to
                        freely search its database of books,
                        annotations, and reviews.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero