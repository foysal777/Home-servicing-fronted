
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Pages/Navbar/Navbar"

import About from './components/Pages/About/About'
import Home from './components/Pages/Home/Home'
import Services from './components/Pages/Services/Services'
import { LogIn } from 'lucide-react'
import LoginPage from './components/Pages/Auth/Login'
import RegisterPage from './components/Pages/Auth/Register'
import Contact from './components/Pages/Contact/Contact'
import CategoryPage  from './components/Pages/Home/CategoryPage'
import Categories from './components/Pages/Home/Categories'

function App() {


  return (
    <>

      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='' element={<Home></Home>} ></Route>
          <Route path='/about' element={<About></About>} ></Route>
          <Route path='/services' element={<Services></Services>} ></Route>
          <Route path='/login' element={<LoginPage></LoginPage>} ></Route>
          <Route path='/register' element={<RegisterPage></RegisterPage> } ></Route>
          <Route path='/contact' element={<Contact></Contact> } ></Route>
          <Route path="/" element={<Categories />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
