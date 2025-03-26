import { api } from "./api";

export async function salvarUsuario(dadosUsuario, setExibirModal) {
    await api.post('/usuarios', dadosUsuario)
        .then((resposta) => {
            if (resposta.status === 201) {
                setExibirModal(true);
            }
        })
        .catch((error) => {
            alert("Erro ao  cadastrar usuario.")
            console.error("Erro ao cadastrar usuario", error)
        })
}

export async function listarUsuarios(setUsuarios) {
    await api.get('/usuarios')
        .then((resposta) => {
            if (resposta.status === 200) {
                setUsuarios(resposta.data.content);
            }
        }).catch((error) => {
            alert("Erro ao  listar usuarios.")
            console.error("Erro ao listar usuarios", error)
        })
}

export async function obterUsuarioPeloId(id, setNome, setCpf, setDataNascimento, setEmail, setSenha, setStatus) {
    api.get(`/usuarios/${id}`)
        .then((resposta) => {
            if (resposta.status === 200) {
                setNome(resposta.data.nome); setCpf(resposta.data.cpf);
                setDataNascimento(resposta.data.dataNascimento);
                setEmail(resposta.data.email);
                setSenha(resposta.data.senha);
                setStatus(resposta.data.status);
            }
        })
        .catch((erro) => {
            alert("Erro ao  listar usuarios.")
            console.error('Erro na requisição:', erro);
        });
}

export async function editarUsuario(id, dadosUsuario) {
    api.put(`/usuarios/${id}`, dadosUsuario)
    .then((resposta) => {
        if (resposta.status === 200) {
            return resposta.data
        }
    }).catch((erro) => {
        alert("Erro ao editar usuario.")
        console.error('Erro na requisição:', erro);
    })
}

export async function excluirUsuario(id) { 
    api.delete(`/usuarios/${id}`).then((resposta) => {
        if(resposta.status === 200) {
            alert("Usuário deletado")
            return true;
        }else{ 
            alert("Erro ao deletar usuário")
            return false;
        }
    })
}