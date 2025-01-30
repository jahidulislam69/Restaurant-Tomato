import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Cart from "./Pages/Cart/Cart"
import Home from "./Pages/Home/Home"
import { Route, Routes } from 'react-router-dom'
import Placeorder from './Pages/PlaceOrder/Placeorder'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<Placeorder/>} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
