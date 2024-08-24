const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();

app.use(cors());

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
let collection;

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('livros');
    collection = db.collection('livros');

  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
}

connectDB();

app.use(express.json()); 


app.post('/livros', async (req, res) => {
  try {
    const novoLivro = req.body;
    
    const result = await collection.insertOne(novoLivro);
    
    res.status(201).json({ message: 'Livro criada com sucesso', livroId: result.insertedId });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao cadastrar livro', error: err });
  }
});

app.get('/livros', async (req, res) => {
  try {

    const livros = await collection.find().toArray();

    res.status(200).json(livros);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar livros', error: err });
  }
});

const { ObjectId } = require('mongodb');

app.get('/livros/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newId =  new ObjectId(id);

    const livro = await collection.findOne({ _id: newId });

    if (!livro) {
      res.status(404).json({ message: 'Livro não encontrado' });
    } else {
      res.status(200).json(livro);
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar livro', error: err });
  }
});

app.put('/livros/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newId =  new ObjectId(id);
    const atualizacao = req.body;

    const result = await collection.updateOne( { _id: newId }, { $set: atualizacao });

    if (result.matchedCount === 0) {
      res.status(404).json({ message: 'Livro não encontrado' });
    } else {
      res.status(200).json({ message: 'Livro atualizado com sucesso' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar livro', error: err });
  }
});

app.delete('/livros/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newId =  new ObjectId(id);

    const result = await collection.deleteOne({ _id: newId });

    if (result.deletedCount === 0) {
      res.status(404).json({ message: 'Livro não encontrado' });
    } else {
      res.status(200).json({ message: 'Livro excluído com sucesso' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao excluir livro', error: err });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
