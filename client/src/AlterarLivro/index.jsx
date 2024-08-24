import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UpdateLivro() {
  const [id, setId] = useState('');
  const [livro, setLivro] = useState('');
  const [autor, setAutor] = useState('');
  const [editora, setEditora] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const atualizacao = { livro, autor, editora };

    try {
      const response = await fetch(`http://localhost:5000/matriculas/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(atualizacao),
      });
      if (response.ok) {
        alert('Livro atualizado com sucesso!');
        navigate("/livros");
      } else {
        alert('Erro ao atualizar livro.');
      }
    } catch (error) {
      console.error('Erro ao atualizar livro:', error);
    }
  };

  return (
    <div className='container'>
    <form  className="form-container" onSubmit={handleSubmit}>
      <h2>Atualizar Livro</h2>
      <input
        type="text"
        placeholder="ID do Livro"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nome do Livro"
        value={livro}
        onChange={(e) => setLivro(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Autor"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Editora"
        value={curso}
        onChange={(e) => setEditora(e.target.value)}
        required
      />
      <button type="submit">Atualizar Livro<Livro></Livro></button>
    </form>
    </div>
  );
}
