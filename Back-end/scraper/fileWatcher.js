const fs = require('fs');
const { exec } = require('child_process');

// Pasta onde estão os arquivos de faturas
const pastaFaturas = './faturas';

// Função para executar o scraper no novo arquivo adicionado
function executarScraper(nomeArquivo) {
  console.log(`Novo arquivo adicionado: ${nomeArquivo}`);
  
  // Executar o scraper.js com o novo arquivo como argumento
  exec(`node scraper/scraper.js ${pastaFaturas}/${nomeArquivo}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar o scraper: ${error.message}`);
      return;
    }
    console.log(`Saída do scraper: ${stdout}`);
  });
}

// Monitorar a pasta de faturas para detectar novos arquivos
fs.watch(pastaFaturas, (eventType, nomeArquivo) => {
  if (eventType === 'rename') {
    // Evento 'rename' é acionado quando um novo arquivo é adicionado
    executarScraper(nomeArquivo);
  }
});
