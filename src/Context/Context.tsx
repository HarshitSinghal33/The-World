import { useState, useContext, createContext, Dispatch, SetStateAction, ReactNode } from "react";
import { CountryDetails } from "../types/types";

interface AppContextType {
  continent: string;
  setContinent: Dispatch<SetStateAction<string>>;
  countries: CountryDetails[] | undefined;
  setCountries: Dispatch<SetStateAction<CountryDetails[] | undefined>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}
const Appcontext = createContext<AppContextType>({
  continent:'All',
  setContinent: () => {},
  countries: [],
  setCountries: () => {},
  search: "",
  setSearch: () => {},
  darkMode: false,
  setDarkMode: () => {},
  currentPage: 1,
  setCurrentPage: () => {},
})

export function AppContextProvider({ children }: {children : ReactNode}) {
  const [continent, setContinent] = useState<string>('All');
  const [countries, setCountries] = useState<CountryDetails[] | undefined>([])
  const [search, setSearch] = useState<string>('')
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <Appcontext.Provider value={{ currentPage, setCurrentPage, countries, continent, setContinent, darkMode, setDarkMode, setCountries, search, setSearch }}>
      {children}
    </Appcontext.Provider>
  )
}

export function useAppContext() {
  return useContext(Appcontext)
}