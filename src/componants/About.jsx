import { Container } from "react-bootstrap";
import '../assest/style/about.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function About () {
    const navigate = useNavigate();
    function gotoabout() {
        
              navigate('/about');

    }
    return (
        
        <div className="about Container w-100 ">
                <button onClick={gotoabout} className="btn-about p-2 m-auto">About KFC</button>
        </div>
    )
}

export default About;