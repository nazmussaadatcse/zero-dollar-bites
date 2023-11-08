import { AuthContext } from "../AuthProvider";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const ManageMyFood = () => {

    const { user } = useContext(AuthContext);
    const [foods, setFoods] = useState([]);
    console.log(user?.email);
    console.log(foods);

    useEffect(() => {
        fetch(`http://localhost:5000/food`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const filteredFoods = data.filter(food => food.email === user?.email);
                setFoods(filteredFoods);
            })
    }, [user]);

    const handelDelete = (id) => {
        console.log(id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/food/${id}`, {
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
                                title: 'Deleted successfully',
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
        <div>
            <h2>Manage My Food</h2>
            <div>
            {
                foods.map((food, index) => <div key={food._id} className="block md:flex p-2 bg-slate-200 m-2 gap-2">
                    <p className="flex justify-center items-center text-center bg-slate-50 p-1 text-blue-800 text-xs font-bold">Item {index + 1}</p>
                    <div className="md:w-1/2 rounded-lg">
                        <p className="text-purple-700 gap-1"><span className="font-bold">Name:</span> {food?.name}</p>
                        <p className="text-purple-700 gap-1"><span className="font-bold">Status:</span> {food?.foodStatus}</p>
                    </div>
                    <div className="md:w-1/2 rounded-lg">
                        <p className="text-purple-700 gap-1"><span className="font-bold">Quantity:</span> ${food?.quantity}</p>
                        <p className="text-purple-700 gap-1"><span className="font-bold">Expire on:</span> {food?.expiry_date}</p>
                    </div>
                    
                    
                    <Link to={"/manage/:id"}>
                    <button onClick={() => handelDelete(food._id)} className=" btn btn-xs mt-6 m-1 btn-outline rounded-md">
                        update
                    </button>
                    </Link>
                    <button onClick={() => handelDelete(food._id)} className=" btn btn-xs mt-6 m-1 btn-outline rounded-md">
                        manage
                    </button>
                    <Link to={"/update/:id"}>
                    <button onClick={() => handelDelete(food._id)} className=" btn btn-xs mt-6 m-1 btn-outline rounded-md">
                        manage
                    </button>
                    </Link>
                </div>)
            }
            </div>
        </div>
    );
};

export default ManageMyFood;