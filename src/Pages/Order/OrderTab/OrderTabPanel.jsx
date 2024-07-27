import FoodCard from "../../../Components/FoodCard/FoodCard";


const OrderTabPanel = ({item}) => {
    return (
        <div className="grid md:grid-cols-3 gap-8">
            {
                item.map(item => <FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTabPanel;