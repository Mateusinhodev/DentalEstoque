import Sidebar from "../Sidebar";
import Header from "../Header";
import { Outlet } from "react-router-dom";

import "./layout.css"

function Layout() {
    return(
        <div className="container">
            <Sidebar/>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </div>
        
    )
}

export default Layout;