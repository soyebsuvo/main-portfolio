import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
// import Contact from "../Components/Contact/Contact";
import Timeline from "../Components/Education/Timeline";
import Skills from "../Components/Skills/Skills";
import Experience from "../Components/Experience/Experience";

const router = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
                children : [
                    {
                        path : "/",
                        element : <Timeline></Timeline>
                    },
                    {
                        path : "/about/skills",
                        element : <Skills></Skills>
                    },
                    {
                        path : "/about/experience",
                        element : <Experience></Experience>
                    }
                ]
            }
        ]
    }
])

export default router;