import CategoryGrid from '@/components/home/CategoryGrid';
import Hero from '@/components/home/Hero';
import React from 'react'

const HomePage = () => {
    return (
        <div className='bg-[#f8f7ff] h-screen w-screen'>
            <Hero/>
            <CategoryGrid/>
        </div>
    )
}
export default HomePage;
