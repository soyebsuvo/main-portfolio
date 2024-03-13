import { NavLink, Outlet } from "react-router-dom";
import './about.css'
export default function About() {
    return (
        <div className="max-w-7xl mx-auto px-2 md:px-20 font-Montserrat">
            <div>
                {/* tabs */}
                <div style={{transform : "none"}} className="flex h-full justify-center text-gray-300 forShadow">
                    <NavLink className="w-full forShadowHover" to="/"><button className="w-full h-full py-3">Education</button></NavLink>
                    <NavLink className="w-full forShadowHover" to="/about/two"><button className="w-full h-full py-3">Proffesional Skills</button></NavLink>
                    <NavLink className="w-full forShadowHover" to="/about/three"><button className="w-full h-full py-3">Experience</button></NavLink>
                </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}
