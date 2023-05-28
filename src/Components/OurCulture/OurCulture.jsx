import "./OurCulture.css"
import woman from "./../../assests/ourculture.png"
import CultureCarousel from "./CultureCarousel/CultureCarousel"
import Header from "../Header/Header"
const OurCulture = () => {
  return (
    <section className='Culture container-fluid p-0'>
      <Header title = "our culture"/>
        <div className="Culture-info">
                <h2>WE DON’T HIRE JUST COOKS OR CASHIERS, WE HIRE FUTURE LEADERS. RESTAURANT JOBS PROVIDE THE TRAINING AND TOOLS PEOPLE NEED TO SUCCEED. WE’RE CONSTANTLY MOVING EMPLOYEES UP THE LADDER</h2>
                <p>Amy, Assistant Manager, Junction City, KS</p>
            </div>
            <div className="img-culture">
                <img src={woman} alt="" />
            </div>

            <CultureCarousel/>
    </section>
  )
}

export default OurCulture