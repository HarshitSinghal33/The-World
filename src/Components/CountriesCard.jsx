import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../Context/Context';
export default function CountriesCard({ country }) {
    const {darkMode} = useAppContext()
    const { cca2 } = country;
    return (
        <Link to={`/the-world/country/${cca2}`} className={`${darkMode ? 'dark' : ''} hover:scale-105 transition-all ease-in duration-100 `}>
            <div className='px-6 py-3 cursor-pointer rounded-lg text-center shadow-light dark:text-white  dark:shadow-dark w-72 h-48 max-sm:w-48 max-sm:h-36'>
                <img src={country.flags.svg} alt={`${country.name.common} img`} className='block w-full h-[81%] rounded-lg shadow-lg shadow-neutral-400 dark:shadow-dark object-cover' />
                <div className='text-xl font-medium mt-1 truncate'>{country.name.common}</div>
            </div>
        </Link>
    )
}