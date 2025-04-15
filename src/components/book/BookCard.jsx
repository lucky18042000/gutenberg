import React from 'react'

function BookCard({ bookDetails }) {
    const bookImage = Object.keys
    const getBestFormat = () => {
        const formats = Object.keys(bookDetails.formats);
        const html = Object.entries(formats).find(([key]) =>
            key.startsWith('text/html')
        );
        const pdf = Object.entries(formats).find(([key]) =>
            key.startsWith('application/pdf')
        );
        const txt = Object.entries(formats).find(([key]) =>
            key.startsWith('text/plain')
        );

        return html?.[1] || pdf?.[1] || txt?.[1];
    };

    const handleClick = () => {
        const url = getBestFormat();
        if (url) window.open(url, '_blank');
        else alert('No viewable version available');
    };
    return (
        <div className=' cursor-pointer' onClick={handleClick}>
            <img className=' h-[162px] object-cover rounded-[8px] shadow-[0_2px_5px_0_rgba(211,209,238,0.5)]' src={bookDetails?.formats['image/jpeg']} alt="" />
            <div className='mt-2 '>
                <p className='font-[montserrat-regular] text-[#333333] font-semibold text-[12px] line-clamp-2'>{bookDetails?.title}</p>
                <p className='font-[montserrat-regular] text-[#A0A0A0] font-semibold text-[12px] line-clamp-1'>{bookDetails?.authors[0] && bookDetails?.authors[0]?.name}</p>
            </div>
        </div>
    )
}

export default BookCard