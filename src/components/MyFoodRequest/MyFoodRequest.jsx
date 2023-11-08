import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";



const MyFoodRequest = () => {

    const [foods, setFoods] = useState([]);
    const { user } = useContext(AuthContext);
    const email = user?.email;


    useEffect(() => {
        fetch(`http://localhost:5000/requested`)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                data.sort((a, b) => b.quantity - a.quantity);
                const filteredData = data.filter((item) => email === item.requesterEmail);

                console.log(filteredData);
                setFoods(filteredData);
            })
    }, [email]);

    const handleCancel = (id) => {
        // console.log('handleDelete', id);
        const email = user.email;

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, cancel it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/requested/${id}?email=${email}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // console.log('deleted successfully');
                            const remainingFood = foods.filter(food => food._id !== id);
                            setFoods(remainingFood);
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Cancelled successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            // console.log(foods);
                        }
                    })
            }
        })

    }

    return (

        <div className="border border-gray-200">
            <h2 className="uppercase flex justify-center items-center p-2 m-2 mt-4 font-bold text-2xl gap-2 text-purple-700">My Food Request : {foods.length}</h2>
          
            
            {
                foods.map((food, index) => <div key={food._id} className="block md:flex p-2 bg-slate-200 m-2 gap-2">
                    <p className="flex justify-center items-center text-center bg-slate-50 p-1 text-blue-800 text-xs font-bold">Item {index + 1}</p>
                    <div className="md:w-1/2 rounded-lg">
                        <p className="text-purple-700 gap-1"><span className="font-bold">Donar Name:</span> {food?.requested.donatorName}</p>
                        <p className="text-purple-700 gap-1"><span className="font-bold">Pickup Location:</span> {food?.requested.pickup_location}</p>
                        <p className="text-purple-700 gap-1"><span className="font-bold">Expire Date:</span> {food?.requested.expiry_date}</p>
                    </div>
                    <div className="md:w-1/2 rounded-lg">
                        <p className="text-purple-700 gap-1"><span className="font-bold">Your Donation Amount:</span> ${food?.donation_money}</p>
                        <p className="text-purple-700 gap-1"><span className="font-bold">Status:</span> {food?.requested.foodStatus}</p>
                        <p className="text-purple-700 gap-1"><span className="font-bold">Request Date:</span> {food?.request_date}</p>
                    </div>
                    <button onClick={() => handleCancel(food._id)} className=" btn btn-xs mt-6 btn-outline rounded-md">
                        cancel request
                    </button>
                </div>)
            }
        </div>
    );
};

export default MyFoodRequest;