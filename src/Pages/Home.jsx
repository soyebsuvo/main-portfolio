import Banner from "../Components/Banner/Banner";
import Navbar from "../Components/Navbar/Navbar";
import Projects from "../Components/Projects/Projects";
import Work from "../Components/Work/Work";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Work></Work>
      <Projects></Projects>
    </div>
  )
}
