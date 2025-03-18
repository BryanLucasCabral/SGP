import logo from "../../arquivos/Imagens/sgp_logo_horizontal.png";

function Cabecalho() {
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
                            <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Projetos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Tarefas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Usuários</a>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Cabecalho;