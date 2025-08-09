import Title from "../../components/Title"

import "./produtos.css"

export default function Produtos() {
    return (
        <div className="main-content">
            <div className="page-title">
                <Title name={"Produtos"}/>
                <div className="actions-buttons">
                    {/* <button className="btn btn-primary">
                        <i className="fas fa-plus"></i>
                        Adicionar Produto
                    </button> */}
                </div>
            </div>

            {/* Tabela de Produtos */}
            <div className="table-card">
                <div className="card-title">
                    <h3><i className="fas fa-box"></i> Tabela de Produtos</h3>
                    <button className="btn btn-primary">
                        <i className="fas fa-plus"></i>
                        Adicionar Produto
                    </button>
                </div>
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome do Produto</th>
                            <th>Unidade de Medida</th>
                            <th>Preço unitário</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>001</td>
                            <td>Tira de Polister</td>
                            <td>Pacotes(s)</td>
                            <td>R$ 1,15</td>
                        </tr>
                        <tr>
                            <td>002</td>
                            <td>Escova de dente</td>
                            <td>Pacotes(s)</td>
                            <td>R$ 1,15</td>
                        </tr>
                        <tr>
                            <td>003</td>
                            <td>Pasta de dente</td>
                            <td>Pacotes(s)</td>
                            <td>R$ 1,15</td>
                        </tr>
                        <tr>
                            <td>004</td>
                            <td>Fio Dental</td>
                            <td>Pacotes(s)</td>
                            <td>R$ 1,15</td>
                        </tr>
                        <tr>
                            <td>005</td>
                            <td>Tesoura</td>
                            <td>Pacotes(s)</td>
                            <td>R$ 1,15</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}