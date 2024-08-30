import { Link } from 'react-router-dom';
import '../globals.css';

export default function Home() {
    return (
        <div class="imagem-container">
            <div id="imagem">

            </div>
        <div className='container-imagem'>
            <h2>⋅˚₊‧ ୨୧ ‧₊˚ ⋅Livraria YM⋅˚₊‧ ୨୧ ‧₊˚ ⋅</h2>
            <div className="card-container">
                <Link to="/livro/cadastrar" className="card">
                    <div>Registrar Livro</div>
                </Link>
                <Link to="/livros" className="card">
                    <div>Lista de Livro</div>
                </Link>
                <Link to="/livros/alterar" className="card">
                    <div>Editar Livro<livro></livro></div>
                </Link>
            </div>
        </div>
        </div>
    );
}
