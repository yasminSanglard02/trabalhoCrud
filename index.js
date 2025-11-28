import express from 'express';
import usuarioRouters from "./src/routes/usuarios.routes.js";

const app = express();

app.use(express.json());
app.use(usuarioRouters);

app.get('/ola_mundo', (req, res) => {
  res.send('Olá mundo');
})

// METHOD => GET, POST, PUT/PATCH, DELETE
// GET       para listar
// POST      para salvar
// PUT/PATCH para editar
// DELETE    para deletar
// NAME =>   / Nome da rota sempre no plural
// Callback functions => Onde executamos todo o nosso backend(lógica, regra de negócio)

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});