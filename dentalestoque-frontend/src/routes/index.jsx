import { Routes, Route} from 'react-router-dom'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Produtos from '../pages/Produtos';
import Entradas from '../pages/Entradas';
import Saidas from '../pages/Saidas';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Locais from '../pages/Locais';
import Fornecedores from '../pages/Fornecedores';
import Estoque from '../pages/Estoque';
import Layout from '../components/Layout/Layout';

function RoutesApp() {

    


    return(
        <>  
            
            <Routes>
                <Route path='/' element={ <SignIn/> }/>
                <Route path='/cadastro' element={ <SignUp/> }/>

                <Route element={<Layout/>}>
                    <Route path='/dashboard' element={ <Dashboard/> }/>
                    <Route path='/estoque' element={ <Estoque/> }/>
                    <Route path='/entradas' element={ <Entradas/> }/>
                    <Route path='/saidas' element={ <Saidas/> }/>
                    <Route path='/produtos' element={ <Produtos/> }/>
                    <Route path='/locais' element={ <Locais/> }/>
                    <Route path='/fornecedores' element={ <Fornecedores/> }/>
                </Route>
            </Routes>
        </>
        
    )
}

export default RoutesApp;