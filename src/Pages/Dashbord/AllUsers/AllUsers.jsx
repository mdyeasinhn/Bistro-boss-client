import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    });
    const handleDeleteUser = user =>{

    }
    return (
        <div>

            <div className="flex justify-evenly">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users : {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead className="bg-gray-200 ">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr  key={user._id}>
                                <th>{index  + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                <button onClick={() => handleDelete(user)} className="btn bg-orange-500 btn-lg">
                                        <FaUsers className="text-white " />
                                    </button>
                                </td>
                                <td>
                                <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600" />
                                    </button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;