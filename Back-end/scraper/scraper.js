const fs = require("fs");
const pdfParse = require("pdf-parse");
const axios = require("axios");
const path = require("path");

const pastaFaturas = "./faturas";

// Função para buscar valor em texto com regex e tratar espaços e caracteres especiais
function findValueInText(text, regex) {
  const match = text.match(regex);
  if (match && match[1]) {
    return match[1].replace(/\D/g, "").replace(",", ".");
  }
  return "Não encontrado";
}

// Expressões regulares para localizar os padrões
const regexValorAPagar = /TOTAL\s+([\d.,]+)/;
const regexNumeroCliente = /Nº DA INSTALAÇÃO\s+(\d+)/;
const regexMesReferencia =
  /MÊS\/ANOCons\. kWhMédia kWh\/DiaDias\n([A-Z][a-z]{2}\/\d{2,4})/i;
const regexDataVencimento = /(\d{2}\/\d{2}\/\d{4})/;
const regexNumeroInstalacao = /Nº DA INSTALAÇÃO\s+(\d+)/;
const regexEnergiaEletrica =
  /Energia Elétrica\s*kWh\s+(\d{1,3}(?:\.\d{3})*(?:,\d+)?)\s+(\d+,\d+)/i;
const regexEnergiaInjetadaHFP =
  /Energia injetada HFPkWh\s+(\d+)\s+(-?[\d.,]+)\s+(-?[\d.,]+)/i;
const regexEnCompSICMS =
  /En comp. s\/ ICMSkWh\s+(\d+)\s+(-?[\d.,]+)\s+(-?[\d.,]+)/i;
const regexContribIlumPublica =
  /Contrib\s+Ilum\s+Publica\s+Municipal\s+([\d.,]+)/;

// Expressões regulares para a tabela de valores faturados
const regexLinhasTabela =
  /\| (.*?)\s*\| (.*?)\s*\| (.*?)\s*\| (.*?)\s*\| (.*?)\s*\| (.*?)\s*\| (.*?)\s*\| (.*?)\s*\| (.*?)\s*\| (.*?)\s*\|/g;

function extractValoresFaturados(text) {
  const lines = text.split(/\r?\n/); // Dividir o texto em linhas
  const valoresFaturados = [];
  let total = "Não encontrado";

  let inValoresFaturadosSection = false;
  for (const line of lines) {
    if (line.includes("Valores Faturados")) {
      inValoresFaturadosSection = true;
    } else if (line.includes("TOTAL")) {
      inValoresFaturadosSection = false;
      total = line.match(/TOTAL.*?(\d+,\d+)/i)[1].replace(",", ".");
    } else if (inValoresFaturadosSection && /\d+,\d+/.test(line)) {
      const [item, unid, quant, precoUnit, valor] = line.split(/\s+/);
      valoresFaturados.push({
        item,
        unidade: unid,
        quantidade: quant,
        precoUnit: precoUnit.replace(",", "."),
        valor: valor.replace(",", "."),
      });
    }
  }

  return { valoresFaturados, total };
}

async function extractDataFromPDF(pdfFilePath) {
  try {
    const pdfBuffer = fs.readFileSync(pdfFilePath);
    const pdfData = await pdfParse(pdfBuffer);
    const extractedText = pdfData.text;

    const cleanExtractedText = extractedText.replace(/\s{2,}/g, " ");

    // Capturar as informações
    const numeroCliente = findValueInText(
      cleanExtractedText,
      regexNumeroCliente
    );
    const mesReferencia = findValueInText(
      cleanExtractedText,
      regexMesReferencia
    );
    const kWhEnergiaEletrica = findValueInText(
      cleanExtractedText,
      regexEnergiaEletrica
    );
    const kWhEnergiaInjetadaHFP = findValueInText(
      cleanExtractedText,
      regexEnergiaInjetadaHFP
    );
    const kWhEnCompSICMS = findValueInText(
      cleanExtractedText,
      regexEnCompSICMS
    );
    const valorContribIlumPublica = findValueInText(
      cleanExtractedText,
      regexContribIlumPublica
    );
    const valorAPagar = findValueInText(cleanExtractedText, regexValorAPagar);
    const numeroInstalacao = findValueInText(
      cleanExtractedText,
      regexNumeroInstalacao
    );
    const dataVencimento = findValueInText(
      cleanExtractedText,
      regexDataVencimento
    );

    // Extrair e imprimir a tabela de valores faturados
    const resultValoresFaturados = extractValoresFaturados(cleanExtractedText);
    if (resultValoresFaturados) {
      const { valoresFaturados, total } = resultValoresFaturados;
      console.log("Valores Faturados:");
      console.table(valoresFaturados);
      if (total) {
        console.log("Total:", total);
      } else {
        console.log("Total não encontrado.");
      }

      // Preparar os dados para enviar à API
      const dataToSend = {
        numeroCliente,
        mesReferencia,
        kWhEnergiaEletrica,
        kWhEnergiaInjetadaHFP,
        kWhEnCompSICMS,
        valorContribIlumPublica,
        valorAPagar,
        numeroInstalacao,
        dataVencimento,
        valoresFaturados,
        total,
      };

      // Enviar os dados para a API usando o método POST do Axios
      try {
        const apiUrl = "http://localhost:3000/dados-fatura"; // Substitua pela URL da sua API
        const response = await axios.post(apiUrl, dataToSend);

        console.log("Dados enviados com sucesso para a API!");
        console.log("Resposta da API:", response.data);
      } catch (error) {
        console.error("Erro ao enviar dados para a API:", error.message);
      }
    } else {
      console.log("Valores Faturados não encontrados.");
    }
  } catch (error) {
    console.error("Erro ao extrair dados do PDF:", error);
  }
}

// Função para ler todos os arquivos PDF em uma pasta e executar a extração
async function readAndExtractAllPDFs() {
  try {
    const files = fs.readdirSync(pastaFaturas);
    for (const file of files) {
      if (path.extname(file).toLowerCase() === ".pdf") {
        const pdfFilePath = path.join(pastaFaturas, file);
        console.log(`Extraindo dados do arquivo: ${pdfFilePath}`);
        await extractDataFromPDF(pdfFilePath);
        console.log("=================================================");
      }
    }
  } catch (error) {
    console.error("Erro ao ler a pasta de faturas:", error);
  }
}

readAndExtractAllPDFs();
