import './Responsibility.css';
import Colonel from "./../../assests/resp-colonel.png"
import AboutStory from "./../../assests/resp-badge.png"
import Header from '../Header/Header';
function Responsibility () {
    return (
        <>
            
            {/* <div className="foodtext">
                <p className='left mt-5'>
                THERE IS MORE<br></br> TO US<br></br>
                THAN GREAT<br></br> FOOD
                </p>

                <div className="right">
                        <div className="text" >
                                <h1>OUR FOOD PROMISE</h1>
                                <p>
                                Throughout each day, our trained cooks freshly<br></br> prepare fried chicken using the Colonel’s Secret<br></br> Recipe of 11 herbs & spices. It takes more than 25<br></br> minutes to hand bread and cook our chicken<br></br> before it’s ready for your bucket or boxed meal.<br></br> That’s why KFC has the world’s best chicken.
                                </p>

                        </div>
                </div>
                <div className="resp-img">
                            <img src="https://placehold.jp/dd3813/eeeeee/239x311.png" className='img-fluid' alt="chicken caption" />
                        </div>
            </div> */}

<div className="container-fluid p-0 Begining-Container">
    <Header title = "Company Responsibility"/>
           <div className="row g-0 m-0">
                <div className="col-md-4 Header-Container Header-Container-resp">
                    <h1 className="text-uppercase header header-resp">there is more to</h1>
                    <h1 className="text-uppercase header header-resp">us</h1>
                    <h1 className="text-uppercase header header-resp">than great food</h1>
                </div>


                <div className="col-md-8 position-relative d-flex justify-content-canter">
                    <div className="hero hero-resp">
                        <img src={Colonel} alt="chicken caption" className="position-absolute first-img first-img-resp" />
                        <img src={AboutStory} alt="chicken caption" className="position-absolute second-img-resp"/>
                        <div className="info info-resp">
                            <h1>OUR FOOD PROMISE</h1>
                            <p>Throughout each day, our trained cooks freshly prepare fried chicken using the Colonel’s Secret Recipe of 11 herbs & spices. It takes more than 25 minutes to hand bread and cook our chicken before it’s ready for your bucket or boxed meal. That’s why KFC has the world’s best chicken.</p>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </>

    )
}
export default Responsibility;