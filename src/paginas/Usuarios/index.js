import { useEffect, useState } from "react";
import Cabecalho from "../../componentes/Cabecalho/Index";
import Rodape from "../../componentes/Rodape/index";
import { excluirUsuario, listarUsuarios } from "../../servicos/usuarios";
import { useNavigate } from "react-router-dom";

function Usuarios() {
    const navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        listarUsuarios(setUsuarios);
    }, [])

    const deletarUsuario = async (id) => {
        const confirmar = window.confirm("Você tem certeza que deseja excluir este usuário?");
        if (confirmar) {
            const excluido = await excluirUsuario(id);
            if (excluido) {
                await listarUsuarios(setUsuarios); // Atualiza a lista de usuários após a exclusão
            }
        }
    }
    return (
        <>
            <Cabecalho></Cabecalho>
            <section className="container mt-3" id="usuarios"></section>
            <div className="d-flex justify-content-between">
                <h1>Usuarios Cadastrados</h1>
                <div>
                    <a role="button" href="/novo-usuario" className="btn btn-primary">Novo Usuário</a>
                </div>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Cpf</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Idade</th>
                        <th scope="col">Status</th>
                        <th scope="col">Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios?.map((usuario) => (
                            <tr key={usuario.id}>
                                <th scope="row">{usuario.id}</th>
                                <td>{usuario.nome}</td>
                                <td>{usuario.idade}</td>
                                <td>{usuario.cpf}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.status}</td>
                                <td>
                                    <div className="btn-group" role="group" >
                                        <button type="button" className="btn btn-primary me-2" onClick={() => {navigate(`/usuario/${usuario.id}`)}}>Editar</button>
                                        <button type="button" className="btn btn-danger" onClick={()=> {deletarUsuario(usuario.id)}}>Excluir</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Rodape></Rodape>
        </>
    )
}

export default Usuarios;