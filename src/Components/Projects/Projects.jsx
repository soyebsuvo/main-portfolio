import { FiGithub } from "react-icons/fi";
import { FaLink } from "react-icons/fa6";

import project from "../../assets/project.jpg"
import project2 from "../../assets/project2.jpg"
import project3 from "../../assets/project3.jpg"
import project4 from "../../assets/project4.jpg"
import project5 from "../../assets/project5.jpg"
export default function Projects() {
    return (
        <div id="projects" className="max-w-7xl mx-auto px-6 md:px-20 py-3 font-Montserrat">
            <div>
                <div className="mb-14 text-center">
                    <h3 className="text-[#FF014F] uppercase font-Montserrat mt-2 text-sm">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h3>
                    <h2 className="text-5xl font-bold text-white mt-2">My Projects</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div data-aos="fade-right"
                        data-aos-offset="300"
                        
                        data-aos-duration="500" className="forShadow p-6">
                        <div className="space-y-2">
                            <a href="https://assignment-12-homez.web.app" target="_blank"><img className="rounded-lg" src={project} alt="" /></a>                            
                            <div className="flex items-center gap-6 py-3">
                                <a href="https://github.com/soyebsuvo/a12-homez-website-client" target="_blank" className="text-[#FF014F] text-sm cursor-pointer flex items-center gap-1"><FiGithub className="" />Client</a>
                                <a href="https://github.com/soyebsuvo/a12-homez-website-server" target="_blank" className="text-[#FF014F] text-sm cursor-pointer flex items-center gap-1"><FiGithub className="" />Server</a>
                            </div>
                            <a href="https://assignment-12-homez.web.app" target="_blank" className="text-white font-semibold text-2xl cursor-pointer duration-300 hover:text-[#FF014F]"><FaLink className="inline mr-2" />Homez - A Real State Platform</a>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-offset="300"
                        
                        data-aos-duration="500" className="forShadow p-6">
                        <div className="space-y-2">
                            <a href="https://assignment-11-35e68.web.app" target="_blank"><img className="rounded-lg" src={project2} alt="" /></a>
                            <div className="flex items-center gap-6 py-3">
                                <a href="https://github.com/soyebsuvo/a11-grillino-rastaurant-website-client" target="_blank" className="text-[#FF014F] text-sm cursor-pointer flex items-center gap-1"><FiGithub className="" />Client</a>
                                <a href="https://github.com/soyebsuvo/a11-grillino-rastaurant-website-server" target="_blank" className="text-[#FF014F] text-sm cursor-pointer flex items-center gap-1"><FiGithub className="" />Server</a>
                            </div>
                            <a href="https://assignment-11-35e68.web.app" target="_blank" className="text-white font-semibold text-2xl cursor-pointer duration-300 hover:text-[#FF014F]"><FaLink className="inline mr-2" />Grillino - Restaurant Management Website</a>
                        </div>
                    </div>
                    <div data-aos="fade-down"
                        data-aos-offset="300"
                        
                        data-aos-duration="500" className="forShadow p-6">
                        <div className="space-y-2">
                            <a href="https://purring-deer.surge.sh" target="_blank"><img className="rounded-lg" src={project3} alt="" /></a>
                            <div className="flex items-center gap-6 py-3">
                                <a href="https://github.com/soyebsuvo/a10-brand-shop-client" target="_blank" className="text-[#FF014F] text-sm cursor-pointer flex items-center gap-1"><FiGithub className="" />Client</a>
                                <a href="https://github.com/soyebsuvo/a10-brand-shop-server" target="_blank" className="text-[#FF014F] text-sm cursor-pointer flex items-center gap-1"><FiGithub className="" />Server</a>
                            </div>
                            <a href="https://purring-deer.surge.sh" target="_blank" className="text-white font-semibold text-2xl cursor-pointer duration-300 hover:text-[#FF014F]"><FaLink className="inline mr-2" />Automative - A Brand Shop (E-Commerce)</a>
                        </div>
                    </div>
                    <div data-aos="fade-right"
                        data-aos-offset="300"
                        
                        data-aos-duration="500" className="forShadow p-6">
                        <div className="space-y-2">
                            <a href="https://event-management-assignm-e79f0.web.app" target="_blank"><img className="rounded-lg" src={project4} alt="" /></a>
                            <div className="flex items-center gap-6 py-3">
                                <a href="https://github.com/soyebsuvo/a9-event-management-website" target="_blank" className="text-[#FF014F] text-sm cursor-pointer flex items-center gap-1"><FiGithub className="" />Client</a>
                                <a href="https://github.com/soyebsuvo/event-management-server" target="_blank" className="text-[#FF014F] text-sm cursor-pointer flex items-center gap-1"><FiGithub className="" />Server</a>
                            </div>
                            <a href="https://event-management-assignm-e79f0.web.app" target="_blank" className="text-white font-semibold text-2xl cursor-pointer duration-300 hover:text-[#FF014F]"><FaLink className="inline mr-2" />Social Events - Events Management Website</a>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-offset="300"
                        
                        data-aos-duration="500" className="forShadow p-6">
                        <div className="space-y-2">
                            <a href="https://soyebsuvo.github.io/du-project" target="_blank"><img className="rounded-lg" src={project5} alt="" /></a>
                            <div className="flex items-center gap-6 py-3">
                                <a href="https://github.com/soyebsuvo/du-project" target="_blank" className="text-[#FF014F] text-sm cursor-pointer flex items-center gap-1"><FiGithub className="" />Client</a>
                                {/* <a href="" target="_blank" className="text-[#FF014F] text-sm cursor-pointer flex items-center gap-1"><FiGithub className="" />Server</a> */}
                            </div>
                            <a href="https://soyebsuvo.github.io/du-project" target="_blank" className="text-white font-semibold text-2xl cursor-pointer duration-300 hover:text-[#FF014F]"><FaLink className="inline mr-2" />Dhaka University Academic Website</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-b border-[0px] my-14 mt-32 border-black" />
        </div>
    )
}
