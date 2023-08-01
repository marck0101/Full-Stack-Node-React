const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 3333; 

// Configuração do banco de dados
const pool = new Pool({
  user: "marck0101",
  host: "localhost",
  database: "teste_fullstack",
  password: "0000",
  port: 5432, // Porta padrão do PostgreSQL
});

// Middleware para permitir a leitura do corpo das solicitações POST como JSON
app.use(express.json());

// Rota para receber os dados da aplicação Node.js
app.post("/dados-fatura", async (req, res) => {
  try {
    // Aqui pode acessar os dados enviados pela aplicação Node.js através de req.body
    const dadosFatura = req.body;

    // Preparar os dados para inserção no banco de dados (exemplo)
    const { numeroCliente, valorAPagar } = dadosFatura;

    // Query para inserir os dados no banco de dados
    const query =
      "INSERT INTO tabela_faturas (numero_cliente, valor_a_pagar) VALUES ($1, $2)";
    const values = [numeroCliente, valorAPagar];

    // Executar a inserção dos dados no banco de dados
    await pool.query(query, values);

    res
      .status(201)
      .send(
        "Dados da fatura recebidos e inseridos no banco de dados com sucesso!"
      );
  } catch (error) {
    console.error("Erro ao receber e inserir dados:", error);
    res.status(500).send("Erro ao receber e inserir dados no banco de dados.");
  }
});

// Iniciar o servidor da API
app.listen(port, () => {
  console.log(`Servidor da API rodando na porta ${port}`);
});
