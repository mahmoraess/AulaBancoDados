import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import CreateLivro from './CadastrarLivro'
import ReadLivros from './ListarLivro'
import UpdateLivro from './AlterarLivro'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
            <Routes>
                  <Route path="/" element={ <Home/> }/>
                  <Route path="/livro/cadastrar" element={ <CreateLivro/> }/>
                  <Route path="/livros" element={ <ReadLivros/> }/>
                  <Route path="/livros/alterar" element={ <UpdateLivro/>}/>
            </Routes> 
      </BrowserRouter>
  </React.StrictMode>,
)



