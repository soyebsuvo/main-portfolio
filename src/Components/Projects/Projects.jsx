import { FiGithub } from "react-icons/fi";
import { FaLink } from "react-icons/fa6";

import project from "../../assets/project.jpg"
import project2 from "../../assets/project2.jpg"
import project3 from "../../assets/project3.jpg"
import project4 from "../../assets/project4.jpg"
import project5 from "../../assets/project5.jpg"
export default function Projects() {
    return (
        <div id="projects" className="max-w-7xl mx-auto px-2 md:px-20 py-3 font-Montserrat">
            <div>
                <div className="mb-14 text-center">
                    <h3 className="text-[#FF014F] uppercase font-Montserrat mt-2 text-sm">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h3>
                    <h2 className="text-5xl font-bold text-white mt-2">My Projects</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="forShadow p-6">
                        <div className="space-y-2">
                            <img className="rounded-lg" src={project} alt="" />
                            <div className="flex items-center gap-6 pt-3">
                                <h4 className="text-[#FF014F] text-sm cursor-pointer flex items-center gap-1"><FiGithub className=""/>Client</h4>
                                <h4 className="text-[#FF014F] text-sm cursor-pointer flex items-center gap-1"><FiGithub className=""/>Server</h4>
                            </div>
                            <h2 className="text-white font-semibold text-2xl cursor-pointer duration-300 hover:text-[#FF014F]"><FaLink className="inline mr-2"/>Homez - A Real State Platform</h2>
                        </div>
                    </div>
                    <div className="forShadow p-6">
                        <div className="space-y-2">
                            <img className="rounded-lg" src={project2} alt="" />
                            <div className="flex items-center gap-6 pt-3">
                                <h4 className="text-[#FF014F] text-sm cursor-pointer flex items-center gap-1"><FiGithub className=""/>Client</h4>
                                <h4 className="text-[#FF014F] text-sm cursor-pointer flex items-center gap-1"><FiGithub className=""/>Server</h4>
                            </div>
                            <h2 className="text-white font-semibold text-2xl cursor-pointer duration-300 hover:text-[#FF014F]"><FaLink className="inline mr-2"/>Grillino - Restaurant Management Website</h2>
                        </div>
                    </div>
                    <div className="forShadow p-6">
                        <div className="space-y-2">
                            <img className="rounded-lg" src={project3} alt="" />
                            <div className="flex items-center gap-6 pt-3">
                                <h4 className="text-[#FF014F] text-sm cursor-pointer flex items-center gap-1"><FiGithub className=""/>Client</h4>
                                <h4 className="text-[#FF014F] text-sm cursor-pointer flex items-center gap-1"><FiGithub className=""/>Server</h4>
                            </div>
                            <h2 className="text-white font-semibold text-2xl cursor-pointer duration-300 hover:text-[#FF014F]"><FaLink className="inline mr-2"/>Automative - A Brand Shop (E-Commerce)</h2>
                        </div>
                    </div>
                    <div className="forShadow p-6">
                        <div className="space-y-2">
                            <img className="rounded-lg" src={project4} alt="" />
                            <div className="flex items-center gap-6 pt-3">
                                <h4 className="text-[#FF014F] text-sm cursor-pointer flex items-center gap-1"><FiGithub className=""/>Client</h4>
                                <h4 className="text-[#FF014F] text-sm cursor-pointer flex items-center gap-1"><FiGithub className=""/>Server</h4>
                            </div>
                            <h2 className="text-white font-semibold text-2xl cursor-pointer duration-300 hover:text-[#FF014F]"><FaLink className="inline mr-2"/>Social Events - Events Management Website</h2>
                        </div>
                    </div>
                    <div className="forShadow p-6">
                        <div className="space-y-2">
                            <img className="rounded-lg" src={project5} alt="" />
                            <div className="flex items-center gap-6 pt-3">
                                <h4 className="text-[#FF014F] text-sm cursor-pointer flex items-center gap-1"><FiGithub className=""/>Client</h4>
                                <h4 className="text-[#FF014F] text-sm cursor-pointer flex items-center gap-1"><FiGithub className=""/>Server</h4>
                            </div>
                            <h2 className="text-white font-semibold text-2xl cursor-pointer duration-300 hover:text-[#FF014F]"><FaLink className="inline mr-2"/>Dhaka University Academic Website</h2>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-b border-[0px] my-14 mt-32 border-black"/>
        </div>
    )
}
