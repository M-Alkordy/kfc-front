// import { useState } from 'react';
import '../assest/style/Search.css';
import { AiOutlineSearch } from "react-icons/ai";
import no from '../assest/images/no-results (2) 1.svg';
import hum from '../assest/images/Vector.svg';
import soop from '../assest/images/soop icon.svg';
import cup from '../assest/images/Vector (1).svg';
function Search() {
   
    return (



        <div className="searchdiv">

            <div className="searchbox mt-5">
                <div className='red col-12 d-flex'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className='input'>
                    <AiOutlineSearch className='icon' />
                    <input className='ps-4' type='search' placeholder='search here!' />
                    <span>Clear</span>
                </div>
                
                
                <img className='foodicon hum' src={hum}/>
                <img className='foodicon soop' src={soop}/>
                <img className='foodicon cup' src={cup}/>
                <div className="oops">
                    <div className='oopsimg m-auto mt-4' >
                        <img src={no}/>
                    </div>
                    <span >oops!</span>
                    <p className='mt-2'>there is no result for "mmmmmmmmmmmmm"
                        <br></br>
                        let's try other meal or write again</p>
                </div>



            </div>

        </div>
    )

}

export default Search;