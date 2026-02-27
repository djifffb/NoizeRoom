import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios'
import axClient from '../axios-config'

axios.defaults.baseURL = `${import.meta.env.VITE_API_BASE_URL}/api`;



const AuthContext = createContext({
    user: null,
    error: null,
    register: () => {},
    login: () => {},
    isAuth: () => {},
    logout: () => {},
});



export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});


    useEffect(() => {
        const access_token = localStorage.getItem('ACCESS_TOKEN');
        if(access_token){
            axClient.get('user/me')
            .then(response => setUser(response.data))
            // .catch(logout());    
        }
    },[])


    const register = async (name, email, password, password_confirmation) => {
        try {
            const response = await axios.post('/user/register',{name, email, password, password_confirmation});
            const {access_token} = response.data;
            localStorage.setItem('ACCESS_TOKEN', access_token);
    
            const userResponse = await axClient.get('user/me')
            setUser(userResponse.data);
            return true;

        } catch (error) {
            if(error.response.status === 422) {
                setError({});
                setError(error.response.data.errors);
            }else{
                console.error(error);
            }
            return false;
        }
    }

    const login = async (email, password) => {
        try {
            const response = await axios.post('/user/login',{email, password});
            const {access_token} = response.data;
            localStorage.setItem('ACCESS_TOKEN', access_token);
    
            const userResponse = await axClient.get('user/me')
            setUser(userResponse.data);
            return true;

        } catch (erro) {
            if(error.response.status === 422) {
                setError({});
                setError(error.response.data.errors);
            }else{
                console.error(error);
            }
            return false;
        }
    }

    const isAuth = () => {
        const access_token = localStorage.getItem('ACCESS_TOKEN');
        if (access_token){
            return true;
        }
        return false;
    }


    const logout = () => {
        localStorage.removeItem('ACCESS_TOKEN');
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user,error,register,login,isAuth,logout}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuthContext = () => useContext(AuthContext);
