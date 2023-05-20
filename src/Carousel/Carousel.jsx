import CarouselItem from './CarouselItem'
import { CarouselData} from './CarouselData'
import "./Carousel.css"
import { useState } from 'react'

const Carousel = () => {
  const [activeIndex , setactiveIndex] = useState(0);
  
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = CarouselData.length -1;
        } else if (newIndex >= CarouselData.length){
            newIndex = 0;
        }
        setactiveIndex(newIndex);
      }
    
    const sliders = CarouselData.map((slider,index) =>{
        return (<CarouselItem key={index} title = {slider.title} description = {slider.description} img = {slider.img}/>)
    })

  return (
    <div className="carousel">
        <div className="carousel-content" style={{transform : `translateY(-${activeIndex * 25}%)`}}>
        {sliders}
        </div>
        <button className='up' onClick={() =>{updateIndex(activeIndex + 1)}}>
          <i className="fa-solid fa-arrow-up"></i>
      </button>
      <button className='down' onClick={() =>{updateIndex(activeIndex - 1)}}>
          <i className="fa-solid fa-arrow-down"></i>
      </button>
    </div>
  )
}

export default Carousel;