import { NavLink } from "react-router-dom";

import React from 'react'
const StyledNavbar = () => {
    return (
      <nav className='navbar'>
          <NavLink to='/' className={({isActive})=>isActive? 'link active': 'link'}>Home</NavLink>
          <NavLink to='/contact' className={({isActive})=>isActive? 'link active': 'link'} >Contact</NavLink>
          <NavLink to='/products' className={({isActive})=>isActive? 'link active': 'link'}>Products</NavLink>
          <NavLink to='/login' className={({isActive})=>isActive? 'link active': 'link'}>Login</NavLink>
          <NavLink to='/dashboard' className={({isActive})=>isActive? 'link active': 'link'}>Dashboard</NavLink>

      </nav>
    )
  }
export default StyledNavbar