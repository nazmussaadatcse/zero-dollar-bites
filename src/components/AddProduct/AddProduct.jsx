import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles



const AddProduct = () => {

    const [selectedDate, setSelectedDate] = useState(null);
    const { user } = useContext(AuthContext);

    const handleAddProduct = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;
        const pickup_location = form.pickup_location.value;
        const expiry_date = form.expiry_date.value;
        const additional_notes = form.additional_notes.value;

        const donatorPhoto = user.photoURL;
        const donatorName = user.Name;
        const email = user.email;
        const foodStatus = 'available';

        const newFood = {
            name, quantity, photo, pickup_location, expiry_date, additional_notes, donatorPhoto, donatorName, email, foodStatus
        }
        console.log(newFood);

        fetch('http://localhost:5000/food', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFood)
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
        <div className="bg-green-400 rounded-md m-4 p-16 lg:w-3/4 mx-auto text-black">
            <h2 className="font-bold text-xl">Add a Product</h2>
            <form onSubmit={handleAddProduct}>
                {/* name and Image row  */}
                <div className="md:flex gap-4 my-2">
                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" name="name" required placeholder="Product name" className="input input-bordered w-full rounded-md " />
                    </div>
                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Food Image</span>
                        </label>
                        <input type="text" name="photo" required placeholder="PhotoURL" className="input input-bordered w-full rounded-md " />
                    </div>

                </div>
                {/* Quantity and pickup location row  */}
                <div className="md:flex gap-4 my-2">

                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <select name="quantity" className="select select-bordered w-full rounded-md">
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </select>
                    </div>
                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Pickup Location</span>
                        </label>
                        <input type="text" name="pickup_location" required placeholder="Pickup Location" className="input input-bordered w-full rounded-md " />
                    </div>


                </div>

                {/* Expiry Date , short description row  */}
                <div className="md:flex gap-4 my-2">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Expiry Date</span>
                        </label>
                        <DatePicker
                            selected={selectedDate}
                            onChange={date => setSelectedDate(date)}
                            dateFormat="MM/dd/yyyy" // Customize the date format
                            name="expiry_date"
                            required
                            className="input input-bordered w-full rounded-md"
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Additional Notes
                            </span>
                        </label>
                        <input type="text" name="additional_notes" required placeholder="Additional Notes
" className="input input-bordered w-full rounded-md " />
                    </div>

                </div>
                <div>
                    <input className="btn btn-block rounded-md my-2 bg-green-500 text-white border border-purple-600 hover:bg-green-600" type="submit" value="Add" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;