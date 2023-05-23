import '../assest/style/Search.css';
import { AiOutlineSearch } from "react-icons/ai";

function Search() {

    return (

        <div className="searchdiv">

            <div className="searchbox mt-5">

                <div className='input'>
                    <AiOutlineSearch className='icon' />
                    <input className='ps-4' type='search' placeholder='search here!'/>
                    <span>Clear</span>
                </div>
                <div className='oopsimg m-auto mt-4' ></div>
                <div className='oops mt-3'>
                
                    <span>oops!</span>
                    <p className='mt-2'>there is no result for "tiammaaaaaaaaaaaa"
                        <br></br>
                    let's try other meal or write again</p>

                </div>
                
            </div>

        </div>
    )

}

export default Search;