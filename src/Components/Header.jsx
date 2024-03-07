import React from 'react'
import DarkMode from './Darkmode'
import { useAppContext } from '../Context/Context'
import Search from './Search'
import ContinentDropdown from './ContinentDropdown'

export default function Header() {
  const { darkMode } = useAppContext()
  return (
    <header className={`${darkMode ? 'dark' : ''} sticky top-0 z-10`}>
      <div className='flex justify-between gap-x-1 items-center px-1 py-3 shadow-lg backdrop-blur  dark:shadow-dark'>

        <div className='flex items-center gap-x-1'>
          <img src="img/world.png" alt="world_Image" className='min-w-[45px] h-[45px]' />
          <h1 className='dark:text-white text-4xl font-bold font-sister hidden sm:block'>TheWorld</h1>
        </div>

        <div className='flex'>
          <Search />
          <ContinentDropdown />
        </div>

        <DarkMode />
      </div>
    </header>
  )
}
