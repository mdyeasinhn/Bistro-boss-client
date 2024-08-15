import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: "http://localhost:9000"
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();
    useEffect(() => {
        axiosSecure.interceptors.request.use(function (config) {
            const token = localStorage.getItem('access-token')
            // console.log('request stopped by interceptors', token);
            config.headers.Authorization = `Bearer ${token}`
            return config;
        }, function (error) {
            // do something with request error
            return Promise.reject(error)
        });

        axiosSecure.interceptors.response.use(function (response) {
            return response;
        }, async (error) => {
            const status = error.response.status;
            console.log('status error in the interceptors', status);
            if (status === 401 || status === 403) {
                await logOut();
                navigate('/login')

            }
            return Promise.reject(error)
        })
    }, [navigate, logOut])

    return axiosSecure;
};

export default useAxiosSecure;