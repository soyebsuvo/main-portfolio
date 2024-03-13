import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import logo from "../../assets/logo3.png"
export default function Footer() {
    return (
        <div className="max-w-7xl mx-auto px-2 md:px-20 py-3 font-Montserrat">
            <footer className="footer p-10 text-gray-300">
                <aside>
                    <button className="btn btn-ghost text-3xl">
                        <img className="w-12 h-12 rounded-full border p-[1px]" src={logo} alt="profile" />
                        <span className="font-Montserrat">Soyeb</span>
                    </button>
                    <div className="flex gap-3 mt-4 ml-4">
                        <button className="p-4 forShadow"><FiFacebook className="text-white text-xl" /></button>
                        <button className="p-4 forShadow"><FiGithub className="text-white text-xl" /></button>
                        <button className="p-4 forShadow"><FiLinkedin className="text-white text-xl" /></button>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title text-[#FF014F]">Quick Links</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Projects</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-[#FF014F]">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-[#FF014F]">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <hr className="border-b border-[0px] mt-14 border-black"/>
            <p className="text-gray-400 text-center text-sm pt-4">&copy; 2023. All rights reserved by Md Soyeb</p>
        </div>
    )
}
