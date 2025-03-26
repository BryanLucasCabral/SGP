import Cabecalho from "../../componentes/Cabecalho/Index";
import Rodape from "../../componentes/Rodape/index";
import { PROJETOS } from "../../mocks/projetos";

function Projetos() {
    return (
        <>
            <Cabecalho />
            <section className="container mt-3" id="projetos"></section>
            <div className="d-flex justify-content-between">
                <h1>Projetos Cadastrados</h1>
                <div>
                    <a role="button" href="/novo-projeto" className="btn btn-primary">Novo Projeto</a>
                </div>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome do Projeto</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Data de Início</th>
                        <th scope="col">Data de Término</th>
                        <th scope="col">Status</th>
                        <th scope="col">Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        PROJETOS.map((projeto) => (
                            <tr key={projeto.id}>
                                <th scope="row">{projeto.id}</th>
                                <td>{projeto.nome}</td>
                                <td>{projeto.descricao}</td>
                                <td>{projeto.dataInicio}</td>
                                <td>{projeto.dataTermino}</td>
                                <td>{projeto.status}</td>
                                <td>
                                    <div className="btn-group" role="group" >
                                        <button type="button" className="btn btn-primary me-2">Editar</button>
                                        <button type="button" className="btn btn-danger">Excluir</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Rodape />
        </>
    );
}

export default Projetos;