import './signin.css'

import { useState } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router';
import authServices from '../../services/auth';

export default function SignIn() {

    const [formData, setFormData] = useState(null);
    const { login, authLoading } = authServices();

    const handleFormDataChange = (e) => {        
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

        // console.log(formData);
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()

        login(formData);
    }

    // if(authLoading) {
    //     return ( <h1>Carregando...</h1> )
    // }

    return (
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo} alt="Logo do sistema" />
                </div>

                <form onSubmit={handleSubmitForm}>
                    <h1>Entrar</h1>
                    <input 
                        type="email" 
                        placeholder='seuemail@email.com' 
                        name='email'
                        onChange={handleFormDataChange}
                        required
                    />
                    <input 
                        type="password" 
                        placeholder='Senha' 
                        name='password' 
                        onChange={handleFormDataChange}
                        required
                    />
                    
                    <button type='submit'>
                        {authLoading ? 'Carregando' : "Acessar"}
                    </button>
                </form>

                <Link to='/cadastro'>Criar uma conta</Link>
            </div>
        </div>
    )
}