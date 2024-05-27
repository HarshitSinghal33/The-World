import { useState, useEffect } from 'react'

import Header from '../Components/common/Header'
import CountriesCard from '../Components/CountriesCard'
import PaginationButton from '../Components/PaginationButton'
import Error from '../Components/common/Error'
import { CircularProgress } from '@mui/material'

import useFetchData from '../hook/useFetchData'
import useFilteredCountries from '../hook/useFilterData'

import { useAppContext } from '../Context/Context'
import { ALL_COUNTRIES_URL } from '../constants'

import { CountryDetails } from '../types/types'

export default function Countries() {
    const { countries, setCountries, currentPage, setDarkMode } = useAppContext()
    const filteredCountries = useFilteredCountries();
    const { fetchData, error, isLoading } = useFetchData()
    const [shownCountries, setShownCountries] = useState<CountryDetails[]>([]);

    const handleCurrentPage = () => {
        const lastSliceIndex = currentPage * 15;
        const firstSliceIndex = lastSliceIndex - 15;
        setShownCountries(filteredCountries.slice(firstSliceIndex, lastSliceIndex))
    }

    useEffect(() => {
        const initialize = async () => {
            if (!countries?.length && !error) {
                const getMode = localStorage.getItem('darkMode');
                setDarkMode(getMode === 'true');

                const data = await fetchData(ALL_COUNTRIES_URL);
                if (data) {
                    data.sort((a, b) => {
                        if (a.name.common < b.name.common) return -1;
                        if (a.name.common > b.name.common) return 1;
                        return 0;
                    });
                    setCountries(data);
                }
            }
        };
        initialize();
    }, []);

    useEffect(() => {
        handleCurrentPage()
    }, [filteredCountries, currentPage])

    if (error) return <Error error={error} />;
    if (isLoading) return <div className='flex justify-center items-center h-screen'><CircularProgress size={60} /></div>

    return (
        <>
            <Header />
            {countries &&
                <>
                    <div className='mt-6 flex w-full gap-y-6 gap-x-3 flex-wrap justify-evenly px-1'>
                        {shownCountries.length !== 0 && shownCountries.map((country: CountryDetails) => (
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