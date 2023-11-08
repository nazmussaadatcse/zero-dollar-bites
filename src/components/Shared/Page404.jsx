import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div className=" min-h-screen p-24" style={{ backgroundImage: 'url(https://i.ibb.co/tM54RDp/765.jpg)' }}>

            <Marquee pauseOnHover={true} speed={100}>
                <div className="text-center" >
                    <img className='w-96 h-56 mt-8 p-1' src={'https://i.ibb.co/tM54RDp/765.jpg'} alt={''} />
                    <h1 className="m-2 text-2xl bg-yellow-200 p-2 font-bold">404 NOT FOUND!</h1>

                    <Link to={'/'}>
                        <button className="btn btn-primary bg-red-600 text-white">back</button>
                    </Link>
                </div>
                <div className="text-center">
                    <img className='w-96 h-56 mt-8 p-1' src={'https://i.ibb.co/tM54RDp/765.jpg'} alt={''} />
                    <h1 className="m-2 text-2xl bg-yellow-200 p-2 font-bold">404 NOT FOUND!</h1>

                    <Link to={'/'}>
                        <button className="btn btn-primary bg-red-600 text-white">back</button>
                    </Link>
                </div>
                <div className="text-center">
                    <img className='w-96 h-56 mt-8 p-1' src={'https://i.ibb.co/tM54RDp/765.jpg'} alt={''} />
                    <h1 className="m-2 text-2xl bg-yellow-200 p-2 font-bold">404 NOT FOUND!</h1>

                    <Link to={'/'}>
                        <button className="btn btn-primary bg-red-600 text-white">back</button>
                    </Link>
                </div>
                <div className="text-center">
                    <img className='w-96 h-56 mt-8 p-1' src={'https://i.ibb.co/tM54RDp/765.jpg'} alt={''} />
                    <h1 className="m-2 text-2xl bg-yellow-200 p-2 font-bold">404 NOT FOUND!</h1>

                    <Link to={'/'}>
                        <button className="btn btn-primary bg-red-600 text-white">back</button>
                    </Link>
                </div>

            </Marquee>
        </div>
    );
};

export default Page404;