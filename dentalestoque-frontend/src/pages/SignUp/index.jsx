
import { useState } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router';

export default function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo} alt="Logo do sistema" />
                </div>

                <form>
                    <h1>Criar Conta</h1>
                    <input type="text" placeholder='seuemail@email.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder='*******' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    
                    <button type='submit'>Cadastrar</button>
                </form>

                <Link to='/'>Já possui conta? Faça login</Link>
            </div>
        </div>
    )
}