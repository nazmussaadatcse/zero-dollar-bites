import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Login from "./Login/Login";
import Register from "./Register/Register";
import AddProduct from "./AddProduct/AddProduct";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/addfood',
                element: <AddProduct></AddProduct>,
            },
            
        

        ]
    }
])
export default router;