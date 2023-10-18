import Perfil from "./components/Perfil";
import Formulario from "./components/formulario";
import ReposList from "./components/ReposList";
import { useState } from "react";

function App() {
  const [nomeUsuario, setNomeUsuario ] = useState('');

  return (
    <>
      <input type="text" placeholder="Digite o seu perfil do github" onBlur={(e) => setNomeUsuario(e.target.value)} />
      
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}
    </>
  )
}

export default App
