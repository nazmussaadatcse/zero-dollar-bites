

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 mt-8 text-base-content">
            <nav>
                <header className="footer-title">Contact Us</header>
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">Donate</a>
                <a className="link link-hover">Blog</a>
                <a className="link link-hover">Gallery</a>
            </nav>
            <nav>
                <header className="footer-title">Our Impact</header>
                <a className="link link-hover">FAQ</a>
                <a className="link link-hover">Resources</a>
                <a className="link link-hover">Support</a>
                <a className="link link-hover">Partnerships</a>
            </nav>
            <nav>
                <header className="footer-title">Testimonials</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <form>
                <header className="text-2xl">Zero Dollar Bites</header>
                <fieldset className="form-control ">
                   
                    <div className="">
                        <img className="w-1/2" src="https://i.ibb.co/kJ4Jjzm/zero-dollar-bites-logo.png" alt="" />
                    </div>
                </fieldset>
            </form>
            
        </footer>
        <div className="flex text-center justify-center font-semibold text-sm">
        <h2>Zero Dollar Bites | copyright@2023 All rights reserved. </h2>
        </div>
        </div>
    );
};

export default Footer;