import "./StepCard.css";



const StepCards = (props) => {
  return (
    <>

<div className="About-carousel-item">
      <div className="d-flex my-card">
      <div className="card-info">
          <h3>{props.step}</h3>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
        <div className="img-card">
          <img src={props.img} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default StepCards