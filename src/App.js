import './App.css';
import Cardproducts from './componants/Cardproducts';
import About from './componants/About';
import { Outlet } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();
  const search = () => {
    navigate("/search")
  }
  const titleoffers = "Special Offers";
  const offers = [
    {
      title: "Mac & Cheese Bowl",
    },
    {
      title: "Mac & Cheese Bowl",
    },
    {
      title: "Mac & Cheese Bowl",
    },
    {
      title: "Mac & Cheese Bowl",
    }
  ];


  return (

    <div>
    
      <Outlet />
      <AiOutlineSearch onClick={search} />
      <Cardproducts data={offers} titlehead={titleoffers} />
      <About />

    </div>

  );

}

export default App;
