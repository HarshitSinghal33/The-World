import Countries from './Pages/Countries'
import { AppContextProvider } from './Context/Context'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Country from './Pages/Country'

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Routes>
          <Route path='/' element={<Countries/>}/>
          <Route path='/country/:code' element={<Country/>} />
          <Route path='*' element={<h1 className='flex h-screen justify-center items-center'>Page Not Found</h1>}/>
        </Routes>
      </AppContextProvider>
    </BrowserRouter>
  )
}
export default App