// import img from '../assest/images/Group 9.jpg';
import { images } from '../../assests/images';
import './Kentucky.css';


function Kentucky () {
    return (
        <div className='main mt-5'>
            <div className='Kentucky ps-4'>
                <img className='imgk' src={images[0].url} alt='chicken'/>
                <p >
                KENTUCKY<br/> FRIED CHICKEN<br/> FOUNDATION
                </p>
            </div>
        </div>
    )
}
export default Kentucky;