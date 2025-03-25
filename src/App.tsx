import React from "react";
import UserList from "./components/UserList"; // Importe o componente UserList

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Bem-vindo ao TrendBox</h1>
      <UserList /> {/* Renderiza a lista de usuários */}
    </div>
  );
};

export default App;
