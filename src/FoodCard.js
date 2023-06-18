import './FoodCard.css';
import cardLogo from "./assets/img/Food.png";
import calories from "./assets/img/clories.svg";
import minus from "./assets/img/min.svg";
import plus from "./assets/img/plus.svg";
import arrow from "./assets/img/arrow.svg";

function FoodCard() {
    return (
      <div className="food-card">
        <h1 className='heading-food'>8 PC. CHICKEN ONLY </h1>
        <div className='bg-card'>
            <div className='first-card'>
                <img  className = "logo-card"src={cardLogo} alt=''/>   
                <div className='clalories-sction'>
                <img src={calories} alt='' className='calories'/>
                <span >calories</span>
                <span>1200 </span>
            </div>
            <div className='section-number'>
                <h2>Quantity</h2>
                <div className='number'>
                    <a href='#'><img src={minus} alt=''/></a>
                    <span>1</span>
                    <a href='#'><img src={plus} alt=''/></a>
                </div>
            </div>
            </div>
            
            
            <div className='second'>
                <p>Limit 1 per Order. Price may be<br></br> higher in restaurant during<br></br> promotion....<a href='#'>Read more <img src={arrow}alt=''/></a></p>
                <div className='menu-card'>
                    <h2>Extra</h2>
                    <div className='menu-list'>
                        <ul>
                            <li>Dipping Sauce </li>
                            <li>Dipping Sauce</li>
                            <li>Side choice</li>
                            <li>Beverage  Choice</li>
                        </ul>
                        <ul>
                             <li>Buffalo Ranch</li>
                             <li>KFC Sauce</li>
                             <li>Secret Recipe Fries</li>
                             <li>Starry</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='price-section'>
            <div className='price-text'>
                <h2>Total Price</h2>
                <h2>120 $</h2>
            </div>
            <button className='add-card'>Add to Bag</button>
        </div>
        </div>
       
      </div>
    );
  }
  
  export default FoodCard;