import { Link } from "react-router-dom";
import { Logo } from "../index";

function Footer() {
    return (
        <section className="bg-bg h-20 flex justify-center items-center absolute w-full bottom-0 left-0 right-0">
            <p className="text-base text-white">
                &copy; Copyright {new Date().getFullYear()}. All Rights Reserved
                by <span className="text-primary">MohammadKaif.</span>
            </p>
        </section>
    );
}

export default Footer;
