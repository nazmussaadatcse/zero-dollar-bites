import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider";



const Register = () => {

    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [passwordError, setPasswordError] = useState('');

    setTimeout(() => {
        setPasswordError('');
    }, 5000);


    const handleRegister = event => {
        event.preventDefault();

        const form = new FormData(event.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const photo = form.get('photo');
        console.log(name, email, password, photo);

        // Perform password validation
        if (password.length < 6) {
            setPasswordError('must be 6 characters long.');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setPasswordError('required one capital letter.');
            return;
        }
        if (!/[!@#$%^&*]/.test(password)) {
            setPasswordError('at least one special character.');
            return;
        }
        setPasswordError('');


        createUser(email, password)
            .then(result => {
                console.log(result);

                // update profile and set name, photo
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })

                    .then(() => {
                        console.log('profile updated')
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Registered Successfully!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    })
                // returning to previous route 
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content p-12 flex-col lg:flex-row-reverse">
                <div className="text-center p-8 lg:text-left">
                    <img src="https://i.ibb.co/kJ4Jjzm/zero-dollar-bites-logo.png" alt="" />
                    <h1 className="text-3xl font-bold">Register now!</h1>
                    <p className="py-6 text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod blanditiis deserunt provident cumque et alias nisi. Deserunt nisi veritatis maiores natus a sed, porro voluptatum quo provident perferendis debitis assumenda?

                    </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered rounded-md" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered rounded-md" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered rounded-md" />
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
                        {passwordError && (
                            <p className="text-red-500 text-sm font-semibold">{passwordError}</p>
                        )}
                        <div className="form-control mt-6">
                            <button className="btn btn-outline rounded-md">Register</button>
                        </div>
                    </form>
                    <p className="text-center text-black mb-4">Already have an account? <Link className="font-semibold text-purple-700" to={"/login"}>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;