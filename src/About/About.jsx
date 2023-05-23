import "./About.css"
import { images } from "../assests/images"
import Header from "./Header/Header"
import OurCulture from "./OurCulture/OurCulture"
import CarouselAbout from "./../CarouselAbout/CarouselAbout.jsx"
import CarouselRes from "./CarouselRes/CarouselRes"
import Responsibility from "./Responsibility/Responsibility"
import Kentucky from "./Kentucky/Kentucky"
// import CultureCarousel from "./OurCulture/CultureCarousel/CultureCarousel"



const About = () => {

    // const stepCards = CarouselStepData.map((card,index) => {
    //   return (
    //     <StepCards key = {index} step = {card.step} title = {card.title} description = {card.description} img = {card.img}/>
    //   )
    // })

    
  return (
    <>
        <div className="container-fluid p-0">
            <div className="hero-img">
            <img src={images[0].url} className="w-100 hero-img" alt="chicken caption" />
            <h1 className="hero-header">IF YOU LIKE FRIED CHICKEN,<br /> THIS IS WHY</h1>
            </div>
        </div>


        <div className="container">
            <Header title = "about KFC"/>


            <div className="row gy-5 about">
                <div className="col-md-6 d-flex flex-column justify-content-center first-col">
                    <p className="my-p">We make fried chicken—heck, we practically invented it.<br />If they ever make a food hall of fame, our chicken is gonna be a first-ballot inductee.</p>
                    <p className="my-p">Lorem ipsum dolor sit amet. Et perferendis vero qui doloremque sint ea dolores odit sit consectetur velit ex dol</p>
                </div>
                <div className="col-md-6 my-img">
                    <img src={images[1].url} className="w-100" alt="" />
                </div>
            </div>
 </div>

           <div className="container">
           <div className="row begin">
                <div className="col-md-4 d-flex flex-column  justify-content-center header-container">
                    <h1 className="text-uppercase header">the man,</h1>
                    <h1 className="text-uppercase header">the meth,</h1>
                    <h1 className="text-uppercase header">the legend</h1>
                </div>


                <div className="col-md-8 position-relative d-flex">
                    <div className="hero">
                        <img src={images[3].url} alt="chicken caption" className="position-absolute first-img" />
                        <img src={images[4].url} alt="chicken caption" className="position-absolute second-img"/>
                        <div className="info">
                            <h1>in the begining</h1>
                            <p>Lorem ipsum dolor sit amet. Et perferendis vero qui doloremque sint ea dolores odit sit consectetur velit ex doloremque omnis. Qui architecto maxime qui nulla eveni</p>
                        </div>
                    </div>
                </div>
            </div>
           </div>


       

        
            <section className="steps container-fluid">
            <Header title = "How we make chicken"/>
           <div className="container">
           <CarouselAbout/>
           </div>
            </section>



           <Header title = "our culture"/>
           
           <OurCulture/>



          <section className="Section-Resp mt-5">
          <Header title = "Company Responsibility"/>
            <div className="container pb-5">
          <Responsibility/>
           <h1 className="reponsability">100% Real Chicken</h1>
           <CarouselRes/>
           </div>
          </section>

        <Kentucky/>

    </>
  )
}

export default About