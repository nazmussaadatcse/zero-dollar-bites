import React from 'react';

const Faq = () => {
    return (
        <div className="block md:flex gap-8 p-4 mb-12">
                {/* FAQ */}
                <div className="join my-4 md:w-1/2 join-vertical">

                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                        What is food donation, and why is it important?
                        </div>
                        <div className="collapse-content">
                            <p>Food donation is the act of giving surplus or unused food to individuals or organizations in need. It's crucial because it serves a dual purpose. First, it helps reduce food waste, which is a significant environmental and economic concern. Second, food donation addresses the issue of hunger and food insecurity. According to the World Food Programme, nearly 9% of the global population is undernourished. By donating food, we can help bridge this gap and ensure that edible food doesn't go to waste while supporting those who need it.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        How can I ensure the food I donate is safe to eat?
                        </div>
                        <div className="collapse-content">
                            <p>Ensuring food safety is a top priority when donating. Non-perishable items, such as canned goods and sealed packages, are often safe to donate if they are within their expiration dates and haven't been tampered with. For perishable items like fresh produce or dairy, it's important to maintain proper storage and transport conditions to prevent spoilage. Many organizations that accept food donations have guidelines and processes in place to ensure food safety. When in doubt, it's advisable to check with the receiving organization for specific requirements.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        Can I receive tax benefits for food donations, and how does it work?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, individuals and businesses can often receive tax deductions for food donations made to registered nonprofit organizations in many countries. To claim a deduction, you'll need to keep accurate records of the donated items, including their value and the date of donation. The specific rules and limits for tax deductions can vary by location, so it's advisable to consult a tax professional or the relevant tax authority for guidance. Donating food not only helps those in need but can also provide financial benefits in the form of reduced tax liabilities.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        What types of food are typically accepted for donation?
                        </div>
                        <div className="collapse-content">
                            <p>Most food donation organizations accept non-perishable items such as canned goods, pasta, rice, and shelf-stable products. Some also accept perishable items like fresh fruits, vegetables, and dairy, provided they have appropriate storage and distribution mechanisms. It's essential to check with local organizations for specific requirements and restrictions.</p>
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