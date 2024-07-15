import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(()=> {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems= data.filter(item => item.category === 'popular');
            setMenu(popularItems)
        })
    })
  
    return (
        <section>
            <SectionTitle
            subHeading="From Out Menu"
            heading="Popular Items"
            ></SectionTitle>
            


        </section>
    );
};

export default PopularMenu;