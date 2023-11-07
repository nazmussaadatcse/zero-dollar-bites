import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../AuthProvider';


const SocialLogin = () => {

    const {handleGoogleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleLogIn = ()=>{
        handleGoogleSignIn()
        .then(result=>{
            const user = result.user;
            console.log(user);
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Logged In Successfully!',
                showConfirmButton: false,
                timer: 1500
              })
            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
            console.log(error.message);
        })
    }


    return (
        <div>
            <div className="flex justify-center">
                <div className=" text-center p-2 m-2">
                    <hr/>
                <p className="font-semibold text-green-700">Login with Google</p>
            <button onClick={handleGoogleLogIn} className="rounded-full text-2xl shadow-md text-purple-900 hover:bg-green-700 hover:rounded-full p-2"><FaGoogle></FaGoogle></button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;