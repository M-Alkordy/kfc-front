import AddtionFood from './AddtionFood';
import './App.css';
import FoodCard from './FoodCard';
import sauceImage1 from "./assets/img/kfc-IndGravy1.png";
import sauceImage2 from"./assets/img/kfc-IndGravy1.png";
import sauceImage3 from"./assets/img/kfc-IndGravy 1-1.png";
import sauceImage4 from"./assets/img/kfc-IndGravy 1-2.png";
import sauceImage5 from"./assets/img/kfc-IndGravy 1-3.png";
import sauceImage6 from"./assets/img/kfc-IndGravy 19.png";
import choiceImage1 from "./assets/img/kfc-IndGravy 1(1).png";
import choiceImage2 from "./assets/img/kfc-IndGravy 1-4.png";
import choiceImage3 from "./assets/img/kfc-IndGravy 1-5.png";
import choiceImage4 from "./assets/img/kfc-IndGravy 1-6.png";
import choiceImage5 from "./assets/img/kfc-IndGravy 1-7.png";
import choiceImage6 from "./assets/img/kfc-IndGravy 1.png";
import BeverageImage1 from "./assets/img/kfc-IndGravy 1-8.png";
import BeverageImage2 from "./assets/img/kfc-IndGravy 1-9.png";
import BeverageImage3 from "./assets/img/kfc-IndGravy 1-10.png";
import BeverageImage4 from "./assets/img/kfc-IndGravy 1-11.png";
import BeverageImage5 from "./assets/img/kfc-IndGravy 1-12.png";
import BeverageImage6 from "./assets/img/kfc-IndGravy 13.png";


function App() {
  return (
    <div >
      <FoodCard />
      <AddtionFood
      imageSauce={sauceImage1}
      titleSauce="Buffalo Ranch"
  
      imageSauce1={sauceImage2}
      titleSauce1="KFC Sauce "

      imageSauce2={sauceImage3}
      titleSauce2="Honey BBQ"
  
      imageSauce3={sauceImage4}
      titleSauce3="Classic Ranch"
   
      imageSauce4={sauceImage5}
      titleSauce4="Honey  Mustered"
 
      imageSauce5={sauceImage6}
      titleSauce5="No Sauce"
      imageChoice1={choiceImage1}
      imageChoice2={choiceImage2}
      imageChoice3={choiceImage3}
      imageChoice4={choiceImage4}
      imageChoice5={choiceImage5}
      imageChoice6={choiceImage6}
      titleChoice1="Secret Recipe Fries"
      titleChoice2="Mac & Cheese"
      titleChoice3="Mashed Potatoes"
      titleChoice4="Cole Slaw"
      titleChoice5="Sweet Corn"
      titleChoice6="Gravy"
      imageBeverage1={BeverageImage1}
      imageBeverage2={BeverageImage2}
      imageBeverage3={BeverageImage3}
      imageBeverage4={BeverageImage4}
      imageBeverage5={BeverageImage5}
      imageBeverage6={BeverageImage6}
      titleBeverage1="Secret Recipe Fries"
      titleBeverage2="Mac & Cheese"
      titleBeverage3="Mashed Potatoes"
      titleBeverage4="Cole Slaw"
      titleBeverage5="Sweet Corn"
      titleBeverage6="Gravy"
      >

        
     
      </AddtionFood>
      
    </div>
  );
}

export default App;
