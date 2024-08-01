import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const FoodCard = ({ item }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth();
    const [, refetch] = useCart();
    const handleAddToCart = () => {
        if (user && user.email) {
            //Todo : send card item to the database
    
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                price,
                image
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        toast.success(`${name} added to your cart`, {
                            style: {
                                border: '1px solid #713200',
                                padding: '16px',
                                color: '#713200',
                            },
                            iconTheme: {
                                primary: '#713200',
                                secondary: '#FFFAEE',
                            },
                        });
                        // refetch cart to update the  cart items count
                        refetch()
                    }

                })
        } else {
            Swal.fire({
                title: "You are not logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send the login page 
                    navigate('/login', { state: location?.pathname })
                }
            });
        }
    }
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure><img src={image} alt="Foods" /></figure>
            <p className='bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-2 rounded-md'>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={ handleAddToCart} className="btn btn-outline border-0 border-b-4 mt-4 text-black">Add To Card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;