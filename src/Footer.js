import './Footer.css'
import React from 'react';
import FooterSecond from './FooterSecond';


function Footer() {
    return (
     <div className="footer">
        <div className='container'>
          <div className='footer-margin'>
            <img src='#' className="footer-logo" alt="logo" />
            <div className='footer-search '>
              <p className='text-white search-text'>Find a KFC</p>
              <input type="text" class="search" placeholder='Search By city and state or Zip code' />
              </div>
              <div className='icons'> 
              <img src='#' className="svg" alt="" />
              <img src='#' className="svg" alt="" />
              <img src='#' className="svg" alt="" />
            </div>

          </div>

        </div>
        <FooterSecond />
      </div>
    );
  }
  
  export default Footer;
  