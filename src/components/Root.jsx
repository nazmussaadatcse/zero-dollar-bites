import { Outlet } from "react-router-dom";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;