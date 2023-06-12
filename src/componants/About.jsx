import { Container } from "react-bootstrap";
import '../assest/style/about.css';
import { useNavigate } from "react-router-dom";
import kfc from '../assest/images/Food_09.svg';
import kfc2 from '../assest/images/Food_09 2.svg';
import prand from '../assest/images/herbs-badge.svg'
function About () {
    const navigate = useNavigate();
    function gotoabout() {
        
              navigate('/about');

    }
    return (
        
        <div className="about Container mt-5">
            <div className="up ">
                <h1 className="finger" >FINGER LICKIN' GOOD® IS NOW JUST A FEW CLICKS AWAY</h1>
                <div className='white d-flex'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <span className="food" >OUR FOOD</span>
                <h1 className="we">WE MAKE IT THE HARD WAY</h1>
                <p >See what goes into making our world famous fried chicken</p>
                <button onClick={gotoabout} className="btn-about p-2 m-auto">Learn more</button>
            </div>
            <div className="down ">
                <img className="ms-5" src={prand}/>
                <img className="kfc" src={kfc}/>
                <img src={kfc2}/>
            </div>    
        </div>
    )
}

export default About;