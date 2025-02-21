
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Pages/Navbar/Navbar"

import About from './components/Pages/About/About'
import Home from './components/Pages/Home/Home'
import Services from './components/Pages/Services/Services'

function App() {


  return (
    <>

      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='' element={<Home></Home>} ></Route>
          <Route path='/about' element={<About></About>} ></Route>
          <Route path='/services' element={<Services></Services>} ></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
