import { Link } from 'react-router-dom'
import { useAppContext } from '../Context/Context';
import { CountryDetails } from '../types/types';

export default function CountriesCard({ country } :{ country : CountryDetails}) {
    const { darkMode } = useAppContext()
    const { cca2, flags: {svg}, name:{common} } = country;
    
    return (
        <Link to={`/the-world/country/${cca2}`} className={`${darkMode ? 'dark' : ''} hover:scale-105 transition-all ease-in duration-100 `} state={country}>
            <div className='px-6 py-3 cursor-pointer rounded-lg text-center shadow-light dark:text-white  dark:shadow-dark w-72 h-48 max-sm:w-40 max-sm:h-32 max-sm:px-2'>
                <img src={svg} alt={`${common} map image`} className='block w-full h-[81%] rounded-lg shadow-lg shadow-neutral-400 dark:shadow-dark object-cover ' />
                <div className='text-xl font-medium mt-1 max-sm:mt-0 truncate'>{common}</div>
            </div>
        </Link>
    )
}