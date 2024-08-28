import { useState } from 'react';
import '../globals.css';
import { useNavigate } from 'react-router-dom';


export default function CreateLivro() {
  const [livro, setLivro] = useState('');
  const [autor, setAutor] = useState('');
  const [editora, setEditora] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const novoLivro = { livro, autor, editora };

    try {
      const response = await fetch('http://localhost:5000/livros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoLivro),
      });
      if (response.ok) {
        alert('Livro cadastrado com sucesso!');
        setLivro('');
        setAutor('');
        setEditora('');
        navigate("/livros");
      } else {
        alert('Erro ao criar livro.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar livro:', error);
    }
  };

  return (
    <div className='container'>
    <form  className="form-container" onSubmit={handleSubmit}>
      <h2>Cadastrar Livro</h2>
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
        value={editora}
        onChange={(e) => setEditora(e.target.value)}
        required
      />
      <button type="submit">Cadastrar Livro</button>
    </form>
    </div>
  );
}
