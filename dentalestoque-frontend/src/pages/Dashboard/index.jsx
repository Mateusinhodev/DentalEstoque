import Title from "../../components/Title"
import "./dashboard.css"

export default function Dashboard() {
    return (
        <div className="main-content">
            <div className="page-title">
                <Title className="title" name={"Dashboard"}/>
                <div className="actions-buttons">
                    <button className="btn btn-primary">
                        <i className="fas fa-download"></i>
                        Relatório
                    </button>
                </div>
            </div>

            <div className="stats-cards">
                <div className="stat-card">
                    <div className="card-header">
                        <div>
                            <div className="card-value">54.554</div>
                            <div className="card-label">Total Produtos em Estoque</div>
                        </div>
                        <div className="card-icon">
                            <i className="fas fa-box"></i>
                        </div>                       
                    </div>
                </div>

                <div className="stat-card">
                    <div className="card-header">
                        <div>
                            <div className="card-value">12,750</div>
                            <div className="card-label">Total de Entradas</div>
                        </div>
                        <div className="card-icon">
                            <i className="fas fa-right-to-bracket"></i>
                        </div>
                    </div>
                    
                </div>

                <div className="stat-card">
                    <div className="card-header">
                        <div>
                            <div className="card-value">8.524</div>
                            <div className="card-label">Total de Saidas</div>
                        </div>
                        <div className="card-icon">
                            <i className="fas fa-right-from-bracket"></i>
                        </div>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="card-header">
                        <div>
                            <div className="card-value">15.000</div>
                            <div className="card-label">Saldo em Estoque</div>
                        </div>
                        
                        <div className="card-icon">
                            <i className="fas fa-chart-pie"></i>
                        </div>
                    </div>

                </div>
            </div>

            
        </div>
    )
}