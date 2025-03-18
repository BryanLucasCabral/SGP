import Alerta from "./componentes/Alerta/Index";
import Cabecalho from "./componentes/Cabecalho/Index";
import Rodape from "./componentes/Rodape";
import Login from "./paginas/Login";
import Pagina404 from "./paginas/Pagina404";
import robo from "./arquivos/Imagens/robo_404.png"

function App() {
  return (
    //  <Login/>
    <>
      <Cabecalho />
      <div className="container">
        <Alerta cor="warning" mensagem="Esta página não existe!"></Alerta>
        <div className="d-flex justify-content-center">
          <img src={robo} alt="Erro 404 - Not Found" width={"30%"}></img>
        </div>
      </div>
      <Rodape />

    </>
  );
}

export default App;
