import "./AddtionFood.css"
function AddtionFood(props) {
    return (
      <div className="addtion-card" >
        <div className="add-sauces">
            <h2>Sauce</h2>
            <div className="parent">
            <div className="sauce">
             <img src={props.imageSauce} alt=""/>
             <p>{props.titleSauce}</p>
             <input type="checkbox"/>
             </div>           
            <div className="sauce">
             <img src={props.imageSauce1} alt=""/>
             <p>{props.titleSauce1}</p>
             <input type="checkbox"/>
             </div>           
            <div className="sauce">
             <img src={props.imageSauce2} alt=""/>
             <p>{props.titleSauce2}</p>
             <input type="checkbox"/>
             </div>           
            <div className="sauce">
             <img src={props.imageSauce3} alt=""/>
             <p>{props.titleSauce3}</p>
             <input type="checkbox"/>
             </div>           
            <div className="sauce">
             <img src={props.imageSauce4} alt=""/>
             <p>{props.titleSauce4}</p>
             <input type="checkbox"/>
             </div>           
            <div className="sauce">
             <img src={props.imageSauce5} alt=""/>
             <p>{props.titleSauce5}</p>
             <input type="checkbox"/>
             </div>   
             </div>        

               
        
        </div>
        <div className="add-Choice">
            <h2>Side Choice</h2>
            <div className="parent">
            <div className="Choice">
                <img src={props.imageChoice1} alt=""/>
                <p>{props.titleChoice1}</p>
                <input type="checkbox"/>
            </div>
            <div className="Choice">
                <img src={props.imageChoice2} alt=""/>
                <p>{props.titleChoice2}</p>
                <input type="checkbox"/>
            </div>
            <div className="Choice">
                <img src={props.imageChoice3} alt=""/>
                <p>{props.titleChoice3}</p>
                <input type="checkbox"/>
            </div>
            <div className="Choice">
                <img src={props.imageChoice4} alt=""/>
                <p>{props.titleChoice4}</p>
                <input type="checkbox"/>
            </div>
            <div className="Choice">
                <img src={props.imageChoice5} alt=""/>
                <p>{props.titleChoice5}</p>
                <input type="checkbox"/>
            </div>
            <div className="Choice">
                <img src={props.imageChoice6} alt=""/>
                <p>{props.titleChoice6}</p>
                <input type="checkbox"/>
            </div>
            </div>
        </div>
        <div className="add-Beverage">
            <h2>Beverage  Choice</h2>
            <div className="parent">
            <div className="Beverage">
                <img src={props.imageBeverage1} alt=""/>
                <p>{props.titleBeverage1}</p>
                <input type="checkbox"/>
            </div>
            <div className="Beverage">
                <img src={props.imageBeverage2} alt=""/>
                <p>{props.titleBeverage2}</p>
                <input type="checkbox"/>
            </div>
            <div className="Beverage">
                <img src={props.imageBeverage3} alt=""/>
                <p>{props.titleBeverage3}</p>
                <input type="checkbox"/>
            </div>
            <div className="Beverage">
                <img src={props.imageBeverage4} alt=""/>
                <p>{props.titleBeverage4}</p>
                <input type="checkbox"/>
            </div>
            <div className="Beverage">
                <img src={props.imageBeverage5} alt=""/>
                <p>{props.titleBeverage5}</p>
                <input type="checkbox"/>
            </div>
            <div className="Beverage">
                <img src={props.imageBeverage6} alt=""/>
                <p>{props.titleBeverage6}</p>
                <input type="checkbox"/>
            </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default AddtionFood;