import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-black text-white flex items-baseline px-4 py-2 justify-between'>

      <h1 className='text-3xl'>Tail Web</h1>
      <nav className='space-x-2'>
        <NavLink to='/about-page' className={(e)=> {
          // console.log(e);
          return e.isActive ? 'text-red-700 hover:bg-white hover:text-black px-2 py-2': 'hover:bg-white hover:text-black px-2 py-2';
        }} href="">About</NavLink>

        <NavLink to='/contact-page' className={(e)=>{
          return e.isActive ? 'text-red-600 hover:bg-white hover:text-black px-2 py-3': 'hover:bg-white hover:text-black px-2 py-2' ;
        }}href="">Contact</NavLink>

        <NavLink to='/gallery-page' className='hover:bg-white hover:text-black px-2 py-2' href="">Gallery</NavLink>
      </nav>

      

    </header>
  )
}

export default Header