import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Login from "./Login/Login";
import Register from "./Register/Register";
import AddProduct from "./AddProduct/AddProduct";
import Home from "./Home/Home";
import AllProducts from "./Products/AllProducts";
import ProductDetail from "./Products/ProductDetail";
import ManageMyFood from "./ManageMyFood/ManageMyFood";
import MyFoodRequest from "./MyFoodRequest/MyFoodRequest";
import Page404 from "./Shared/Page404";
import UpdateProduct from "./Products/UpdateProduct";
import Manage from "./Products/Manage";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Page404></Page404>,
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
            {
                path: '/managemyfood',
                element: <ManageMyFood></ManageMyFood>,
            },
            {
                path: '/myfoodrequest',
                element: <MyFoodRequest></MyFoodRequest>,
            },
            {
                path: '/updateproduct/:id',
                element: <UpdateProduct></UpdateProduct>,
            },
            {
                path: '/food/:id',
                element: <ProductDetail></ProductDetail>,
            },
            {
                path: '/manage/:id',
                element: <Manage></Manage>,
            },
            
        

        ]
    }
])
export default router;