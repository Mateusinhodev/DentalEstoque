import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import "./dashboard.css"

export default function Dashboard() {
    return (
        <div className="container">
            <Sidebar/>
            <Header/>
        </div>
    )
}