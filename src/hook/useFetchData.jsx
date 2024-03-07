import { useState } from 'react'

export default function useFetchData() {
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState();

    const fetchData = async (URL) => {
        setIsLoading(true)
        try {
            const response = await fetch(URL);
            if (!response.ok) {
                throw new Error(response.status)
            }
            const data = await response.json();
            setIsLoading(false)
            return data
        } catch (error) {
            setError(error.message)
            setIsLoading(false)
        }
        
    }

    return { error, isLoading, fetchData }
}


// https://restcountries.com/v3.1/alpha/${countryCode}