

import { useState , useEffect} from 'react'
import StepCards from './../StepCards/StepCards.jsx'
import {CarouselStepData} from "./CarouselAboutData.js"
import "./CarouselAbout.css"
const CarouselForSteps = () => {
  const myIndex = ["0","1","2","3","4"];

  const [activeIndex , setactiveIndex] = useState(myIndex[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      if(activeIndex === myIndex[0]) {
        console.log(myIndex[0]);
        setactiveIndex(myIndex[1])
      } else if(activeIndex === myIndex[1]) {
        console.log(myIndex[1]);
        setactiveIndex(myIndex[2])
      } else if(activeIndex === myIndex[2]) {
        console.log(myIndex[2]);
        setactiveIndex(myIndex[3])
      } else if(activeIndex === myIndex[3]) {
        console.log(myIndex[3]);
        setactiveIndex(myIndex[4])
      } else if(activeIndex === myIndex[4]) {
        console.log(myIndex[4]);
        setactiveIndex(myIndex[0])
      } 
    }, 5000);
  
    return () => {
      clearInterval(interval);
    };
  })
  


    const updateIndex = (e,newIndex) => {
      console.log(e.target.dataset.id);
      newIndex= e.target.dataset.id
        setactiveIndex(newIndex);
      }
      

    const stepCards = CarouselStepData.map((card,index) => {
      return (
        <StepCards key = {index} step = {card.step} title = {card.title} description = {card.description} img = {card.img}/>
      )
    })
    
  return (
    <>
      <div className="About-carousel">
      
        <div className="About-carousel-content " style={{transform : `translate(-${activeIndex * 20}%)`}}>
          {stepCards}
        </div>
    </div>  
        <div className="About-indicators">
              <button onClick={updateIndex} data-id="0"  className={`About-indicator-item ${activeIndex === "0"? "active" : ""}`}></button>
              <button onClick={updateIndex} data-id="1"  className={`About-indicator-item ${activeIndex === "1"? "active" : ""}`}></button>
              <button onClick={updateIndex} data-id="2"  className={`About-indicator-item ${activeIndex === "2"? "active" : ""}`}></button>
              <button onClick={updateIndex} data-id="3"  className={`About-indicator-item ${activeIndex === "3"? "active" : ""}`}></button>
              <button onClick={updateIndex} data-id="4"  className={`About-indicator-item ${activeIndex === "4"? "active" : ""}`}></button>
        </div>
    </>
  )
}

export default CarouselForSteps;