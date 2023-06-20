import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Home = () => {
  const [message, SetMessage] = useState('Check Out Our Trending Products')




  return (<>
    <div className='navbarclone backgroundimage'>
    </div>
    <section className='section center absolute'>
      <h2>Check out our trending products</h2>
      <Link to='/products' className='btn' >Shop now</Link>
    </section>
    </>
  )
}

export default Home