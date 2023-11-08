import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



const Banner = () => {

    const [delivered, setDelivered] = useState([]);

    useEffect(() => {
        fetch(`https://zero-dollar-bites-server.vercel.app/delivered`)
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
                    <h1 className="mb-5 text-5xl font-bold text-green-600">Zero Dollar Bites</h1>
                    <p className="mb-5 text-xl font-semibold">"Donate now and help those in need access food at no cost. Don't let good food go to waste. Your food donation can make a difference in someone's life."</p>
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