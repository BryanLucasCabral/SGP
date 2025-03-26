import { children, createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvideer = ({ children }) => {
    const[usuarioLogado, setUsuarioLogado] = useState({});
    const login = (dadosUsuario) => {
        setUsuarioLogado(dadosUsuario);

        //Chamada a API de autenticação
        if (dadosUsuario?.manterConectado) {
            localStorage.setItem("usuarioLogado", JSON.stringify(dadosUsuario))
        } else {
            sessionStorage.setItem("usuarioLogado", JSON.stringify(dadosUsuario))
        }

        //A fazer redirecionar para tela inicial
    }
    const logout = () => {
        setUsuarioLogado();
        localStorage.removeItem("usuarioLogado");
        sessionStorage.removeItem("usuarioLogado");
    }
    // redirecionar para a tela de login!
    return (
        <GlobalContext.Provider value={{ usuarioLogado, login, logout }}>
            {children}
        </GlobalContext.Provider>
    )
}