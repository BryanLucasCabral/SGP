import { useState } from "react";
import Cabecalho from "../../../componentes/Cabecalho/Index";
import Rodape from "../../../componentes/Rodape";
import { useNavigate } from "react-router-dom";
import Modal from "../../../componentes/Modal/index";

function ProjetoForm() {
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [dataTermino, setDataTermino] = useState('');
    const [status, setStatus] = useState("");
    const [exibirModal, setExibirModal] = useState(false);

    const enviarFormulario = (e) => {
        e.preventDefault();
        setExibirModal(true);
        console.log({ nome, descricao, dataInicio, dataTermino, status });
    }

    const confirmarCadastro = () => {
        setExibirModal(false);
        navigate("/projetos");
    }

    const cancelar = () => {
        navigate("/projetos");
    }

    return (
        <>
            <Cabecalho />
            <section className="container mt-3" id="projeto-form">
                <div className="container">
                    <h1>Dados do Projeto</h1>
                    <form className="row g-3" onSubmit={enviarFormulario}>
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="nome" className="form-label">Nome do Projeto</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nome"
                                placeholder="Nome do Projeto..."
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
                                placeholder="Descrição do projeto..."
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="dataInicio" className="form-label">Data de Início</label>
                            <input
                                type="date"
                                className="form-control"
                                id="dataInicio"
                                value={dataInicio}
                                onChange={(e) => setDataInicio(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="dataTermino" className="form-label">Data de Término</label>
                            <input
                                type="date"
                                className="form-control"
                                id="dataTermino"
                                value={dataTermino}
                                onChange={(e) => setDataTermino(e.target.value)}
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
                                <option value="ATIVO">Ativo</option>
                                <option value="INATIVO">Inativo</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Salvar</button>
                            <button type="button" className="btn btn-outline-primary ms-2" onClick={cancelar}>Cancelar</button>
                        </div>
                    </form>
                    {exibirModal && <Modal 
                        titulo={"Confirmação"}
                        texto={"Projeto cadastrado com sucesso"}
                        txtBtn01={"OK"}
                        onClickBtn01={confirmarCadastro} 
                    />}
                </div>
            </section>

            <Rodape />
        </>
    );
}

export default ProjetoForm;