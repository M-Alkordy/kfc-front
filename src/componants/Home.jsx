import Cardproducts from './Cardproducts';
import About from './About';
function Home () {
    const titleoffers = "Special Offers";
    const data = [
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
        
      ];
    return (
        <>
        <Cardproducts data={data} titlehead={titleoffers} />
        <About />
        </>
        
    )
}
export default Home;