import { Routes, Route } from 'react-router-dom'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Produtos from '../pages/Produtos';
import Entradas from '../pages/Entradas';
import Saidas from '../pages/Saidas';

function RoutesApp() {
    return(
        <Routes>
            <Route path='/' element={ <SignIn/> }/>
            <Route path='/cadastro' element={ <SignUp/> }/>

            <Route path='/dashboard' element={ <Dashboard/> }/>
            <Route path='/produtos' element={ <Produtos/> }/>
            <Route path='/entradas' element={ <Entradas/> }/>
            <Route path='/saidas' element={ <Saidas/> }/>
        </Routes>
    )
}

export default RoutesApp;