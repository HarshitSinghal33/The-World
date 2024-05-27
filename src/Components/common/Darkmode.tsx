import { useEffect } from 'react'
import { BsLightbulb, BsLightbulbFill } from "react-icons/bs";
import { useAppContext } from '../../Context/Context';

export default function DarkMode() {
  const { darkMode, setDarkMode } = useAppContext()
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? 'black' : 'white';
  }, [darkMode])

  const handleMode = () => {
    setDarkMode(prev => {
      const newMode = !prev
      localStorage.setItem('darkMode', JSON.stringify(newMode))
      return newMode
    })
  }

  return (
    <div onClick={handleMode} className='text-2xl border border-solid  rounded-lg p-3 cursor-pointer bg-black text-white'>
      {darkMode ? <BsLightbulb /> : <BsLightbulbFill />}
    </div>
  )
}