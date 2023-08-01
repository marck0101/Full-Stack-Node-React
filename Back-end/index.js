// const express = require('express');
// const pool = require('./db'); // Importe a conexão com o banco de dados configurada no db.js

// const app = express();
// const PORT = 3000;

// // Rota para buscar todos os usuários do banco de dados
// app.get('/usuarios', async (req, res) => {
//   try {
//     const query = 'SELECT * FROM usuarios'; // Substitua "usuarios" pelo nome da tabela no seu banco de dados
//     const result = await pool.query(query);
//     res.status(200).json(result.rows);
//   } catch (err) {
//     console.error('Erro ao buscar usuários: ', err);
//     res.status(500).json({ error: 'Erro interno do servidor' });
//   }
// });

// // Rota padrão
// app.get('/', (req, res) => {
//   res.send('Servidor Node.js está funcionando!');
// });

// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);
// });
const express = require('express');
const { pool, createTable } = require('./db'); // Importe a conexão com o banco de dados e a função para criar a tabela

const app = express();
const PORT = 3000;

// Criar a tabela "faturas_energia" assim que a conexão com o banco de dados for estabelecida
(async () => {
  await createTable();
})();

// Resto do seu código do servidor continua abaixo...
