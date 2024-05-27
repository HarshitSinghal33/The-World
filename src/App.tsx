import { AppContextProvider } from './Context/Context'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Country from './Pages/Country'
import Countries from './Pages/Countries'

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Routes>
          <Route path='/the-world/' element={<Countries/>}/>
          <Route path='/the-world/country/:code' element={<Country/>} />
          <Route path='*' element={<h1 className='flex h-screen justify-center items-center'>Page Not Found</h1>}/>
        </Routes>
      </AppContextProvider>
    </BrowserRouter>
  )
}
export default App