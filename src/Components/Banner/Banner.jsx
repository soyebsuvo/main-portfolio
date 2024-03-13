import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import { DiReact } from "react-icons/di";
import { TbBrandTailwind } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import profile from "../../assets/profile.png"
export default function Banner() {
    return (
        <div className="max-w-7xl mx-auto px-2 md:px-20 min-h-screen py-3">
            <div className="flex items-center h-screen">
                <div className="md:w-1/2">
                    <h3 style={{ letterSpacing: "3px" }} className="text-gray-300 uppercase font-Montserrat text-sm">Welcome to my world</h3>
                    <h2 className="text-5xl text-white font-Montserrat font-bold pt-3 pb-2">Hi, I&apos;m <span className="text-[#FF014F]">Md Soyeb</span></h2>
                    <h2 className="text-5xl text-white font-Montserrat font-bold pt-3 pb-2">a UI/UX Designer</h2>
                    <p className="text-gray-300 text-sm mt-3">MERN Stack Developer with a year of expertise in React, Node.js, MongoDB. Committed to excellence and ongoing learning.</p>
                    <div className="flex py-8 mt-16">
                        <div className="w-1/2">
                            <h3 style={{ letterSpacing: "3px" }} className="text-gray-300 uppercase font-Montserrat text-[10px] mb-4">Find With Me</h3>
                            <div className="flex gap-3">
                                <button className="p-4 forShadow"><FiFacebook className="text-white text-xl" /></button>
                                <button className="p-4 forShadow"><FiGithub className="text-white text-xl" /></button>
                                <button className="p-4 forShadow"><FiLinkedin className="text-white text-xl" /></button>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <h3 style={{ letterSpacing: "3px" }} className="text-gray-300 uppercase font-Montserrat text-[10px] mb-4">Best Skill On</h3>
                            <div className="flex gap-3">
                                <button className="p-4 forShadow"><DiReact className="text-white text-xl"/></button>
                                <button className="p-4 forShadow"><TbBrandTailwind className="text-white text-xl"/></button>
                                <button className="p-4 forShadow"><SiExpress className="text-white text-xl"/></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <div className="w-full h-full px-8 relative">
                        <div className="forShadow w-[350px] h-[400px] mx-auto"></div>
                        <img className="absolute bottom-0" src={profile} alt="picture" />
                    </div>
                </div>
            </div>
            <hr className="border-b border-[0px] my-6 border-black"/>
        </div>
    )
}
