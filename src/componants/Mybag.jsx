
import Item from './Item';
import '../assest/style/mybag.css';
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import foodbag1 from '../assest/images/food bag 1.svg';
import foodbag2 from '../assest/images/food bag 2.svg';
import foodbag3 from '../assest/images/food bag 3.svg';
import kfcface from '../assest/images/empty-bucket-835c4f452fae1420a288523f2c1ead2b 3.svg';
function Mybag() {
    
    const navigate = useNavigate()
    const exit = () => {
        navigate("/");
    }
    const items = [
        {
            img: foodbag1,
            title: "8 PC. TENDERS ONLY",
            extensions: [
                "Dipping sauce: KFC Sauce",
                "Dipping sauce: BUffalo Ranch",
                "Dipping sauce: Classic Ranch",
                "Dipping sauce: Honey BBQ",

            ],
            quantity: "2",
            price: "10.00",
        },
        {
            img: foodbag2,
            title: "12 PC. NUGGETS COMBO",
            extensions: [
                "Dipping sauce: KFC Sauce",
                "Dipping sauce: Classic Ranch ",
                "Side Choice: Mac & Cheese",
                "Beverage Choice: Starry",
            ],
            quantity: "2",
            price: "10.00",
        },
        {
            img: foodbag3,
            title: "8 PC. TENDERS ONLY",
            extensions: [
                "Dipping sauce: KFC Sauce",
                "Dipping sauce: Honey BBQ",
                "Side Choice : Mashed Potatoes",
                "Dipping sauce: KFC Sauce",
            ],
            quantity: "2",
            price: "10.00",
        },
        
    ]
    
    return (
        <div className="parent" >
            <div className="mybag">
                <h1>MY BAG</h1>
                <img className='kfcface' src={kfcface}/>
                <div className='cont'>
                
                    <IoIosArrowForward onClick={exit} className='arrow'/>
                    <div  className="slider " >
                        
                    
                        {
                            items.map((item) =>
                                <div  >
                                    <Item img={item.img} title={item.title} extensions={item.extensions} quantity={item.quantity} price={item.price} />
                                </div>
                                
                            )
                        }
                        
                    </div>
                    <div className='checkout'>
                            
                            <h2 className="num">3 items</h2>
                            
                            <div className='uls'>
                                <ul>
                                    <li className='num2'>Subtotal</li>
                                    <li className='num2'>Tax</li>
                                    <li className='num2'>Estmated total</li>
                                </ul>
                                <ul>
                                    <li>10.00<span>$</span></li>
                                    <li>0.95<span className='ms-4'>$</span></li>
                                    <li>10.59<span>$</span></li>
                                </ul>
                            </div>
                            <button>CHECK OUT</button>
                        </div>    
                </div>

            </div>

        </div>
    )
}
export default Mybag;