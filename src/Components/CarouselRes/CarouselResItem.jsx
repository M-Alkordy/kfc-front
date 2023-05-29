
const CarouselResItem = (props) => {
  return (
    <div className="Resp-carousel-item">
      <div className="my-card">
        <h1>{props.title}</h1>
      </div>
      <div className="description mt-3">
        <p>{props.descriptionFirst}</p>
        <p>{props.descriptionSecond}</p>
      </div>
    </div>
  )
}

export default CarouselResItem