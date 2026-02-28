import { createBrowserRouter, Navigate } from "react-router-dom";


// context
import { useAuthContext } from './context/AuthProvider'

// layouts
import GuestLayout from './layouts/GuestLayout'
import UserLayout from './layouts/UserLayout'

// pages
import Welcome from "./view/Welcome";
import Login from "./view/auth/Login";
import Register from "./view/auth/Register";

import Dashboard from "./view/Dashboard";
import Profile from "./view/Profile";










const MainPage = () => { 
    const { isAuth } = useAuthContext(); 
    return isAuth() ? <Navigate to="/dashboard" /> : <Navigate to="/welcome"/>;
} 


const router = createBrowserRouter([

    {
        path : '/',
        element : <MainPage/>
    },


    
    {
        path: '/',
        element: <UserLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/user',
                element: <Profile/>
            }
        ]
    },


    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/welcome',
                element: <Welcome/>
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            }
        ]
    },

]);

export default router;