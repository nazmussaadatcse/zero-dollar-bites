import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



const Banner = () => {

    const [delivered, setDelivered] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/delivered`)
            .then((res) => res.json())
            .then((data) => {
                setDelivered(data);
                console.log(data);
            });
    }, []);

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/6s2xq35/food-donate-1.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Zero Dollar Bites</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link to={'/availablefoods'}>
                        <button className="btn btn-outline text-white">Donate Now</button>
                    </Link>
                    <h2 className="text-xl m-4 font-bold">Total Donated : {delivered.length}</h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;