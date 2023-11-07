import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Login from "./Login/Login";
import Register from "./Register/Register";
import AddProduct from "./AddProduct/AddProduct";
import Home from "./Home/Home";
import AllProducts from "./Products/AllProducts";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            
            {
                path: '/',
                element: <Home></Home>,
            },
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
            {
                path: '/availablefoods',
                element: <AllProducts></AllProducts>,
            },
            
        

        ]
    }
])
export default router;