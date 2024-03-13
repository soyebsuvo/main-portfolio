import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
// import Contact from "../Components/Contact/Contact";
import Timeline from "../Components/Education/Timeline";

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
                    }
                ]
            }
        ]
    }
])

export default router;