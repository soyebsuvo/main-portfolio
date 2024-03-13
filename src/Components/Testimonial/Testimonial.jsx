import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import project2 from "../../assets/contact1.png"
import { FaArrowLeft, FaArrowRight, FaLink, FaRegComment } from "react-icons/fa6";
function PreviousNextMethods() {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <div className="slider-container max-w-7xl mx-auto px-2 md:px-32 font-Montserrat py-8 relative">
            <div className="mb-14 text-center">
                <h3 className="text-[#FF014F] uppercase font-Montserrat mt-2 text-sm">What client says</h3>
                <h2 className="text-5xl font-bold text-white mt-2">Testimonials</h2>
            </div>
            <Slider
                ref={slider => {
                    sliderRef = slider;
                }}
                {...settings}
            >
                <div key={1}>
                    <div>
                        <div className="flex gap-12">
                            <div className="forShadow p-6 md:w-2/6 mb-9">
                                <div className="space-y-2">
                                    <img className="rounded-lg w-full h-[175px]" src={project2} alt="" />
                                    <div className="flex items-center gap-6 pt-3">
                                        <h4 className="text-[#FF014F] text-sm cursor-pointer flex items-center gap-1">Mern Client</h4>
                                    </div>
                                    <h2 className="text-white font-semibold text-2xl cursor-pointer duration-300 hover:text-[#FF014F]"><FaLink className="inline mr-2" />John Doe</h2>
                                    <h4 className="text-gray-300 text-sm cursor-pointer flex items-center gap-1">Chief Operating Officer</h4>
                                </div>
                            </div>
                            <div className="md:w-4/6 text-white forShadow p-6 h-[250px] mt-[80px]">
                                <div>
                                    <div className="flex justify-between items-center relative">
                                        <FaRegComment className="text-gray-300 text-5xl absolute -top-24" />
                                        <div>
                                            <h2 className="text-2xl font-semibold">Web Development</h2>
                                            <h2 className="text-sm text-gray-300 pb-6 mt-2"> via Upwork - Mar 4, 2015 - Aug 30, 2021 test</h2>
                                        </div>
                                        <div>
                                            <h2 className="px-4 py-2 forShadow">4/5</h2>
                                        </div>
                                    </div>
                                    <hr className="border-b border-[0px] mb-8 border-black" />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magni? Rerum nesciunt tenetur placeat laudantium deserunt, facilis ea velit! Ut.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div key={2}>
                    <div>
                        <div className="flex gap-12">
                            <div className="forShadow p-6 md:w-2/6 mb-9">
                                <div className="space-y-2">
                                    <img className="rounded-lg w-full h-[175px]" src={project2} alt="" />
                                    <div className="flex items-center gap-6 pt-3">
                                        <h4 className="text-[#FF014F] text-sm cursor-pointer flex items-center gap-1">Mern Client</h4>
                                    </div>
                                    <h2 className="text-white font-semibold text-2xl cursor-pointer duration-300 hover:text-[#FF014F]"><FaLink className="inline mr-2" />John Doe</h2>
                                    <h4 className="text-gray-300 text-sm cursor-pointer flex items-center gap-1">Chief Operating Officer</h4>
                                </div>
                            </div>
                            <div className="md:w-4/6 text-white forShadow p-6 h-[250px] mt-[80px]">
                                <div>
                                    <div className="flex justify-between items-center relative">
                                        <FaRegComment className="text-gray-300 text-5xl absolute -top-24" />
                                        <div>
                                            <h2 className="text-2xl font-semibold">Web Development</h2>
                                            <h2 className="text-sm text-gray-300 pb-6 mt-2"> via Upwork - Mar 4, 2015 - Aug 30, 2021 test</h2>
                                        </div>
                                        <div>
                                            <h2 className="px-4 py-2 forShadow">4/5</h2>
                                        </div>
                                    </div>
                                    <hr className="border-b border-[0px] mb-8 border-black" />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magni? Rerum nesciunt tenetur placeat laudantium deserunt, facilis ea velit! Ut.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div key={3}>
                    <div>
                        <div className="flex gap-12">
                            <div className="forShadow p-6 md:w-2/6 mb-9">
                                <div className="space-y-2">
                                    <img className="rounded-lg w-full h-[175px]" src={project2} alt="" />
                                    <div className="flex items-center gap-6 pt-3">
                                        <h4 className="text-[#FF014F] text-sm cursor-pointer flex items-center gap-1">Mern Client</h4>
                                    </div>
                                    <h2 className="text-white font-semibold text-2xl cursor-pointer duration-300 hover:text-[#FF014F]"><FaLink className="inline mr-2" />John Doe</h2>
                                    <h4 className="text-gray-300 text-sm cursor-pointer flex items-center gap-1">Chief Operating Officer</h4>
                                </div>
                            </div>
                            <div className="md:w-4/6 text-white forShadow p-6 h-[250px] mt-[80px]">
                                <div>
                                    <div className="flex justify-between items-center relative">
                                        <FaRegComment className="text-gray-300 text-5xl absolute -top-24" />
                                        <div>
                                            <h2 className="text-2xl font-semibold">Web Development</h2>
                                            <h2 className="text-sm text-gray-300 pb-6 mt-2"> via Upwork - Mar 4, 2015 - Aug 30, 2021 test</h2>
                                        </div>
                                        <div>
                                            <h2 className="px-4 py-2 forShadow">4/5</h2>
                                        </div>
                                    </div>
                                    <hr className="border-b border-[0px] mb-8 border-black" />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magni? Rerum nesciunt tenetur placeat laudantium deserunt, facilis ea velit! Ut.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div key={4}>
                    <h3>4</h3>
                </div>
                <div key={5}>
                    <h3>5</h3>
                </div>
                <div key={6}>
                    <h3>6</h3>
                </div> */}
            </Slider>
            <div style={{ textAlign: "center" }} className="absolute top-44 right-32">
                <button className="p-4 forShadow text-white hover:text-[#FF014F]" onClick={previous}>
                    <FaArrowLeft />
                </button>
                <button className="p-4 forShadow text-white ml-4 hover:text-[#FF014F]" onClick={next}>
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
}

export default PreviousNextMethods;
