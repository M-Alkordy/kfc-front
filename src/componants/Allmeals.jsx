import Cardproducts from './Cardproducts';
import kfcface from '../assest/images/Rectangle 246.jpg';
import '../assest/style/allproducts.css';
import les from '../assest/images/Les-W5-22-AllinOne-websitebanner-1536x481-01 (1) 1.jpg';
import taste from '../assest/images/KFC-W3-22-Taste-Gaurentee-Website-Banner-1536x481-02 (1) 1.jpg';
import { IoIosArrowForward } from 'react-icons/io';
import { useState } from 'react';
function Allmeals() {
    const meals = [
        "Special Offers",
        "Combos",
        "Nuggets",
        "Sandwiches",
        
    ] ;
    const [newmeals , setNewmeals] = useState(meals);
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
    const mealsfilter = (event) =>{
        
            const Newmeals  = meals.filter(meal => meal === event.target.innerHTML);
            setNewmeals(Newmeals);
    
      
    }
    
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
                <li onClick={(event)=> mealsfilter(event)} >Special Offers</li>
                <li onClick={(event)=> mealsfilter(event)} >Combos</li>
                <li onClick={(event)=> mealsfilter(event)}>Nuggets</li>
                <li onClick={(event)=> mealsfilter(event)}>Sandwiches</li>
                <li onClick={(event)=> mealsfilter(event)}>Tenders</li>
                <li onClick={(event)=> mealsfilter(event)}>Bowls & Pot Pies</li>
                <li><IoIosArrowForward /></li>
            </ul>
            <div >
                {
                    newmeals.map(meal =>
                    <Cardproducts data={sides} titlehead={meal} />
                    )
                }
                
            </div>
            
            <img className='w-100 mt-5' src={les}/>
            <img className='w-100' src={taste}/>
        </div>


    )
}

export default Allmeals;