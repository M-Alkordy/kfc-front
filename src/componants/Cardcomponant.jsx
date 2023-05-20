import { Container } from 'react-bootstrap';
import '../assest/style/Cardstyle.css';
import { GoStar } from "react-icons/go";

function Cardcomponant({ data, img }) {

  return (
    

    <div className='cardcom row col-lg-3 col-md-6 col-sm-12 mt5 Container '>
      <div className='imgdiv col-lg-12'>
        {/* <img src={img} className='cardimg ' /> */}
      </div>
      
      <div className='carddown row col-12 gab-1 Container'>
      
        <h2 className='title col-12'>{data.title}</h2>
        <ul className='row col-12 '>
          
          <li className='col-6 '>
            <GoStar />
            <GoStar />
            <GoStar />
            <GoStar />
            <GoStar />  
          </li>
          <li className='col-6 rate '>{data.rate}</li>
          <li className='col-6 '>Pieces: <span className='ms-2'>{data.Pieces}</span></li>
          <li className='col-6 Calories'>Calories:<span className='ms-1'>{data.Calories}</span></li>
        </ul>
        
        <button className='btncard col-6 mx-2'>
          {data.price}$$
        </button>
        <button className='btncard col-6 mx-2'>
          Buy Now
        </button>
        
        
      </div>
    </div>

  );

}

export default Cardcomponant;