import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
// import Contact from "../Components/Contact/Contact";
import Timeline from "../Components/Education/Timeline";
import Skills from "../Components/Skills/Skills";

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
                    }
                ]
            }
        ]
    }
])

export default router;