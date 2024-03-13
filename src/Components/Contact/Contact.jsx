import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import contact from "../../assets/contact1.png"
export default function Contact() {
  return (
    <div id="contact" className="max-w-7xl mx-auto px-2 md:px-20 py-3 mt-8 font-Montserrat">
      <div>
        <div className="mb-14 text-center">
          <h3 className="text-[#FF014F] uppercase font-Montserrat mt-2 text-sm">Contact</h3>
          <h2 className="text-5xl font-bold text-white mt-2">Contact With Me</h2>
        </div>

        <div className="flex gap-8">
          <div className="md:w-2/6">
            <div className="forShadow p-6">
              <div className="space-y-3">
                <img className="rounded-lg" src={contact} alt="" />
                <h2 className="text-white font-semibold text-2xl cursor-pointer duration-300 pt-2">Md Soyeb Been Hasan</h2>
                <h4 className="text-gray-400 text-sm">MERN Stack Developer</h4>
                <h4 className="text-gray-400 text-sm">I am available for freelance work. Connect with me via email and call in to my account.</h4>
                <h4 className="text-gray-400 text-sm">Phone: <a className="text-white" href="tel:+8801746122445">+880 17461-22445</a></h4>
                <h4 className="text-gray-400 text-sm">Email: <a className="text-white" href="mailto:soyebbeen@gmail.com">soyebbeen@gmail.com</a></h4>
                <div className="py-3">
                  <h3 style={{ letterSpacing: "3px" }} className="text-gray-300 uppercase font-Montserrat text-[10px] mb-4">Find With Me</h3>
                  <div className="flex gap-5">
                    <button className="p-4 forShadow"><FiFacebook className="text-white text-xl" /></button>
                    <button className="p-4 forShadow"><FiGithub className="text-white text-xl" /></button>
                    <button className="p-4 forShadow"><FiLinkedin className="text-white text-xl" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-4/6">
            {/* form  */}
            <div className="forShadow p-6 pb-9">
              <form>
                <div className="flex items-center w-full gap-4">
                  <div className="flex flex-col gap-3 mb-3 w-full">
                    <label style={{ letterSpacing: "2px", fontSize: "11px" }} className="font-Montserrat uppercase text-gray-400 text-sm" htmlFor="name">Your Name</label>
                    <input className="myInput" type="text" name="name" id="name" />
                  </div>
                  <div className="flex flex-col gap-3 mb-3 w-full">
                    <label style={{ letterSpacing: "2px", fontSize: "11px" }} className="font-Montserrat uppercase text-gray-400 text-sm" htmlFor="name">Your Number</label>
                    <input className="myInput" type="text" name="name" id="name" />
                  </div>
                </div>
                <div className="flex flex-col gap-3 mb-3">
                  <label style={{ letterSpacing: "2px", fontSize: "11px" }} className="font-Montserrat uppercase text-gray-400 text-sm" htmlFor="name">Email</label>
                  <input className="myInput" type="text" name="name" id="name" />
                </div>
                <div className="flex flex-col gap-3 mb-3">
                  <label style={{ letterSpacing: "2px", fontSize: "11px" }} className="font-Montserrat uppercase text-gray-400 text-sm" htmlFor="name">Subject</label>
                  <input className="myInput" type="text" name="name" id="name" />
                </div>
                <div className="w-full flex flex-col gap-3 mb-3">
                  <label style={{ letterSpacing: "2px", fontSize: "11px" }} className="font-Montserrat uppercase text-gray-400 text-sm" htmlFor="name">Message</label>
                  <textarea className="myInput w-full" name="message" id="message" cols="30" rows="5"></textarea>
                </div>
                <input type="submit" value="Send Message" className="forShadow w-full py-3 mt-3 text-gray-300 uppercase text-sm" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-b border-[0px] my-14 mt-32 border-black" />
    </div>
  )
}
