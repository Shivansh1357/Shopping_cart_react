import React from 'react'
import {useNavigate} from "react-router-dom"
const NavBar = () => {
    const navigate=useNavigate();
  return (
   
        <nav>
            <div className='left-nav'>Shopping Cart</div>
            <div className='right-nav'>
                <button style={{cursor:"pointer"}} onClick={()=>{
                    navigate("/")
                }}>Home Page</button>
                <button style={{cursor:"pointer"}}  onClick={()=>{
                    navigate("cart")
                }}>Cart Page</button>
            </div>
        </nav>
   
  )
}

export default NavBar