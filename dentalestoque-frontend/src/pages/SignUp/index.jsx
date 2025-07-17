
import { useState } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import authServices from '../../services/auth';

export default function SignUp() {

    const [formData, setFormData] = useState(null);
    const { signup, authLoading } = authServices()

    const handleSubmitForm = (e) => {
        e.preventDefault();
        
        if(formData.password !== formData.confirmPassword) {
            console.log("As senhas não combinam.");
            return;
        }

        signup(formData);
    }

    const handleFormDataChange = (e) => {        
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

        // console.log(formData);
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
                    <h1>Criar Conta</h1>
                    <input 
                        type="text" 
                        placeholder='Nome' 
                        name='nome' 
                        onChange={handleFormDataChange}
                        required
                    />
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
                    <input 
                        type="password" 
                        placeholder='Confirmar Senha' 
                        name='confirmPassword' 
                        onChange={handleFormDataChange}
                        required
                    />
                    
                    <button type='submit'>
                        {authLoading ? 'Carregando...' : 'Cadastrar'}
                    </button>
                </form>

                <Link to='/'>Já possui conta? Faça login</Link>
            </div>
        </div>
    )
}