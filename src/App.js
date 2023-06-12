import './App.css';
import Cardproducts from './componants/Cardproducts';
import About from './componants/About';
import { Outlet } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();
  const search = () => {
    navigate("/search")
  }
  
 

const mybag = () => {
  navigate("/mybag")
}
  return (

    <div>
    
      
      <AiOutlineSearch onClick={search} />
      <BsFillBagHeartFill onClick={mybag}/>
      <Outlet />
      

    </div>

  );

}

export default App;
