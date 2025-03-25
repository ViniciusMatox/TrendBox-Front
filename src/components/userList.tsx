import React, { useEffect, useState } from "react";
import { User } from "../types/user"; // Importando o tipo User

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]); // Estado para os usuários
  const [loading, setLoading] = useState<boolean>(true); // Estado para loading

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/user"); // Altere a URL para o seu backend
        const data = await response.json();
        setUsers(data); // Armazena os dados no estado de users
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      } finally {
        setLoading(false); // Quando o fetch terminar, altera o estado de loading
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>; // Enquanto estiver carregando, mostra "Loading..."

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.nome}</strong> - {user.email} - {user.telefone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
