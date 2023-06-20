import React from 'react'
import insta from '../Components/icons/insta.png'
import Facebook from '../Components/icons/facebook.png'
import Tiktok from '../Components/icons/tiktok.png'
import Pinterest from '../Components/icons/pinterest.png'
import logo from '../Components/logo512.png'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (<>
  <div className='underline'></div>

  <div className='footerWrapper'>

    <div className='column center'>
        <h3>
            Contact Us
        </h3>
        <div className='center'>
        <a href='https://www.facebook.com' target='blank'>
        <img src={logo} className='icon center'></img>

        </a>
        </div>
        <div className='row'>
        <ul className='iconsLinks'>
            <il><a href='https://www.instagram.com' target='blank'><img src={insta} className='icon'></img></a></il>
            <il><a href='https://www.facebook.com' target='blank'><img src={Facebook} className='icon'></img></a></il>
            <il><a href='http://www.tiktok.com' target='blank'><img src={Tiktok} className='icon'></img></a></il>
            <il><a href='https://www.pinterest.com' target='blank'><img src={Pinterest} className='icon'></img></a></il>
        </ul>
        </div>
    </div>
<div>
<h3>Our policies</h3>
        <a href='https://es.lipsum.com' target='blank' className='link'><p>Refund Policy</p></a>
        <a href='https://es.lipsum.com' target='blank' className='link'><p>Privacy Policy</p></a>
        <a href='https://es.lipsum.com' target='blank' className='link'><p>Terms of Service</p></a>      
</div>
    <div>
        <h3>Main Menu</h3>
    <Link to='/'><p>Home</p></Link>   
    <Link to='/products'><p>Products</p></Link>   
    <Link to='/login'><p>Login</p></Link>   
    <Link to='/dashboard'><p>Dashboard</p></Link>   

    </div>
  </div>
  
  </>
    
  )
}

export default Footer