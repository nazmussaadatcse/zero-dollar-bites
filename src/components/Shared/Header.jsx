import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import '../DarkMode/dark-mode.css'
import DarkModeToggleButton from "../DarkMode/DarkMode";
const Header = () => {
    // const [user, setuser] = useState(null);
    const { user, logOut } = useContext(AuthContext);
    // console.log(user?.displayName);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }



    const navLinks = <>
        <li className=" rounded-full"><NavLink to={"/"}>Home</NavLink></li>
        <li className=" rounded-full"><NavLink to={"/availablefoods"}>Available Foods</NavLink></li>
        <li className=" rounded-full"><NavLink to={"/addfood"}>Add Food</NavLink></li>
        <li className=" rounded-full"><NavLink to={"/managemyfood"}>Manage My Foods</NavLink></li>
        <li className=" rounded-full"><NavLink to={"/myfoodrequest"}>My Food Request</NavLink></li>
    </>
    return (


        <div className={`navbar gap mb-8 py-4 shadow-md bg-gray-100`}>
            <img className="lg:flex justify-center items-center w-20 md:w-32 " src="https://i.ibb.co/kJ4Jjzm/zero-dollar-bites-logo.png" alt="" />
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-xs bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center font-semibold hidden w-5xl lg:flex">
                <ul className="menu menu-horizontal ">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-1">
                <div className="flex justify-center md:text-sm w-auto items-center border rounded-full px-2">
                    <p className="font-semibold text-xs md:text-sm">
                        {user?.displayName ? user.displayName.slice(0, 10) : null}
                    </p>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-8 md:w-10 flex rounded-full">
                            <img alt="" src={user?.photoURL ? user.photoURL :'https://i.ibb.co/qsVdmDY/user-site-logo.png'} />
                        </div>
                    </label>
                </div>
                {
                    user ?
                        <button onClick={handleSignOut} className="btn rounded-md btn-sm bg-green-700 hover:bg-green-600  text-white">SignOut</button> :
                        <div className='flex justify-center items-center gap-2'>

                            <Link to={"/login"}>
                                <button className="btn bg-green-700 hover:bg-purple-950 rounded-md btn-sm text-white font-bold">Login</button>
                            </Link>

                        </div>

                }
            </div>
            <div>
            <DarkModeToggleButton></DarkModeToggleButton>          
            </div>
        </div>
    );
};

export default Header;