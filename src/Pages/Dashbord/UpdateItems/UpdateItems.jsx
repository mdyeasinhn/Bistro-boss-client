import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItems = () => {
    const {name, category, recipe, price, _id} = useLoaderData();
    // console.log();
    const { register, handleSubmit, reset } = useForm();
        const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            // 
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                reset();
                // show success popup
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `${data.name} is updated to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data);
    }
    return (
        <div>
            <SectionTitle heading='UPDATE ITEM' subHeading="Refresh info"/>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>


                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Recipe Name</span>

                        </div>
                        <input
                            {...register('name', { required: true })}
                            type="text"
                            defaultValue={name}
                            placeholder="Recipe Name"
                            className="input input-bordered w-full " />

                    </label>
                    <div className="flex gap-6">
                        {/* category */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select defaultValue={category} {...register('category', { required: true })}
                                className="select select-bordered w-full ">
                                <option disabled value='default'>Select a category  </option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="soup">Dessert</option>
                                <option value="drink">Drink</option>
                            </select>
                        </label>
                        {/* Price */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input
                                {...register('price', { required: true })}
                                type="number"
                                defaultValue={price}
                                placeholder="Price"
                                className="input input-bordered w-full " />

                        </label>
                    </div>
                    {/* recipe details */}
                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Recipe Details</span>
                            </div>
                            <textarea
                                className="textarea textarea-bordered h-24"
                                placeholder="Bio"
                                defaultValue={recipe}
                                {...register('recipe', { required: true })}
                            ></textarea>

                        </label>
                    </div>
                    <div className="form-control w-full my-6">
                        <input type="file"  {...register('image', { required: true })} />
                    </div>
                    <div>
                        <button className="btn bg-[#835D23] text-white hover:bg-[#af7c2f] w-[150px]">
                            Update Recipe details 
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItems;