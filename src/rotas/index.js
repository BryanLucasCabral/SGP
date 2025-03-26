import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../paginas/Login";
import Pagina404 from "../paginas/Pagina404";
import Usuarios from "../paginas/Usuarios";
import UsuarioForm from "../paginas/Usuarios/UsuarioForm";
import Projetos from "../paginas/Projetos/index"
import ProjetoForm from "../paginas/Projetos/ProjetosForm/index"
import TarefaForm from "../paginas/Tarefas/TarefasForm/index"
import Tarefas from "../paginas/Tarefas/index"

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Login />}></Route>
                <Route path="/dashboard" element=""></Route>
                <Route path="/usuarios" element={<Usuarios/>}></Route>
                <Route path="/novo-usuario" element={<UsuarioForm/>}></Route>
                <Route path="/usuario/:id" element={<UsuarioForm/>}></Route>
                <Route path="/projetos" element={<Projetos/>}></Route>
                <Route path="/novo-projeto" element={<ProjetoForm/>}></Route>
                <Route path="/projetos/:id" element={<ProjetoForm/>}></Route>
                <Route path="/tarefas" element={<Tarefas/>}></Route>
                <Route path="/tarefas/:id" element={<TarefaForm/>}></Route>
                <Route path="/tarefas" element={<TarefaForm/>}></Route>
                <Route path="*" element={<Pagina404 />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;