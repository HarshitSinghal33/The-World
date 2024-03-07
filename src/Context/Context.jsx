import { useState, useContext, createContext } from "react";
const Appcontext = createContext()

export function AppContextProvider({ children }) {
  const [continent, setContinent] = useState('All');
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [darkMode, setDarkMode] = useState();
  const [currentPage,setCurrentPage] = useState(1);
  
  return (
    <Appcontext.Provider value={{ currentPage,setCurrentPage,countries, continent, setContinent, darkMode, setDarkMode, setCountries, search, setSearch }}>
      {children}
    </Appcontext.Provider>
  )
}

export function useAppContext() {
  return useContext(Appcontext)
}