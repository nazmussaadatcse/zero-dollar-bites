import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import moment from "moment";


const AllProducts = () => {

    const [foods, setFoods] = useState([]);
    const [searchFood, setSearchFood] = useState("");
    const [searchedFoods, setSearchedFoods] = useState([]);
    const [isSorting, setIsSorting] = useState(false);



    useEffect(() => {
        fetch(`http://localhost:5000/food`)
            .then(res => res.json())
            .then(data => {
                // Sort the data by expiry date here
                const sortedData = data.sort((a, b) => {
                    const dateA = moment(a.expiry_date, "MM/DD/YYYY");
                    const dateB = moment(b.expiry_date, "MM/DD/YYYY");
                    return dateA.isBefore(dateB) ? -1 : 1;
                });
                setFoods(sortedData);
                setSearchedFoods(sortedData);
            });
    }, []);

    // search 
    const handleSearch = () => {
        const query = searchFood.toLowerCase();
        if (query === "") {
            setSearchedFoods(foods);
        } else {
            const filteredResults = foods.filter((food) =>
                food.name.toLowerCase().includes(query)
            );
            setSearchedFoods(filteredResults);
        }
    };


    const sortFoodsByExpiry = () => {
        const sortedFoods = [...searchedFoods];
        sortedFoods.sort((a, b) => {
            const dateA = moment(a.expiry_date, "MM/DD/YYYY");
            const dateB = moment(b.expiry_date, "MM/DD/YYYY");
            const num = dateA.isBefore(dateB) ? -1 : 1;

            // Toggle the sorting order
            if (isSorting) {
                return num;
            } else {
                return -num;
            }
        });

        // Toggle state
        setIsSorting(!isSorting);
        setSearchedFoods(sortedFoods);
    };




    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-center">
                <input
                    type="text"
                    placeholder="Search by food name"
                    value={searchFood}
                    onChange={(e) => setSearchFood(e.target.value)}
                    className="border border-purple-200 w-full sm:w-1/2 rounded-md p-2 mb-2 sm:mb-0 sm:mr-2"
                />

                <button
                    onClick={handleSearch}
                    className="btn hover:bg-purple-700 bg-purple-700 text-white rounded-md px-3 py-1 mb-2 sm:mb-0"
                >
                    Search
                </button>

                <button
                    onClick={sortFoodsByExpiry}
                    className="btn hover:bg-purple-700 bg-purple-700 text-white rounded-md px-3 py-1"
                >
                    Sort by Expiry
                </button>
            </div>


            <div>
                <Helmet>
                    <title>ZDB | Available Food</title>
                </Helmet>
            </div>
            <h2 className='uppercase flex justify-center p-4 my-4 font-bold text-xl text-purple-700'>
                All Available Food
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {searchedFoods.map(food => (
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
                                {/* for example food expiry_date : 12/21/2023 */}
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
