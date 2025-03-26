import { useState } from "react";
import Cabecalho from "../../../componentes/Cabecalho/Index";
import Rodape from "../../../componentes/Rodape";
import { useNavigate } from "react-router-dom";
import Modal from "../../../componentes/Modal/index";

function TarefaForm() {
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [dataLimite, setDataLimite] = useState('');
    const [status, setStatus] = useState("");
    const [prioridade, setPrioridade] = useState("");
    const [exibirModal, setExibirModal] = useState(false);

    const enviarFormulario = (e) => {
        e.preventDefault();
        setExibirModal(true);
        console.log({ nome, descricao, dataLimite, status, prioridade });
    }

    const confirmarCadastro = () => {
        setExibirModal(false);
        navigate("/tarefas");
    }

    const cancelar = () => {
        navigate("/tarefas");
    }

    return (
        <>
            <Cabecalho />
            <section className="container mt-3" id="tarefa-form">
                <div className="container">
                    <h1>Dados da Tarefa</h1>
                    <form className="row g-3" onSubmit={enviarFormulario}>
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="nome" className="form-label">Nome da Tarefa</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nome"
                                placeholder="Nome da Tarefa..."
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="descricao" className="form-label">Descrição</label>
                            <textarea
                                className="form-control"
                                id="descricao"
                                placeholder="Descrição da tarefa..."
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="dataLimite" className="form-label">Data Limite</label>
                            <input
                                type="date"
                                className="form-control"
                                id="dataLimite"
                                value={dataLimite}
                                onChange={(e) => setDataLimite(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="status" className="form-label">Status</label>
                            <select
                                id="status"
                                className="form-select"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                required
                            >
                                <option disabled value="">Escolha...</option>
                                <option value="PENDENTE">Pendente</option>
                                <option value="EM_ANDAMENTO">Em andamento</option>
                                <option value="CONCLUIDA">Concluída</option>
                            </select>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="prioridade" className="form-label">Prioridade</label>
                            <select
                                id="prioridade"
                                className="form-select"
                                value={prioridade}
                                onChange={(e) => setPrioridade(e.target.value)}
                                required
                            >
                                <option disabled value="">Escolha...</option>
                                <option value="BAIXA">Baixa</option>
                                <option value="MEDIA">Média</option>
                                <option value="ALTA">Alta</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Salvar</button>
                            <button type="button" className="btn btn-outline-primary ms-2" onClick={cancelar}>Cancelar</button>
                        </div>
                    </form>
                    {exibirModal && <Modal 
                        titulo={"Confirmação"}
                        texto={"Tarefa cadastrada com sucesso"}
                        txtBtn01={"OK"}
                        onClickBtn01={confirmarCadastro} 
                    />}
                </div>
            </section>

            <Rodape />
        </>
    );
}

export default TarefaForm;