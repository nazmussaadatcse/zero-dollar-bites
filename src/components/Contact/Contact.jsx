


const Contact = () => {
    return (
        <div className=" block md:flex gap-8 p-4 mb-12 flex-row-reverse">
                {/* Contact */}
                <div className=" md:w-1/2 my-4 md rounded-lg flex justify-center">
                <div className="">
                    <h2 className="text-xl font-semibold">Contact us</h2>
                    <p className="text-gray-500 mt-2">Feel free to contact us to suit your specific needs or add any additional information you like to include.




</p>

                    <form className="mt-4">
                        <div className="form-control mt-2">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input rounded-md input-bordered"
                                value={''}
                                required
                            />
                        </div>
                        <div className="form-control mt-2">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input rounded-md input-bordered"
                                value={''}
                                required
                            />
                        </div>
                        <div className="form-control mt-2">
                            <input
                                type="text"
                                placeholder="Your Massage"
                                className="input rounded-md input-bordered"
                                value={''}
                                required
                            />
                        </div>
                        <div className="form-control mt-4">
                            <button type="submit" className="btn bg-white btn-outline rounded-md">Send</button>
                        </div>
                    </form>
                </div>
            </div>
                {/* */}
                <div className="m-4 p-6 rounded-lg flex-1">
                    <img className="mt-12" src="https://i.ibb.co/kJ4Jjzm/zero-dollar-bites-logo.png" alt="" />
                    <h2 className="text-2xl font-bold text-green-700">Let's Eat Together! <br /><span className="text-purple-700">Donate your Food Today</span></h2>
                </div>

            </div>
    );
};

export default Contact;