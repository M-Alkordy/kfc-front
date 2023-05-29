import '../assest/style/item.css';
import { FaPlusCircle , FaMinusCircle} from "react-icons/fa";
import close from '../assest/images/close.svg';
import closev from '../assest/images/close Vector.svg';
function Item({img , title , extensions , quantity , price}) {
   
    return(
        <div className='d-flex align-items-center items'>
            
                <div className="item ">
                <div className="itemimg row">
                    <img className='img' src={img} />
                    <span>{title}</span>
                </div>
                <div className="extensions ">
                        <ul>
                            {
                                extensions.map(ex =>
                                    <li>{ex}</li>
                                    )
                            }
                            
                        </ul>
                        <button>Edite</button>
                </div>
                <div className="quantity ">
                        <FaPlusCircle className='plus'/>
                        <span >{quantity}</span>
                        <FaMinusCircle className='plus' />
        
                </div>
                    <div className="price">
                        <span>{price} $</span>
                    </div>
            </div>
            <img className="close" src={close}/>
            <img className="closev" src={closev} />    
        </div>
            
    )
}
export default Item;