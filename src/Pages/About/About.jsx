import "./About.css"
// import { images } from "./../../assests/images"
import Header from "./../../Components/Header/Header"
import OurCulture from "./../../Components/OurCulture/OurCulture"
import CarouselAbout from "./../../Components/CarouselAbout/CarouselAbout"
import CarouselRes from "./../../Components/CarouselRes/CarouselRes"
import Responsibility from "./../../Components/Responsibility/Responsibility"
import Kentucky from "./../../Components/Kentucky/Kentucky"
import MainImg from "./../../assests/about-card.png" 
import Colonel from "./../../assests/Framed-Colonel.png" 
import AboutStory from "./../../assests/about-story-narrow.png" 
import AboutKfc from "./../../assests/aboutKfc.png" 
// import CultureCarousel from "./OurCulture/CultureCarousel/CultureCarousel"



const About = () => {

    // const stepCards = CarouselStepData.map((card,index) => {
    //   return (
    //     <StepCards key = {index} step = {card.step} title = {card.title} description = {card.description} img = {card.img}/>
    //   )
    // })

    
  return (
    <section className="Full-About-Page">
        <div className="container-fluid p-0">
            <div className="hero-img">
            <img src={MainImg} className="w-100 hero-img" alt="chicken caption" />
            <h1 className="hero-header">IF YOU LIKE FRIED CHICKEN,<br /> THIS IS WHY</h1>
            </div>
        </div>


        <div className="container-fluid p-0 About-Container">
            <Header title = "about KFC"/>
            <div className="row g-0 m-0 about">
                <div className="col-md-7 d-flex flex-column justify-content-center first-col">
                    <p className="my-p">We make fried chicken—heck, we practically invented it.<br />If they ever make a food hall of fame, our chicken is gonna be a first-ballot inductee.</p>
                    <p className="my-p">Lorem ipsum dolor sit amet. Et perferendis vero qui doloremque sint ea dolores odit sit consectetur velit ex dol</p>
                </div>
                <div className="col-md-5 my-img">
                    <img src={AboutKfc} className="w-100" alt="" />
                </div>
            </div>
 </div>

           <div className="container-fluid p-0 Begining-Container">
           <div className="row g-0 m-0">
                <div className="col-md-3 Header-Container">
                    <h1 className="text-uppercase header">the man,</h1>
                    <h1 className="text-uppercase header">the meth,</h1>
                    <h1 className="text-uppercase header">the legend</h1>
                </div>


                <div className="col-md-9 position-relative d-flex justify-content-canter">
                    <div className="hero">
                        <img src={Colonel} alt="chicken caption" className="position-absolute first-img" />
                        <img src={AboutStory} alt="chicken caption" className="position-absolute second-img"/>
                        <div className="info">
                            <h1>in the begining</h1>
                            <p>Lorem ipsum dolor sit amet. Et perferendis vero qui doloremque sint ea dolores odit sit consectetur velit ex doloremque omnis. Qui architecto maxime qui nulla eveni</p>
                        </div>
                    </div>
                </div>
            </div>
           </div>


       

        
            <section className="steps container-fluid p-0">
            <Header title = "How we make chicken"/>
           <div className="container-fluid p-0 mt-md-5">
           <CarouselAbout/>
           </div>
            </section>



           
           
           <OurCulture/>




          
          <Responsibility/>
           <h1 className="reponsability">100% Real Chicken</h1>
           <CarouselRes/>

        <Kentucky/>

    </section>
  )
}

export default About