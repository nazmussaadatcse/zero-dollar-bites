# Zero Dollar Bites MERN Stack Project with Firebase Authentication
[site](https://zero-dollar-bites.web.app/)
[site2](https://whimsical-quokka-c54a71.netlify.app/)

Welcome to Zero Dollar Bites, a powerful MERN (MongoDB, Express, React, Node.js) stack project featuring robust Firebase Authentication. In this repository, we demonstrate the development of a full-stack web application with an emphasis on secure user authentication through Firebase. Firebase Authentication simplifies the process of adding safe and reliable user registration, login, and logout functionality to your web application.


# Key Features
1. User Authentication
Description:
Users can register and log in securely using Firebase Authentication.
Private routes ensure that only authenticated users can access certain functionalities.
2. Food Management
Description:
Authenticated users have full control over their food items.
Users can add new food items with details such as name, quantity, photo, pickup location, expiry date, and additional notes.
They can update the details of their existing food items.
Deletion of food items is allowed, but only for the items added by the authenticated user.
3. Donation and Request
Description:
Users can contribute to reducing food waste by donating surplus food items.
Donated food items are made available for other users to request.
Users can browse the available food items and send requests for the ones they need.
4. Food Request Management
Description:
Authenticated users can view and manage their food requests.
They can cancel their requests if needed.
5. Delivery Management
Description:
Users with donated food items can see active requests for their items.
After delivering the food, it is automatically removed from the request page and the general food listing.
6. Security and Authorization
Description:
Users are only allowed to update or delete food items they have added.
Private routes restrict unauthorized access to functionalities such as adding, updating, managing, and requesting food.

# How It Works
* Authentication:

Users register or log in using Firebase Authentication.
Private routes ensure that only authenticated users can access protected functionalities.
* Food Management:

Authenticated users add new food items with details.
They can update or delete their own food items.
* Donation and Request:

Users can donate food items, making them available for others to request.
Users can browse the list of available food items and send requests.
* Food Request Management:

Authenticated users can view and cancel their food requests.
* Delivery Management:

Users with donated food items can see active requests.
After delivering the food, it is automatically removed from the request page and the general food listing.
Security and Authorization:

Users are restricted to managing only their own food items.
Private routes ensure that unauthorized users cannot access certain functionalities.

* Technology Stack
MongoDB: A flexible NoSQL database for efficient data storage and retrieval.
Express: A robust backend framework for building RESTful APIs.
React: A versatile front-end library for crafting engaging user interfaces.
Node.js: A versatile JavaScript runtime environment used on the server.
Firebase Authentication: Provides strong user authentication and security features.
Additional Dependencies: Various other libraries and packages to enhance the functionality and user experience.