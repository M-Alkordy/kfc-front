import './FooterSecond.css'
import twiter from './assets/img/Shape.svg'
import Facebook from './assets/img/facebook.svg'
import instgram from './assets/img/instagram.svg'

function FooterSecond() {
    return (
        <div className='footer footer-menu container'>
         
            <div className=' social'>
                <div className='icons container'><a href='#'>
                    <img src={twiter} className="social-icon" alt="" /></a>
                    <a href='#'> <img src={Facebook} className="social-icon" alt="" /></a>
                    <a href='#'> <img src={instgram} className="social-icon" alt="" /></a>
                 </div>
                 <p className='text'>Privacy Policy Updated 01/2022 Terms oi Use Our Cookies and Ads 
                       DO Not<br/> Sell Or Share My Personal Information Accessiblity Statement 
                   </p>
               
            </div>
            <div>
            <div className='  menu'>
                        <ul>
                        <li  className=' menu-items'><a href='#' className='text-white'>Menu</a></li>
                        <li  className=' menu-items'><a href='# ' className='text-white'>Profile</a></li>
                        <li className=' menu-items'><a href='#' className='text-white'>About</a></li>
                        </ul>
                </div>
                <p className='copyright'>
                   Copyright © KFC Corporation 2022 ALL Rights Reserved Build: KFC05042023:b37a28d
                </p> 
                </div>
           

        </div>  
    );
}
export default FooterSecond;