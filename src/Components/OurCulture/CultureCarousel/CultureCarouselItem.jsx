

const CultureCarouselItem = (props) => {
  return (
    <div className="culture-carousel-item">
      <div className="d-flex gap-1 align-items-center my-card">
        <img src={props.img} alt="" />
        <h1>{props.title}</h1>
      </div>
      <div className="description mt-3">
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default CultureCarouselItem