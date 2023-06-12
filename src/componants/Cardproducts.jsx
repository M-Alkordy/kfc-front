import '../assest/style/Cardstyle.css';
import { Container } from 'react-bootstrap';
import { GoStar } from "react-icons/go";
import { BsPlus } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import imgcard from '../assest/images/kfc-new12pcTenders 1.jpg';
function Cards({ data, titlehead }) {


  return (

    <div className='cards row mt-5 w-100 m-auto gab-5 p-5'>

      <h1 className='col-12 ps-5'>{titlehead}</h1>

      {data.map(data =>
        <div className='cardcom row col-lg-3 col-md-6 col-sm-12 mt5 Container '>

            <img src={imgcard} className='cardimg col-lg-12' />
          

          <div className='carddown row col-12 gab-1 Container'>


            <h2 className='title col-12'>{data.title}</h2>
            <div className='detils row'>
              <ul className='row col-6 '>

                <li className='col-12 '>
                  <GoStar />
                  <GoStar />
                  <GoStar />
                  <GoStar />
                  <GoStar className='gray'/>
                </li>
                <li className='col-12 '>Pieces: <span className='ms-2'>5</span></li>
                <li className='col-12 Calories'>Calories:<span className='ms-1'>15</span></li>
              </ul>
              <div className="quantity col-6">
                <BsPlus className='plus' />
                <span >3</span>
                <AiOutlineMinus className='plus' />
              </div>



            </div>


            <div className="btns col-12 ">
              <button className='btncard '>
                Buy Now
              </button>
              <span className='price'>25 $</span>
            </div>
            <div className='red col-12 d-flex'>
                <span></span>
                <span></span>
                <span></span>
            </div>



          </div>
        </div>
      )
      }

    </div>

  )
}

export default Cards;