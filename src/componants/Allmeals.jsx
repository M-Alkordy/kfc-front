import Cardproducts from './Cardproducts';
import kfcface from '../assest/images/Rectangle 246.jpg';
import '../assest/style/allproducts.css';
import les from '../assest/images/Les-W5-22-AllinOne-websitebanner-1536x481-01 (1) 1.jpg';
import taste from '../assest/images/KFC-W3-22-Taste-Gaurentee-Website-Banner-1536x481-02 (1) 1.jpg';
import { IoIosArrowForward } from 'react-icons/io';
function Allmeals({data}) {
    const titlecombos = "Combos";
    const titlenuggets = "Nuggets";
    const titlesandwiches = "Sandwiches";
    const titleoffers = "Special Offers";
    const sides = [
        {
            title: "12 PC Tenders",
        },
        {
            title: "12 PC Tenders",
        },
        {
            title: "12 PC Tenders",
        },
        {
            title: "12 PC Tenders",
        },
       
    ]
    return (
        <div className='w-100 all'>
            <div className='face'>
            <img className='w-100' src={kfcface}/>
            <ul>
                <li>All Meals</li>
                <li>KFC</li>
            </ul>
            </div>
            
            <ul className='filter mt-4'>
                <li className='select'>Special Offers</li>
                <li>Combos</li>
                <li>Nuggets</li>
                <li>Sandwiches</li>
                <li>Tenders</li>
                <li>Bowls & Pot Pies</li>
                <li><IoIosArrowForward /></li>
            </ul>
            <div>
                <Cardproducts data={sides} titlehead={titleoffers} />
                <Cardproducts data={sides} titlehead={titlecombos} />
                <Cardproducts data={sides} titlehead={titlenuggets} />
                <Cardproducts data={sides} titlehead={titlesandwiches} />
            </div>
            
            <img className='w-100 mt-5' src={les}/>
            <img className='w-100' src={taste}/>
        </div>


    )
}

export default Allmeals;