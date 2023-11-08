import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


const Manage = () => {

    const [foodReq, setFoodReq] = useState([]);
    const { user } = useContext(AuthContext);

    const [foods, setFoods] = useState([]);
    const productId = useParams();
    const id = productId.id;
    console.log(id);

    useEffect(() => {
        fetch(`http://localhost:5000/requested`)
            .then((res) => res.json())
            .then((data) => {
                // Filter the data array to find the product by _id
                const foundProduct = data.find((item) => item.requested._id === id);

                if (foundProduct) {
                    setFoods([foundProduct]);
                } else {
                    setFoods([]); // Product not found, set an empty array or handle it accordingly
                }
            });
    }, [id]);

    console.log(foods);

    // foods.map((item) => {
    //     // Destructure properties from 'item'
    //     const {
    //         additional_notes,
    //         donation_money,
    //         request_date,
    //         requesterEmail,
    //         requesterName,
    //         requesterPhoto,
    //     } = item;

    //     // Destructure properties from 'item.requested'
    //     const {
    //         name,
    //         quantity,
    //         photo,
    //         foodStatus,
    //         pickup_location,
    //         _id,
    //         // Add other properties from 'item.requested' you need here
    //     } = item.requested;

    //     // console.log("Additional Notes:", additional_notes);
    //     // console.log("Donation Money:", donation_money);
    //     // console.log("Request Date:", request_date);
    //     // console.log("Requester Email:", requesterEmail);
    //     // console.log("Requester Name:", requesterName);
    //     // console.log("Requester Photo:", requesterPhoto);

    //     // console.log("Name:", name);
    //     // console.log("Quantity:", quantity);
    //     // console.log("Photo:", photo);
    //     // console.log("Pickup Location:", pickup_location);
    //     // console.log("_id:", _id);

    //     // You can now use these destructured properties as needed
    // });

   

  
    const handleDeliver = (id)=>{
        console.log(id);

        fetch('http://localhost:5000/delivered', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(foods)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your Item has been added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    // Reset the form
                    // form.reset();
                }
            })
    }


    return (
        <div className="border border-gray-200">
            <h2 className="uppercase flex justify-center items-center p-2 m-2 mt-4 font-bold text-2xl gap-2 text-purple-700">Manage Food Request : {foods?.length}</h2>


            {
                foods.map((food, index) => <div key={food._id} className="block md:flex p-2 bg-slate-200 m-2 gap-2">
                    <p className="flex justify-center items-center text-center bg-slate-50 p-1 text-blue-800 text-xs font-bold">Item {index + 1}</p>
                    <div className="md:w-1/2 rounded-lg">
                        <img className="h-16 w-16 rounded-md" src={food?.requesterPhoto} alt="" />
                        <p className="text-purple-700 gap-1"><span className="font-bold">Requester Name:</span> {food?.requesterName}</p>
                        <p className="text-purple-700 gap-1"><span className="font-bold">Requester Email:</span> {food?.requesterEmail}</p>
                    </div>
                    <div className="md:w-1/2 rounded-lg">
                        <p className="text-purple-700 gap-1"><span className="font-bold">Status:</span> {food?.requested.foodStatus}</p>
                        <p className="text-purple-700 gap-1"><span className="font-bold">Request Date:</span> {food?.request_date}</p>
                    </div>
                    <button onClick={()=>handleDeliver(food._id)} className=" btn btn-xs mt-6 btn-outline rounded-md">
                        deliver
                    </button>
                </div>)
            }
        </div>
    );
};

export default Manage;