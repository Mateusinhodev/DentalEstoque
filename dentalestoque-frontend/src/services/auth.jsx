import { useState } from "react";
import { useNavigate } from 'react-router';


export default function authServices() {

    const [authLoading, setAuthLoading] = useState(false);
    
    const navigate = useNavigate();

    const url = 'http://localhost:3000/auth';

    const login = (formData) => {
        setAuthLoading(true);

        fetch(`${url}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow_Origin': '*'
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setAuthLoading(false)
            navigate("/dashboard")
        })
    }

    const logout = () => {
        
    }

    const signup = (formData) => {
        setAuthLoading(true);

        fetch(`${url}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow_Origin': '*'
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            if(result.success && result.body.token) {
                localStorage.setItem('auth', JSON.stringify({token: result.body.token, user: result.body.user}))
            }
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setAuthLoading(false)
            navigate("/dashboard")
        })
    }

    return {signup, login, logout, authLoading}
}