import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";


const Manage = () => {

    const { user } = useContext(AuthContext);

    const [foods, setFoods] = useState([]);
    const productId = useParams();
    const id = productId.id;
    console.log(id);
    const idP = id;

    useEffect(() => {
        fetch(`https://zero-dollar-bites-server.vercel.app/requested`, { credentials: 'include' })
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



    let additional_notes, donation_money, request_date, requesterEmail, requesterName, requesterPhoto;
    let name, quantity, photo, foodStatus, pickup_location, _id;

    foods.map((item) => {
        // Destructure properties from 'item'
        additional_notes = item.additional_notes;
        donation_money = item.donation_money;
        request_date = item.request_date;
        requesterEmail = item.requesterEmail;
        requesterName = item.requesterName;
        requesterPhoto = item.requesterPhoto;

        // Destructure properties from 'item.requested'
        name = item.requested.name;
        quantity = item.requested.quantity;
        photo = item.requested.photo;
        foodStatus = item.requested.foodStatus;
        pickup_location = item.requested.pickup_location;
        _id = item.requested._id;
        // Add other properties from 'item.requested' you need here
    });

    const newFood = {
        requester: {
            additional_notes,
            donation_money,
            request_date,
            requesterEmail,
            requesterName,
            requesterPhoto,
        },
        donator: {
            name,
            quantity,
            photo,
            foodStatus,
            pickup_location,
            _id,
            // Add other properties from 'item.requested' you need here
        },
    };

    const handleDeliver = (id) => {
        console.log(id);


        fetch('https://zero-dollar-bites-server.vercel.app/delivered', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFood),
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {


                    fetch(`https://zero-dollar-bites-server.vercel.app/requesttodeliver/${id}`, {
                        method: 'DELETE',
                        credentials: 'include'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                fetch(`https://zero-dollar-bites-server.vercel.app/food/${idP}?email=${user.email}}`, {
                                    method: 'DELETE',
                                    credentials: 'include'
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        console.log(data);
                                    })

                                // console.log('deleted successfully');
                                const remainingFood = foods.filter(food => food._id !== id);
                                setFoods(remainingFood);
                                Swal.fire({
                                    position: 'top-center',
                                    icon: 'success',
                                    title: 'Your Item has been delivered',
                                    showConfirmButton: false,
                                    timer: 2000
                                })


                                // console.log(foods);
                            }
                        })



                    // Reset the form
                    // form.reset();
                }
            })
    }




    return (
        <div className="border border-gray-200">
            <Helmet>
                <title>ZDB | Manage</title>
            </Helmet>
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
                    <button onClick={() => handleDeliver(food._id)} className=" btn btn-xs mt-6 btn-outline rounded-md">
                        deliver
                    </button>
                </div>)
            }
        </div>
    );
};

export default Manage;