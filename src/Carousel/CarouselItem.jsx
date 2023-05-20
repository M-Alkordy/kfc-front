import "./CarouselItem.css"

const CarouselItem = (props) => {
  return (
    <div className="carousel-item" data-id={props.id}>
       <div className="left-section">
        
       <h1 className="title">{props.title}</h1>
        <h6 className="desc">{props.description}</h6>
        <a href="#dfsd" className="my-btn">Order Now</a>
       </div>
       <div className="right-section ">
        
       <img className="carousel-img" src={props.img} alt="food caoption" />
       </div>
    </div>
  )
}

export default CarouselItem;