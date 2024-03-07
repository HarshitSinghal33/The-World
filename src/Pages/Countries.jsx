import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import { useAppContext } from '../Context/Context'
import useFetchData from '../hook/useFetchData'
import CountriesCard from '../Components/CountriesCard'
import useFilteredCountries from '../hook/useFilterData'
import PaginationButton from '../Components/PaginationButton'
import { CircularProgress } from '@mui/material'
import Error from '../Components/Error'
export default function Countries() {
    const { countries, setCountries, currentPage, setDarkMode } = useAppContext()
    const filteredCountries = useFilteredCountries();
    const { fetchData, error, isLoading } = useFetchData()
    const [shownCountries, setShownCountries] = useState([]);
    // const totalPages = Math.ceil(filteredCountries.length / 15);

    const handleCurrentPage = () => {
        const lastSliceIndex = currentPage * 15;
        const firstSliceIndex = lastSliceIndex - 15;
        setShownCountries(filteredCountries.slice(firstSliceIndex, lastSliceIndex))
    }

    useEffect(() => {
        if (!countries?.length && !error && !isLoading) {
            const getMode = localStorage.getItem('darkMode')
            setDarkMode(getMode === 'true')
            const fetch = async () => {
                const URL = 'https://restcountries.com/v3.1/all'
                const data = await fetchData(URL);
                data && data.sort((a, b) => {
                    if (a.name.common < b.name.common) return -1;
                    if (a.name.common > b.name.common) return 1;
                    return 0
                })
                setCountries(data);
            }
            fetch()
        }
    }, [])

    useEffect(() => {
        handleCurrentPage()
    }, [filteredCountries, currentPage])

    if (error) return <Error error={error}/>;
    if (isLoading) return <div className='flex justify-center items-center h-screen'><CircularProgress size={60} /></div>
    return (
        <>
            <Header />
            {countries &&
                <>
                    <div className='mt-6 flex w-full gap-y-6 gap-x-3 flex-wrap justify-evenly px-1'>
                        {shownCountries.length !== 0 && shownCountries.map(country => (
                            <CountriesCard country={country} key={country.cca2} />
                        ))}
                    </div>
                    <PaginationButton
                        totalPages={Math.ceil(filteredCountries.length / 15)}
                    />
                </>}
        </>
    )
}