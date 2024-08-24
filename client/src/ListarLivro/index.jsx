import { useEffect, useState } from 'react';
import '../globals.css';

export default function ReadLivros() {
  const [livros, setLivros] = useState([]);


  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const response = await fetch('http://localhost:5000/matriculas');
        const data = await response.json();
        setLivros(data);
      } catch (error) {
        console.error('Erro ao buscar os livros:', error);
      }
    };

    fetchLivros();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/matriculas/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {

        setLivros(livros.filter((livro) => livro._id !== id));
        alert('Livro excluído com sucesso!');
      } else {
        alert('Erro ao excluir livro.');
      }
    } catch (error) {
      console.error('Erro ao excluir livro:', error);
    }
  };

  return (
    <div className='container'>
      <h2>Lista de Livros</h2>
      <table  className="table-container" border="1">
        <thead>
          <tr>
            <th>Código Livro</th>
            <th>Nome do Livro</th>
            <th>Autor</th>
            <th>Editora</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {matriculas.map((matricula) => (
            <tr key={matricula._id}>
              <td>{matricula._id}</td>
              <td>{matricula.aluno}</td>
              <td>{matricula.turma}</td>
              <td>{matricula.curso}</td>
              <td>
                <button onClick={() => handleDelete(matricula._id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
