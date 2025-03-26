import { useContext } from "react";
import logo from "../../arquivos/Imagens/sgp_logo_horizontal.png";
import { GlobalContext } from "../../contextos/GlobalContext";

function Cabecalho() {
    const {logout} = useContext(GlobalContext);
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuLateral" aria-controls="menuLateral" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href=".">
                    <img src={logo} alt="Sistema de Gestão de Projetos" width="200px" />
                </a>
                <div className="collapse navbar-collapse" id="menuLateral">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/dashboard">Dashboard</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/projetos">Projetos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/tarefas">Tarefas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/usuarios">Usuários</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Cabecalho;