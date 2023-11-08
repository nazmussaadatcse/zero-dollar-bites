import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider";


const ProductDetail = () => {

    const closeModal = () => {
        document.getElementById('my_modal_3').close();
    };


    const { user } = useContext(AuthContext);
    // console.log(user?.email);

    const id = useParams();
    const [food, setFood] = useState([]);

    useEffect(() => {
        // Load data 
        fetch('http://localhost:5000/food')
            .then((res) => res.json())
            .then((data) => {
                setFood(data);
                // console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const filteredFood = food.filter((food) => food._id === id.id);
    // console.log('filteredFood:', filteredFood);
    // console.log(id.id);

    const requesterName = user?.displayName;
    const requesterEmail = user?.email;
    const requesterPhoto = user?.photoURL;

    const handleRequest = e => {
        e.preventDefault();

        const form = e.target;
        const additional_notes = form.additional_notes.value;
        const donation_money = form.donation_money.value;

        setTimeout(() => {
            closeModal();
        }, 100);
        // i died to set this modal closing trick


        const currentDate = new Date();

        const requestDB = {
            request_date: currentDate.toLocaleString(),
            requested: filteredFood[0],
            additional_notes,
            donation_money,
            requesterName,
            requesterEmail,
            requesterPhoto
        };
        console.log(requestDB);

        fetch('http://localhost:5000/requested', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requestDB)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Request succeed !',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    // Reset the form
                    // form.reset();
                }
            })





    }




    return (
        <div>
            {filteredFood.map((food) => (
                <div key={food._id} className="my-12 md:p-12 flex justify-center min-h-screen ">
                    <div className="border p-2 border-green-300 w-full md:flex justify-center md:p-12">
                        <div className="p-8 mx md:w-1/2 flex justify-center items-center md:max-w-sm shadow-2xl bg-base-100">
                            <div className="flex-col text-center">
                                <img src={food.photo} alt="" />
                                <h2 className="py-2 font-semibold text-xl">Food</h2>
                            </div>
                        </div>
                        <div className="md:w-1/2 p-8 flex flex-col justify-center items-left">
                            <h1 className="text-2xl font-bold uppercase">Donor Information</h1>
                            <h1 className=" font-bold">Donar Name: {food.donatorName}</h1>
                            <h1 className=" font-bold">Food Pickup Location: {food.pickup_location}</h1>
                            <h1 className="text-2xl font-bold uppercase">Food Information</h1>
                            <div className="uppercase font-semibold">
                                <p className="">Name: {food.name}</p>
                                <p>Quantity: {food.quantity}</p>
                                <p>Expiry Date: {food.expiry_date}</p>
                                <p className="font-semibold text-green-700 lowercase"><small>( This Food is for: {food.quantity} People. )</small></p>
                            </div>


                            <button className=" btn btn-xs bg-white my-2 btn-outline w-24 rounded-md">
                                add
                            </button>
                            <button onClick={() => document.getElementById('my_modal_3').showModal()} className=" btn btn-xs bg-white my-2 btn-outline w-24 rounded-md">
                                Request
                            </button>

                        </div>

                    </div>
                </div>
            ))}

            {/* This is Modal Section  */}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}

            {filteredFood.map((food) => (
                <dialog key={food._id} id="my_modal_3" className="modal">
                    <h2>{food._id}</h2>
                    <div className="modal-box w-11/12 max-w-5xl">
                        <form onSubmit={handleRequest} method="dialog">

                            <div className="bg-white rounded-md m-4 p-4 w-full mx-auto text-black">
                                <h2 className="font-bold text-xl">Request this Food</h2>
                                {/* name and Image row */}
                                <div className="md:flex gap-4 my-2">
                                    <div className="form-control w-full md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Food Name</span>
                                        </label>
                                        <input type="text" name="name" defaultValue={food.name} readOnly placeholder="Product name" className="input input-bordered w-full rounded-md " />
                                    </div>
                                    <div className="form-control w-full md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Food Image</span>
                                        </label>
                                        <input type="text" name="photo" defaultValue={food.photo} readOnly placeholder="PhotoURL" className="input input-bordered w-full rounded-md " />
                                    </div>
                                </div>
                                {/* Food ID and Donar name row */}
                                <div className="md:flex gap-4 my-2">
                                    <div className="form-control w-full md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Food ID</span>
                                        </label>
                                        <input type="text" name="id" defaultValue={food._id} readOnly placeholder="Food ID" className="input input-bordered w-full rounded-md " />
                                    </div>
                                    <div className="form-control w-full md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Donar Name</span>
                                        </label>
                                        <input type="text" name="donar_name" defaultValue={food.donatorName} readOnly placeholder="Donar Name" className="input input-bordered w-full rounded-md " />
                                    </div>
                                </div>
                                {/* Email , Request Date row */}
                                <div className="md:flex gap-4 my-2">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Donar Email</span>
                                        </label>
                                        <input type="text" name="donar_email" defaultValue={food.email} readOnly placeholder="Donar Email" className="input input-bordered w-full rounded-md " />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Request Date and Time</span>
                                        </label>
                                        <input type="text" name="request_date" value={new Date().toLocaleString()} readOnly placeholder="Request Date" className="input input-bordered w-full rounded-md " />
                                    </div>
                                </div>
                                {/* Pickup Location , Expire Date row */}
                                <div className="md:flex gap-4 my-2">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Pickup Location</span>
                                        </label>
                                        <input type="text" name="pickup_location" defaultValue={food.pickup_location} readOnly placeholder="Pickup Location" className="input input-bordered w-full rounded-md " />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Expire Date</span>
                                        </label>
                                        <input type="text" name="expire_date" defaultValue={food.expiry_date} readOnly placeholder="Expire Date" className="input input-bordered w-full rounded-md " />
                                    </div>
                                </div>
                                {/* Additional Notes , Donation Money row */}
                                <div className="md:flex gap-4 my-2">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Additional Notes</span>
                                        </label>
                                        <input type="text" name="additional_notes" required placeholder="Additional Notes" className="input input-bordered w-full rounded-md " />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Donation Money</span>
                                        </label>
                                        <input type="number" name="donation_money" required defaultValue={10} placeholder="Donation Money" className="input input-bordered w-full rounded-md " />
                                    </div>
                                </div>
                                <div>
                                    <input className="btn btn-block rounded-md my-2 bg-green-500 text-white border border-purple-600 hover:bg-green-600" type="submit" value="Request" />
                                </div>
                            </div>
                        </form>
                    </div>
                </dialog>
            ))}


        </div>
    );
};

export default ProductDetail;