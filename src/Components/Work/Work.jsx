import { FaBars, FaReact } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiBackendless, SiFrontendmentor, SiMaterialdesign } from "react-icons/si";


export default function Work() {
    return (
        <div id="service" className="max-w-7xl mx-auto px-2 md:px-20 py-3 font-Montserrat">
            <div className="pb-8">
                <div data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-ofset="500"
                    data-aos-duration="500" className="mb-14">
                    <h3 className="text-[#FF014F] uppercase font-Montserrat mt-2 text-sm">Features</h3>
                    <h2 className="text-5xl font-bold text-white mt-2">What I Do</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-ofset="500"
                    data-aos-duration="500" className="forShadow p-8 space-y-2">
                        <FaBars className="text-[#FF014F] text-4xl mb-3"/>
                        <h2 className="text-white text-xl font-semibold">Web Development</h2>
                        <p className="text-white text-sm">In Web Development, I craft dynamic and responsive websites, ensuring a seamless user experience through a combination of innovative technologies and coding expertise.</p>
                    </div>
                    <div data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-ofset="500"
                    data-aos-duration="500" className="forShadow p-8 space-y-2">
                        <MdOutlineDesignServices className="text-[#FF014F] text-4xl mb-3"/>
                        <h2 className="text-white text-xl font-semibold">Web Design</h2>
                        <p className="text-white text-sm">As a Web Designer, I blend creativity with functionality, producing visually captivating and user-friendly interfaces that leave a lasting impression on visitors.</p>
                    </div>
                    <div data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-ofset="500"
                    data-aos-duration="500" className="forShadow p-8 space-y-2">
                        <SiMaterialdesign className="text-[#FF014F] text-4xl mb-3"/>
                        <h2 className="text-white text-xl font-semibold">UI/UX Design</h2>
                        <p className="text-white text-sm">UI/UX Design is my passion, where I focus on creating intuitive and visually appealing interfaces that enhance user satisfaction and engagement, prioritizing the user experience from start to finish.</p>
                    </div>
                    <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-ofset="500"
                    data-aos-duration="500" className="forShadow p-8 space-y-2">
                        <SiFrontendmentor  className="text-[#FF014F] text-4xl mb-3"/>
                        <h2 className="text-white text-xl font-semibold">Frontend Development</h2>
                        <p className="text-white text-sm">Specializing in Frontend Development, I bring designs to life by implementing interactive and feature-rich user interfaces, utilizing cutting-edge technologies to ensure a polished and efficient user interaction.</p>
                    </div>
                    <div data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-ofset="500"
                    data-aos-duration="500" className="forShadow p-8 space-y-2">
                        <SiBackendless  className="text-[#FF014F] text-4xl mb-3"/>
                        <h2 className="text-white text-xl font-semibold">Backend Development</h2>
                        <p className="text-white text-sm">With Backend Development, I build the backbone of web applications, creating robust and scalable server-side architecture to support the seamless functioning of websites and applications.</p>
                    </div>
                    <div data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-ofset="500"
                    data-aos-duration="500" className="forShadow p-8 space-y-2">
                        <FaReact className="text-[#FF014F] text-4xl mb-3"/>
                        <h2 className="text-white text-xl font-semibold">React App Development</h2>
                        <p className="text-white text-sm">My expertise extends to React App Development, where I harness the power of React.js to develop dynamic and high-performance single-page applications, delivering a modern and efficient user interface.</p>
                    </div>
                    
                </div>
            </div>
            <hr className="border-b border-[0px] my-14 mt-24 border-black"/>
        </div>
    )
}
