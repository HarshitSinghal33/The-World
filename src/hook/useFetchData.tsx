import { useState } from 'react'
import { CountryDetails } from '../types/types';
type FetchDataResult = {
    error?: string;
    isLoading: boolean;
    fetchData: (URL: string) => Promise<CountryDetails[] | undefined>;
}
export default function useFetchData(): FetchDataResult {
    const [error, setError] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchData = async (URL : string): Promise<CountryDetails[] | undefined> => {
        try {
            const response = await fetch(URL);
            if (!response.ok) {
                throw new Error(response.status.toString())
            }
            const data : CountryDetails[] = await response.json();
            
            return data
        } catch (error: any) {
            setError(error.message);
            return undefined
        } finally{
            setIsLoading(false)
        }
        
    }

    return { error, isLoading, fetchData }
}
