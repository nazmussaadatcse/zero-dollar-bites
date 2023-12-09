# Zero Dollar Bites

[Explore the Site](https://silver-starship-696c68.netlify.app/)

[Backend](https://github.com/nazmussaadatcse/zero-dollar-bites-server)


Welcome to Zero Dollar Bites, a powerful MERN (MongoDB, Express, React, Node.js) stack project featuring robust Firebase Authentication. This repository showcases a full-stack web application focusing on secure user authentication using Firebase. Firebase Authentication simplifies the process of adding safe and reliable user registration, login, and logout functionalities to web applications.

## Technology Stack

- **MongoDB**: A flexible NoSQL database for efficient data storage and retrieval.
- **Express**: A robust backend framework for building RESTful APIs.
- **React**: A versatile front-end library for crafting engaging user interfaces.
- **Node.js**: A versatile JavaScript runtime environment used on the server.
- **Firebase Authentication**: Provides strong user authentication and security features.
- **Additional Dependencies**: Various other libraries and packages enhance functionality and user experience.


## Key Features

1. **User Authentication**
   - Users can securely register and log in using Firebase Authentication.
   - Private routes ensure that only authenticated users access specific functionalities.

2. **Food Management**
   - Authenticated users have control over their food items' details like name, quantity, photo, pickup location, expiry date, and notes.
   - They can add new food items, update existing ones, and delete items they added.

3. **Donation and Request**
   - Users contribute to reducing food waste by donating surplus food items.
   - Donated food items are available for other users to request.

4. **Food Request Management**
   - Authenticated users can view and manage their food requests, including canceling requests if needed.

5. **Delivery Management**
   - Users with donated food items can see active requests for their items.
   - After delivering food, it's automatically removed from the request page and the general food listing.

6. **Security and Authorization**
   - Users are only allowed to update or delete food items they added.
   - Private routes restrict unauthorized access to specific functionalities.

## How to Run

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running
- Firebase account for Authentication setup

### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/your-username/zero-dollar-bites.git
   cd zero-dollar-bites
    ```

2. **Install Dependencies**
    - Backend:
    ```bash
    cd backend
    npm install
    ```

    - Frontend:
    ```bash
    cd frontend
    npm install
    ```

3. **Configuration**
    - Set up Firebase Authentication and MongoDB credentials in the project.

4. **Running the Application**
    - Backend Server:
    ```bash
    cd backend
    npm nodemon index.js
    ```

    - Frontend:
    ```bash
    cd frontend
    npm run dev
    ```

5. **Access**
    - Open a browser and go to http://localhost:3000 to access Zero Dollar Bites.

    Access the Application

6. **Testing**
    - Register new users, add food items, manage requests, and explore different functionalities provided by the application.
