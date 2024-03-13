import { NavLink, Outlet } from "react-router-dom";
import './about.css'
export default function About() {
    return (
        <div id="about" className="max-w-7xl mx-auto px-2 md:px-20 font-Montserrat">
            <div className="mb-14 text-center">
                <h3 className="text-[#FF014F] uppercase font-Montserrat mt-2 text-sm">Portfolio</h3>
                <h2 className="text-5xl font-bold text-white mt-2">About Me</h2>
            </div>
            <div className="mb-14">
                {/* tabs */}
                <div style={{ transform: "none" }} className="flex h-full justify-center text-gray-300 forShadow">
                    <NavLink className="w-full forShadowHover" to="/"><button className="w-full h-full py-3">Education</button></NavLink>
                    <NavLink className="w-full forShadowHover" to="/about/skills"><button className="w-full h-full py-3">Proffesional Skills</button></NavLink>
                    <NavLink className="w-full forShadowHover" to="/about/experience"><button className="w-full h-full py-3">Experience</button></NavLink>
                </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}
