import "./OurCulture.css"
import { images } from "../../assests/images"
import CultureCarousel from "./CultureCarousel/CultureCarousel"
const OurCulture = () => {
  return (
    <section className='Culture container'>
        <div className="Culture-info">
                <h2>WE DON’T HIRE JUST COOKS OR CASHIERS, WE HIRE FUTURE LEADERS. RESTAURANT JOBS PROVIDE THE TRAINING AND TOOLS PEOPLE NEED TO SUCCEED. WE’RE CONSTANTLY MOVING EMPLOYEES UP THE LADDER</h2>
                <p>Amy, Assistant Manager, Junction City, KS</p>
            </div>
            <div className="img-culture">
                <img src={images[5].url} alt="" />
            </div>
      <h1 className="mt-5 fw-bold">culture value</h1>
            <CultureCarousel/>
    </section>
  )
}

export default OurCulture