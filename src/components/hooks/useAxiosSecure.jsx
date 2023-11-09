import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();


    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('interceptor error:', error.response);
            if (error.response.status === 401) {
                logOut()
                    .then(() => {
                        navigate('/login')
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        })
    }, []);

    return axiosSecure;
};

export default useAxiosSecure;