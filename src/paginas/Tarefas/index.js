import React from "react";
import { mockTarefas } from "../../mocks/tarefas";
import Cabecalho from "../../componentes/Cabecalho/Index";
import Rodape from "../../componentes/Rodape/index";
import { useNavigate } from "react-router-dom";

function TarefaList() {
    return (
        <>
            <Cabecalho />
            <section className="container mt-3" id="tarefas">
                <div className="d-flex justify-content-between">
                    <h1>Lista de Tarefas</h1>
                    <div>
                        <a role="button" href="/nova-tarefa" className="btn btn-primary">Nova Tarefa</a>
                    </div>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">Data Limite</th>
                            <th scope="col">Status</th>
                            <th scope="col">Prioridade</th>
                            <th scope="col">Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockTarefas.map((tarefa) => (
                            <tr key={tarefa.id}>
                                <th scope="row">{tarefa.id}</th>
                                <td>{tarefa.nome}</td>
                                <td>{tarefa.descricao}</td>
                                <td>{tarefa.dataLimite}</td>
                                <td>{tarefa.status}</td>
                                <td>{tarefa.prioridade}</td>
                                <td>
                                <div className="btn-group" role="group" >
                                        <button type="button" className="btn btn-primary me-2">Editar</button>
                                        <button type="button" className="btn btn-danger">Excluir</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            <Rodape />
        </>
    );
}

export default TarefaList;