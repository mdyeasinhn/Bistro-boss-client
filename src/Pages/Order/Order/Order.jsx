import { useState } from "react";
import orderCoverImg from "../../../assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover/Cover";
import useMenu from '../../../Hooks/useMenu';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderTabPanel from "../OrderTab/OrderTabPanel";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
    const categories = ["salad", 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const drinks = menu.filter(item => item.category === "drinks");
    return (
        <div>
            <Helmet>
                <title>Bistro boss | Order Food</title>
            </Helmet>
            <Cover img={orderCoverImg} title="Order Food" />
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTabPanel item={salad} />
                </TabPanel>
                <TabPanel>
                    <OrderTabPanel item={pizza} />
                </TabPanel>
                <TabPanel>
                    <OrderTabPanel item={soup} />
                </TabPanel>
                <TabPanel>
                    <OrderTabPanel item={dessert} />
                </TabPanel>
                <TabPanel>
                    <OrderTabPanel item={drinks} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;