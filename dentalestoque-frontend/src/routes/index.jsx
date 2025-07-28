import { Routes, Route } from 'react-router-dom'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Produtos from '../pages/Produtos';
import Entradas from '../pages/Entradas';
import Saidas from '../pages/Saidas';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Controle from '../pages/Estoque';
import Locais from '../pages/Locais';
import Fornecedores from '../pages/Fornecedores';
import Estoque from '../pages/Estoque';

function RoutesApp() {
    return(
        <>  
            <Sidebar/>
            <Header/>
            <Routes>
                <Route path='/' element={ <SignIn/> }/>
                <Route path='/cadastro' element={ <SignUp/> }/>

                <Route path='/dashboard' element={ <Dashboard/> }/>
                <Route path='/estoque' element={ <Estoque/> }/>
                <Route path='/entradas' element={ <Entradas/> }/>
                <Route path='/saidas' element={ <Saidas/> }/>
                <Route path='/produtos' element={ <Produtos/> }/>
                <Route path='/locais' element={ <Locais/> }/>
                <Route path='/fornecedores' element={ <Fornecedores/> }/>
            </Routes>
        </>
        
    )
}

export default RoutesApp;