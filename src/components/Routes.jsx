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
import PrivateRoute from "./hooks/PrivateRoute";
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
                element: <PrivateRoute>
                    <AddProduct></AddProduct>
                </PrivateRoute>,
            },
            {
                path: '/availablefoods',
                element: <AllProducts></AllProducts>,
            },
            {
                path: '/managemyfood',
                element: <PrivateRoute>
                    <ManageMyFood></ManageMyFood>
                </PrivateRoute>,
            },
            {
                path: '/myfoodrequest',
                element: <PrivateRoute>
                    <MyFoodRequest></MyFoodRequest>
                </PrivateRoute>,
            },
            {
                path: '/updateproduct/:id',
                element: <PrivateRoute>
                    <UpdateProduct></UpdateProduct>
                </PrivateRoute>,
            },
            {
                path: '/food/:id',
                element: <PrivateRoute>
                    <ProductDetail></ProductDetail>
                </PrivateRoute>,
            },
            {
                path: '/manage/:id',
                element: <PrivateRoute>
                    <Manage></Manage>
                </PrivateRoute>,
            },



        ]
    }
])
export default router;