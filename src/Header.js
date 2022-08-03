import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

{/*react-router-dom provides element called link that we are gonna have 
to import and what we need to do is to sorround element in this case
img inside link tag and we need to give it a link to go to    */}

function Header() {
  return (
    <nav className='header'>
    {/*logo on the left */}
    <Link to='/'>
        <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
    </Link>
    
    {/*Search box */}
    <div className='searchBox'>
        <input type='text' className='header__searchInput' ></input>
        <SearchIcon className='header__searchIcon' />
    </div>
    
          
          
           {/*3 links */}
    <div className='header__nav'>
        {/* first link */}
        <Link to='/login' className='header__link'>
        {/* Reason behind using link from react-router-dom instaed of regular href 
        is because href cause refresh but this is called spa-transistion (SPA-single page application) */}
         <div className='header__option'>
             <span className='h__option1'>Hello</span>
             <span className='h__option2'>Sign In</span>
         </div>        
        </Link>
        {/* second link */}
        <Link to='/login' className='header__link'>
         <div className='header__option'>
             <span className='h__option1' >Returns</span>
             <span className='h__option2'>& Orders</span>
         </div>        
        </Link>
        {/* third link */}
        <Link to='/login' className='header__link'>
         <div className='header__option'>
             <span className='h__option1'>Your</span>
             <span className='h__option2'>Prime</span>
         </div>        
        </Link>
        {/* fourth link */}
        <Link to='/checkout' className='header__link'>
            <div className='header__optionBasket'>
                {/* Shopping basket icon */}
                <ShoppingCartIcon />
                {/* Number of item in the basket */}
                <span className='header__optionBasketCount'>0</span>
            </div>
        </Link>
            </div>
            {/*Checkout logo with number  */}
    </nav>

  )
}

export default Header