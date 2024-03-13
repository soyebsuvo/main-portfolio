import { NavLink } from "react-router-dom"
import "./navbar.css"
import logo from "../../assets/logo3.png"
export default function Navbar() {
  const links = <>
    <NavLink className="/"><li><a href="">Home</a></li></NavLink>
    <li><a href="#service">Service</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#testimonials">Testimonials</a></li>
    <li><a href="#contact">Contact</a></li>
  </>
  return (
    <div className="max-w-7xl mx-auto px-2 md:px-12 py-3">
      <nav>
        <div className="md:flex justify-between items-center text-gray-300">
          <div className="flex justify-between items-center w-full md:w-fit flex-row-reverse">
            <div className="dropdown">
              <div role="button" className="btn btn-ghost md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul className="absolute md:hidden font-Montserrat">
                {links}
              </ul>
            </div>
            <button className="btn btn-ghost text-3xl">
              <img className="w-12 h-12 rounded-full border p-[1px]" src={logo} alt="profile" />
              <span className="font-Montserrat">Soyeb</span>
            </button>
          </div>
          <div className="hidden md:flex">
            <ul className="menu menu-horizontal px-1 font-Montserrat">
              {links}
            </ul>
          </div>
          <div className="hidden md:flex">
            <a className="text-[#FF014F] cursor-pointer font-Montserrat px-[30px] py-[10px] text-[14px] forShadow">Hire Me</a>
          </div>
        </div>
      </nav>
    </div>
  )
}
