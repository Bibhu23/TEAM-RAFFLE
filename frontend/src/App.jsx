import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './Components/Homepage/Homepage'
import Product from './Components/Productpage/Productpage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<h1>About page</h1>} />
          <Route path='/product' element={<Product />} />
          <Route path='/Get' element={<h1>Get page</h1>} />
          <Route path='/contact' element={<h1>Contact page</h1>} />
          <Route path='/Signup' element={<h1>Signup page</h1>} />

        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
