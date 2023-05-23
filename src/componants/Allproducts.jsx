import Cardproducts from './Cardproducts';
function Alllproducts() {
    const titlesides = "Sides And Add Ones";
    const titlesauces = "Sauces";
    const sides = [
        {
            title: "Buffalo Ranch",
        },
        {
            title: "Buffalo Ranch",
        },
        {
            title: "Buffalo Ranch",
        },
        {
            title: "Buffalo Ranch",
        },
        {
            title: "Buffalo Ranch",
        },
        {
            title: "Buffalo Ranch",
        },
        {
            title: "Buffalo Ranch",
        },
        {
            title: "Buffalo Ranch",
        },
    ]
    return (
        <div>
            <Cardproducts data={sides} titlehead={titlesides} />
            <Cardproducts data={sides} titlehead={titlesauces} />
        </div>


    )
}

export default Alllproducts;