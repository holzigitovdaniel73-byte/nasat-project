import { createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Wish from "./pages/Wish";
import Delete from "./pages/Delete";
import Magazin from "./pages/Magazin";
import Surot from "./pages/Surot";



const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
               {
                path: "/register",
                element: <SignUp />
            },
            {
                path: "/login",
                element: <Login /> 
            },
            {
              path: "/contact",
                element: <Contact />   
            },
            {
                path:"/wish",
                element:<Wish/>
            },
              {
                path:"/delete",
                element:<Delete/>
            },
            {
                path:"/magazin",
                element:<Magazin/>
            },
            {
                path:"/surot",
                element:<Surot/>
            }


        ]
    }
])

export default myRouter