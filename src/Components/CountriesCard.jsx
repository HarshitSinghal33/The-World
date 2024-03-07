import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../Context/Context';
export default function CountriesCard({ country }) {
    const {darkMode} = useAppContext()
    const { cca2 } = country;
    return (
        <Link to={`/the-world/country/${cca2}`} className={`${darkMode ? 'dark' : ''} hover:scale-105 transition-all ease-in duration-100`}>
            <div className='px-6 py-3 cursor-pointer rounded-lg text-center shadow-light dark:text-white  dark:shadow-dark'>
                <img src={country.flags.svg} alt={`${country.name.common} img`} className='block w-64 h-36 max-sm:w-48 max-sm:h-28 rounded-lg shadow-lg shadow-neutral-400 dark:shadow-dark object-cover' />
                <h1 className='text-xl font-medium mt-0.5 '>{country.name.common.length <= 18 ? country.name.common : `${country.name.common.slice(0, 18)}...`}</h1>
            </div>
        </Link>
    )
}
