import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";



const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState('');
    console.log(location);

    setTimeout(() => {
        setLoginError('');
    }, 5000);


    const handleLogin = event => {
        event.preventDefault();

        const form = new FormData(event.currentTarget);
        const email = form.get('email');
        const password = form.get('password');


        signIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Logged In Successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                if (error.code === "auth/invalid-login-credentials") {
                    setLoginError("Email/Password is not valid");
                }
                else {
                    console.log(error.message);
                }
            });

    }

    return (
        <div className="hero min-h-screen bg-base-50">
            <div className="hero-content p-12 w-full flex-col lg:flex-row-reverse">
                <div className="text-center p-8 lg:text-left">
                    <img src="https://i.ibb.co/kJ4Jjzm/zero-dollar-bites-logo.png" alt="" />
                    <h1 className="text-3xl font-bold">Please Login</h1>
                    <p className="py-6 text-xl">
                    "Join us in making a meaningful impact on the lives of those facing food insecurity. We believe in the power of community and compassion. By contributing your surplus or unneeded food items, you not only prevent waste but also provide nourishment to individuals and families who may not have access to essential meals. Together, we can create a world where zero-dollar bites become a reality, where no one has to go hungry. Your food donations are a lifeline for those in need, a symbol of hope, and a powerful testament to the generosity of our shared humanity. Make a difference today – donate food and be a part of this noble cause."

                    </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered rounded-md" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered rounded-md" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        {loginError && (
                            <p className="text-red-500">{loginError}</p>
                        )}
                        <div className="form-control mt-6">
                            <button className="btn btn-outline rounded-md">Login</button>
                        </div>
                    </form>
                    <p className="text-center text-black mb-4">Do not have an account? <Link className="font-semibold text-purple-700 " to={"/register"}>Register</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;