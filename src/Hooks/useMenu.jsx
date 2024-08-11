import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { c } from "vite/dist/node/types.d-aGj9QkWt";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
    const axiosPublic = useAxiosPublic();
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading ] = useState(true)
    // useEffect(() => {
    //     fetch('http://localhost:9000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data)
    //             setLoading(false);
            
    //         });
    // }, []);
    
    const {data : menu = [], isPending : loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn : async() =>{
            const res = await axiosPublic.get('/menu');
            return res.data
        }
    });
    return [menu, loading, refetch]


}
export default useMenu;