import { GlobalProvideer } from "./contextos/GlobalContext";
import Rotas from "./rotas";

function App() {
  return (
      <GlobalProvideer>
        <Rotas></Rotas>
      </GlobalProvideer>
  );
}

export default App;
