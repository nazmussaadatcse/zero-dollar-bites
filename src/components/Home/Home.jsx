import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Faq from "../Faq/Faq";
import Products from "../Products/Products";
import { Helmet } from "react-helmet";

const Home = () => {

    return (

        <div>
            <Helmet>
                <title>ZDB | Home</title>
            </Helmet>
            <Banner></Banner>
            <Products></Products>
            <Faq></Faq>
            <Contact></Contact>
        </div>


    );
};

export default Home;
