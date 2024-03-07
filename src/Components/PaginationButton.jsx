import React, { useEffect, useState } from 'react'
import { useAppContext } from '../Context/Context'

export default function PaginationButton({ totalPages }) {
    const { currentPage, setCurrentPage, darkMode } = useAppContext()
    const [index, setIndex] = useState({firstIndex: 0, lastIndex: 3 })

    // if user click on a country and get back to home page than set the currentPage to the previous one (means back on the same page)
    useEffect(() => {
        const currentIndex = currentPage % 3;
        if (currentIndex === 1) {
            index.firstIndex = currentPage - 1
            index.lastIndex = currentPage + 2
        } else if (currentIndex === 2) {
            index.firstIndex = currentPage - 2
            index.lastIndex = currentPage + 1
        } else {
            index.firstIndex = currentPage - 3
            index.lastIndex = currentPage
        }
    }, [totalPages])

    const handleClickPageChange = (page) => {
        setCurrentPage(page)
    }

    const handlePrev = () => {
        const newPage = currentPage - 1
        if (newPage < index.firstIndex +1) {
            handlePrevDots(newPage)
            return
        }
        setCurrentPage(newPage)
    }

    const handleNext = () => {
        const newPage = currentPage + 1
        if (newPage > index.lastIndex) {
            handleNextDots()
            return
        }
        setCurrentPage(newPage)
    }


    const handlePrevDots = (page) => {
        const newFirstIndex = index.firstIndex - 3;
        setIndex({firstIndex: newFirstIndex,lastIndex: newFirstIndex + 3  })
        setCurrentPage(page || newFirstIndex +  1);
    }
    const handleNextDots = () => {
        const newFirstIndex = index.firstIndex + 3;
        setIndex({ firstIndex: newFirstIndex, lastIndex: newFirstIndex + 3 });
        setCurrentPage(newFirstIndex + 1);
    }
    return (
        <>
            {<div className={`${darkMode ? 'dark' : ''} flex gap-3 justify-center mt-12 mb-9`}>
                {currentPage > 1 && <div className='cursor-pointer border border-solid border-black px-2 py-1 dark:border-white dark:text-white' onClick={handlePrev}>prev</div>}
                {currentPage > 3 && <div className='cursor-pointer border border-solid border-black px-2 py-1 dark:border-white dark:text-white' onClick={() => handlePrevDots()}>...</div>}
                {Array.from({length : totalPages},(_,i) => i + 1).slice(index.firstIndex,index.lastIndex).map(page => (
                    <div key={page} onClick={() => handleClickPageChange(page)} 
                    className={`
                    ${currentPage === page ? 'bg-black text-white dark:text-black dark:bg-white' : 'dark:text-white'} 
                    border border-solid border-black px-2 py-1 cursor-pointer dark:border-white `}>{page}</div>
                ))}
                {Math.ceil(currentPage/3) < Math.ceil(totalPages/3) && <div className='cursor-pointer border border-solid border-black px-2 py-1 dark:border-white dark:text-white' onClick={handleNextDots}>...</div>}
                {currentPage < totalPages && <div className='cursor-pointer border border-solid border-black px-2 py-1 dark:border-white dark:text-white' onClick={handleNext}>next</div>}
            </div>}
        </>
    )
}
