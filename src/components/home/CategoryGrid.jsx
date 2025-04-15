import Link from 'next/link';
import React from 'react'

function CategoryGrid() {
    const category = ['FICTION', 'DRAMA', 'HUMOUR', 'POLITICS', 'PHILOSOPHY', 'HISTORY', 'ADVENTURE']
    return (
        <div className=" md:w-[75%] mx-auto grid md:grid-cols-2 gap-4 mt-[8px] p-[20px]">
            {category?.map((item, index) => (
                <Link href={{ pathname: 'Book', query: { category: item } }} key={index} className='cursor-pointer  bg-[#FFF] px-[10px] h-[50px] flex justify-between items-center shadow-[0_2px_5px_0_rgba(211,209,238,0.5)] rounded-[4px]'>
                    <div className='flex gap-2'>
                        <img className='w-[24px] h-[24px]' src={`/assets/icons/${item}.svg`} alt="" />
                        <p className='font-[montserrat-regular] text-[#333333] font-semibold text-[20px]'>{item}</p>
                    </div>
                    <img className='w-[24px] h-[24px]' src={`/assets/icons/Next.svg`} alt="" />
                </Link>
            ))}
        </div>
    )
}

export default CategoryGrid