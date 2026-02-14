/**
 * Google Apps Script backend para operações com Google Sheets
 * Este script serve uma interface HTML e permite salvar/listar dados
 */

// Nome da planilha onde os dados serão armazenados
const SHEET_NAME = 'Dados';

/**
 * Função principal que serve a página HTML
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Gerenciador de Google Sheets')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Retorna a planilha ativa ou cria uma nova se não existir
 */
function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    // Adiciona cabeçalhos
    sheet.appendRow(['Timestamp', 'Nome', 'Email', 'Mensagem']);
    sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
  }
  
  return sheet;
}

/**
 * Salva os dados na planilha
 * @param {Object} data - Objeto contendo nome, email e mensagem
 * @return {Object} Resultado da operação
 */
function saveData(data) {
  try {
    const sheet = getOrCreateSheet();
    const timestamp = new Date();
    
    // Valida os dados
    if (!data.nome || !data.email || !data.mensagem) {
      return {
        success: false,
        message: 'Todos os campos são obrigatórios'
      };
    }
    
    // Adiciona nova linha com os dados
    sheet.appendRow([
      timestamp,
      data.nome,
      data.email,
      data.mensagem
    ]);
    
    return {
      success: true,
      message: 'Dados salvos com sucesso!'
    };
  } catch (error) {
    return {
      success: false,
      message: 'Erro ao salvar dados: ' + error.message
    };
  }
}

/**
 * Lista todos os dados da planilha
 * @return {Object} Resultado contendo os dados ou erro
 */
function listData() {
  try {
    const sheet = getOrCreateSheet();
    const lastRow = sheet.getLastRow();
    
    if (lastRow <= 1) {
      return {
        success: true,
        data: [],
        message: 'Nenhum registro encontrado'
      };
    }
    
    // Pega todos os dados (exceto o cabeçalho)
    const range = sheet.getRange(2, 1, lastRow - 1, 4);
    const values = range.getValues();
    
    // Formata os dados em objetos
    const timeZone = Session.getScriptTimeZone();
    const data = values.map(row => ({
      timestamp: Utilities.formatDate(new Date(row[0]), timeZone, 'dd/MM/yyyy HH:mm:ss'),
      nome: row[1],
      email: row[2],
      mensagem: row[3]
    }));
    
    return {
      success: true,
      data: data,
      message: `${data.length} registro(s) encontrado(s)`
    };
  } catch (error) {
    return {
      success: false,
      data: [],
      message: 'Erro ao listar dados: ' + error.message
    };
  }
}
