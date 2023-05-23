import img from '../assest/images/images.jfif';
import '../assest/style/Cardstyle.css';
import { Container } from 'react-bootstrap';
import { GoStar } from "react-icons/go";


function Cards ({data , titlehead}) {

    
    return(
        
        <div className='cards row mt-5 w-100 m-auto gab-5 p-5'>
            
            <h1 className='col-12 ps-5'>{titlehead}</h1>
               
                {   data.map(data =>
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
                            <li className='col-6 rate '>5.0</li>
                            <li className='col-6 '>Pieces: <span className='ms-2'>5</span></li>
                            <li className='col-6 Calories'>Calories:<span className='ms-1'>15</span></li>
                          </ul>
                          
                          <button className='btncard col-6 mx-2'>
                            {data.price}$$
                          </button>
                          <button className='btncard col-6 mx-2'>
                            Buy Now
                          </button>
                          
                          
                        </div>
                      </div>
                )
                }

        </div>
        
    )
}

export default Cards;