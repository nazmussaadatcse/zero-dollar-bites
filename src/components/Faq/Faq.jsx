import React from 'react';

const Faq = () => {
    return (
        <div className="block md:flex gap-8 p-4 mb-12">
                {/* FAQ */}
                <div className="join my-4 md:w-1/2 join-vertical">

                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                        What should I consider when buying a new car?
                        </div>
                        <div className="collapse-content">
                            <p>When buying a new car, consider your budget, the type of vehicle (sedan, SUV, truck, etc.), your needs (commuting, family, off-roading), fuel efficiency, safety features, and resale value.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        Are electric cars (EVs) practical for everyday use?
                        </div>
                        <div className="collapse-content">
                            <p>Electric cars are increasingly practical for daily use, with advancements in battery technology providing longer ranges. However, charging infrastructure and individual driving habits can influence their practicality.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        What is the hybrid and plug-in hybrid cars?
                        </div>
                        <div className="collapse-content">
                            <p>Hybrid cars use a combination of an internal combustion engine and an electric motor, with the battery charged through regenerative braking. Plug-in hybrids can be charged via an electrical outlet and often have a longer electric-only range.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        How do I choose the right car insurance policy?
                        </div>
                        <div className="collapse-content">
                            <p>When selecting car insurance, consider your budget, coverage needs, and deductible preferences. It's advisable to compare quotes from multiple insurance providers to find the best policy for your specific situation.</p>
                        </div>
                    </div>
                </div>
                {/* First Column: Subscription Form */}
                <div className="m-4 p-6 rounded-lg flex-1">
                    <img className="mt" src="https://i.ibb.co/L5MYXqM/faq-removebg-preview.png" alt="" />
                </div>


            </div>
    );
};

export default Faq;