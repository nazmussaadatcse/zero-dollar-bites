import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AllProducts = () => {

    const [foods, setFoods] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/food`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setFoods(data)
            })
    }, []);


    return (
        <div>
            <h2 className='uppercase flex justify-center p-4 my-4 font-bold text-xl text-purple-700'>
                All Available Food
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {foods.map(food => (
                    <div key={food._id} className="border-purple-200 border rounded-lg m-1">
                        <div className="p-4 flex flex-col  justify-center items-left">
                            <img className="h-56 w-96 rounded-md" src={food?.photo} alt="" />

                            <div className="py-4 p-2 text-left w-full">
                                <p className="text-xl font-semibold text-gray-900">{food?.name}</p>

                            </div>
                            <div className="py-4 text-gray-900  p-2 text-left w-full">
                                <img className="w-16 h-16 bg-green-600 rounded-full border p-1" src={food?.donatorPhoto} alt="" />
                                <p><span className="font-semibold ">Donator:</span> {food?.donatorName}</p>
                                <p><span className="font-semibold ">Food Quantity:</span> {food?.quantity} person</p>
                                <p className=" font-semibold">Expiry Date:  {food?.expiry_date}</p>
                                <p><span className="font-semibold ">Pickup Location:</span> {food?.pickup_location}</p>
                                <p className="mt-4 font-semibold">Additional Notes: </p>
                                <p className="max-w-sm  text-gray-900">
                                    {food?.additional_notes?.length > 120
                                        ? food?.additional_notes.slice(0, 120) + "..."
                                        : food?.additional_notes}
                                </p>
                            </div>
                            <div className="py-4 text-left  w-full">
                                <Link to={`/food/${food?._id}`} className="btn btn-outline text-white btn-sm rounded-md bg-purple-900">
                                    Details
                                </Link>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllProducts;
