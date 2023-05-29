import './Footer.css'
import React, { useState } from 'react';
import FooterSecond from './FooterSecond';


function Footer() {
  const [onClick, setOnClick] =useState ('false')  ;
    return (
     <div className="footer">
        <div className='container'>
          <div className='footer-margin'>
            <div className='logo'>
            <h1  className="footer-logo"  >Kentucky Fried Chicken</h1>
            </div>
              
            <div className='footer-search '>
              <p className='text-white search-text'>Find a KFC</p>
              <input type="text" class="search" placeholder='Search By city and state or Zip code'  />
              </div>
              <div className='icons'> 
                <div className='svg'> </div>
                <div className='svg'> </div>
                <div className='svg'> </div>
             </div>

          </div>

        </div>
        <FooterSecond />
      </div>
    );
  }
  
  export default Footer;
  