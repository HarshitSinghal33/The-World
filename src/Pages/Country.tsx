import { useEffect, useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'

import DarkMode from '../Components/common/Darkmode';
import Error from '../Components/common/Error';
import CountryDetail from '../Components/CountryDetail';
import { CircularProgress } from '@mui/material';
import { MdDoubleArrow } from "react-icons/md";

import { COUNTRY_URL } from '../constants';
import useFetchData from '../hook/useFetchData';
import { useAppContext } from '../Context/Context'
import { CountryDetails } from '../types/types';

export default function Country() {
    const [countryData, setCountryData] = useState<CountryDetails | undefined>()
    const { darkMode } = useAppContext();
    const location = useLocation();
    const country = location.state as CountryDetails
    const { code } = useParams<{code: string}>();
    const { error, isLoading, fetchData } = useFetchData();
    

    
    useEffect(() => {
        const fetch = async () => {
            const data = await fetchData(`${COUNTRY_URL}${code}`);
            
            if(data?.length){
                setCountryData(data[0]);
            }else{
                setCountryData(undefined)
            }
        }
        
        country ? setCountryData(country) : fetch()
    }, [code, country])
    
    const renderComponent = () => {
        if(error){
            return <Error error={error}/>
        }
        if(isLoading){
            return <div className='flex justify-center items-center h-[81vh]'><CircularProgress size={60} /></div>
        }
        if(countryData){
            return <CountryDetail country={countryData}/>
        }
    }
    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <header className='flex justify-between p-3 shadow-light items-center text-2xl dark:text-white dark:shadow-dark'>
                <Link to={'/the-world/'} ><MdDoubleArrow size={42} className='rotate-180'/></Link>
                <DarkMode/>
            </header>
            {renderComponent()}
        </div>
    )
}
