// import { NavLink } from "react-router-dom"
import "./navbar.css"
import logo from "../../assets/logo3.png"
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useState } from "react"
export default function Navbar() {
  const [ open , setOpen ] = useState(false);
  const handleToggle = () => {
    setOpen(!open)
  }
  const handleGoToTop = () => {
    window.scrollTo(0, 0)
  }
  const links = <>
    <li onClick={handleGoToTop}><a>Home</a></li>
    <li><a href="#service">Service</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#testimonials">Testimonial</a></li>
    <li><a href="#contact">Contact</a></li>
  </>
  const [fixedNav, setFixedNav] = useState(false)
  const changeNav = () => {
    if (window.scrollY >= 90) {
      setFixedNav(true)
    } else {
      setFixedNav(false)
    }
  }
  window.addEventListener('scroll', changeNav)
  return (
    <div className={`max-w-7xl mx-auto px-2 md:px-12 py-3 ${fixedNav ? 'sticky top-0 backdrop-blur-lg z-50' : 'static'}`}>
      <div>
        <nav>
          <div className="md:flex justify-between items-center text-gray-300">
            <div className="flex justify-between items-center w-full md:w-fit flex-row-reverse">
              <div className="dropdown">
                <div role="button" className="btn btn-ghost md:hidden">
                  <span onClick={handleToggle}>{open ? <IoClose className="text-2xl" /> : <FaBars className="text-2xl" />}</span>
                </div>
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
              <a href="#contact" className="text-[#FF014F] cursor-pointer font-Montserrat px-[30px] py-[10px] text-[14px] forShadow">Hire Me</a>
            </div>
          </div>
        </nav>
      </div>
      <ul style={{transform : "none"}} className={`fixed md:hidden font-Montserrat forShadow z-50 top-0 p-4 h-screen w-[200px] duration-500 transition-all ease-in text-white ${open ? 'left-[0px] top-0' : '-left-[300px] top-0'}`}>
        <li className="ml-3 py-2" onClick={handleGoToTop}><a>Home</a></li>
        <li onClick={handleToggle} className="ml-3 py-2"><a href="#service">Service</a></li>
        <li onClick={handleToggle} className="ml-3 py-2"><a href="#about">About</a></li>
        <li onClick={handleToggle} className="ml-3 py-2"><a href="#projects">Projects</a></li>
        <li onClick={handleToggle} className="ml-3 py-2"><a href="#testimonials">Testimonial</a></li>
        <li onClick={handleToggle} className="ml-3 py-2"><a href="#contact">Contact</a></li>
      </ul>
    </div>

  )
}
