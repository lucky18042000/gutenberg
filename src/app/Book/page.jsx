"use client"; // i am using use client here because the nextjs router needs to know if we need to use hook from client side
import BookCard from '@/components/book/BookCard';
import { fetchBooks } from '@/services/GutendexApi';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';


//i am using throttling here so that we can get the data after a certain time
const throttle = (fn, limit) => {
    let inThrottle;
    return function () {
        if (!inThrottle) {
            fn()
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};

function Book() {
    const searchParams = useSearchParams();
    const { category } = Object.fromEntries(searchParams);

    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [next, setNext] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();
    //here i am calling the api which is been declared in other place
    const gettingBooks = async () => {
        setIsLoading(true);
        const result = await fetchBooks({ page, category, search });
        setBooks(prev => [...prev, ...result.results]);
        setNext(result.next);
        setIsLoading(false);
    };

    useEffect(() => {
        setBooks([]);
        setPage(1);
    }, [category, search]);

    useEffect(() => {
        gettingBooks();
    }, [page]);

    //i am getting the info of user scrolling the page or not , i am getting the data from window object 
    useEffect(() => {
        const handleScroll = throttle(() => {
            const userScrollPosition = window.scrollY;
            const windowHeight = window.innerHeight; // this is the viewport of the users window
            const fullHeight = document.documentElement.scrollHeight; // this is total document height

            if (userScrollPosition + windowHeight >= fullHeight - 300 && next && !isLoading) {
                setPage(prev => prev + 1);
            }
        }, 300);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [next, isLoading]);

    return (
        <div className="bg-[#FFF] w-full h-full flex justify-center">
            <div className='md:w-[75%] w-full h-full p-[20px] md:p-0 md:mt-[5%]'>
                <div className='flex gap-4 items-center'>
                    <img onClick={() => router.back()} className='w-[24px] h-[24px] cursor-pointer' src={`/assets/icons/Back.svg`} alt="" />
                    <p className='font-[montserrat-regular] capitalize text-[#5E56E7] font-semibold text-[30px]'>{category}</p>
                </div>
                <div className="relative bg-[#f8f7ff] mt-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <img className='w-[14px] h-[14px]' src={`/assets/icons/search.svg`} alt="" />
                    </div>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search"
                        className="block w-full font-[montserrat-regular] font-semibold py-2 pl-10 pr-3 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        style={{ height: '40px' }}
                    />
                    {search && (
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <button onClick={() => setSearch('')} className="text-gray-500 hover:text-gray-700 cursor-pointer">
                                <img className='w-[14px] h-[14px]' src={`/assets/icons/cancel.svg`} alt="" />
                            </button>
                        </div>
                    )}
                </div>
                    {/* this is where all the books are displayed */}
                <div className="w-full h-full bg-[#f8f7ff] flex flex-wrap gap-2 md:gap-[42px] mt-[20px] pt-[20px] justify-center">
                    {books.map((item, index) => (
                        <div key={index} className='w-[114px]'>
                            <BookCard bookDetails={item} />
                        </div>
                    ))}
                    {books.length === 0 && !isLoading && <div>No Books Found</div>}
                </div>

                {isLoading && (
                    <div className="text-center text-sm text-gray-500 mt-4">
                        Loading more books...
                    </div>
                )}
            </div>
        </div>
    );
}

export default Book;
