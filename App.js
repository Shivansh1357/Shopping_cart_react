import React from 'react'
import Home from "./Components/Home"
import Cart from './Components/Cart'
import NavBar from './Components/NavBar'
import {Routes,Route} from "react-router-dom"
const App = () => {
  return (
    <div className='container'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App