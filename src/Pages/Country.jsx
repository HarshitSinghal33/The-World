import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../Context/Context'
import useFetchData from '../hook/useFetchData';
import { MdDoubleArrow } from "react-icons/md";
import { Link } from 'react-router-dom';
import DarkMode from '../Components/Darkmode';
import Error from '../Components/Error';
import CountryDetail from '../Components/CountryDetail';
import { CircularProgress } from '@mui/material';
export default function Country() {
    const [countryData, setCountryData] = useState()
    const { countries, darkMode } = useAppContext();
    const { code } = useParams();
    const { error, isLoading, fetchData } = useFetchData()
    useEffect(() => {
        if (countries.length !== 0) {
            const found = countries.find((country) => country.cca2 === code);
            setCountryData(found)
            return
        }
        const fetch = async () => {
            const URL = `https://restcountries.com/v3.1/alpha/${code}`
            const data = await fetchData(URL);
            setCountryData(data[0]);
        }
        fetch()
    }, [countries, code])
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
                <Link to={'/'} ><MdDoubleArrow size={42} className='rotate-180'/></Link>
                <DarkMode/>
            </header>
            {renderComponent()}
        </div>
    )
}
