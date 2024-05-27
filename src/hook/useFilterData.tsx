import { useState, useEffect } from "react";
import { useAppContext } from "../Context/Context";
import { CountryDetails } from "../types/types";

export default function useFilteredCountries() {
  const { countries = [], search, continent } = useAppContext()
  const [filteredCountries, setFilteredCountries] = useState<CountryDetails[]>([]);

  useEffect(() => {
    if (continent === 'All' && search === '') {
      setFilteredCountries(countries || []);
      return
    }
    const filtered = countries.filter((country: CountryDetails) => {
      return ((continent === 'All' || country.continents.includes(continent)) && (country.name.common.toLowerCase().includes(search.toLowerCase().trim())))
    });
    setFilteredCountries(filtered);
  }, [countries, search, continent]);

  return  filteredCountries ;
}