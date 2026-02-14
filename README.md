# Meu Google Sheets - Interface Web

Uma aplicação web simples para gerenciar dados em Google Sheets usando Google Apps Script como backend.

## 📋 Descrição

Este projeto fornece uma interface HTML com CSS básico para operar uma Google Sheet através do Google Apps Script. A aplicação permite aos usuários inserir, salvar e visualizar dados armazenados em uma planilha do Google Sheets.

## ✨ Funcionalidades

- **Formulário de Entrada**: Campos para Nome, Email e Mensagem
- **Salvar Dados**: Botão que envia os dados para a planilha do Google Sheets
- **Listar Dados**: Botão que exibe todos os registros salvos na planilha
- **Validação**: Validação de campos obrigatórios e formato de email
- **Interface Responsiva**: Design moderno com CSS básico e gradientes
- **Feedback Visual**: Mensagens de sucesso/erro para cada operação

## 📁 Estrutura do Projeto

```
meu-google-sheets/
├── Code.gs           # Backend Google Apps Script
├── index.html        # Interface HTML com CSS e JavaScript
├── appsscript.json   # Configuração do projeto Apps Script
└── README.md         # Este arquivo
```

## 🚀 Como Usar

### 1. Criar um Novo Google Apps Script

1. Acesse [Google Sheets](https://sheets.google.com) e crie uma nova planilha
2. No menu, clique em **Extensões** > **Apps Script**
3. Isso abrirá o editor do Google Apps Script

### 2. Adicionar os Arquivos

1. **Code.gs**: 
   - Delete o código padrão
   - Copie e cole o conteúdo do arquivo `Code.gs` deste repositório

2. **index.html**:
   - Clique no botão **+** ao lado de "Arquivos"
   - Selecione **HTML**
   - Nomeie como `index`
   - Copie e cole o conteúdo do arquivo `index.html` deste repositório

3. **appsscript.json**:
   - Clique no ícone de engrenagem (⚙️) no menu lateral
   - Marque a opção "Mostrar arquivo de manifesto appsscript.json no editor"
   - Substitua o conteúdo pelo arquivo `appsscript.json` deste repositório

### 3. Implantar a Aplicação

1. Clique em **Implantar** > **Nova implantação**
2. Clique no ícone de engrenagem (⚙️) ao lado de "Selecione o tipo"
3. Escolha **Aplicativo da Web**
4. Configure:
   - **Descrição**: "Gerenciador Google Sheets" (ou qualquer nome)
   - **Executar como**: Eu (seu email)
   - **Quem tem acesso**: Qualquer pessoa (ou conforme sua necessidade)
5. Clique em **Implantar**
6. Autorize o aplicativo quando solicitado
7. Copie a URL do aplicativo da web fornecida

### 4. Acessar a Aplicação

- Abra a URL copiada no navegador
- Você verá a interface com o formulário
- Preencha os campos e clique em **Salvar** para adicionar dados
- Clique em **Listar** para ver todos os registros salvos

## 💻 Funcionalidades Técnicas

### Backend (Code.gs)

- **doGet()**: Serve a página HTML
- **saveData(data)**: Salva dados na planilha com timestamp
- **listData()**: Retorna todos os dados da planilha
- **getOrCreateSheet()**: Cria a planilha "Dados" se não existir

### Frontend (index.html)

- **Formulário HTML**: Campos para Nome, Email e Mensagem
- **CSS Responsivo**: Design moderno com gradientes e animações
- **JavaScript**: Comunicação assíncrona com o backend usando `google.script.run`
- **Validação**: Validação de campos e formato de email
- **Carregamento Automático**: Lista de dados carregada automaticamente ao abrir

## 🎨 Interface

A interface possui:
- Design moderno com gradiente roxo/azul
- Campos de formulário estilizados
- Botões com hover effects
- Mensagens de feedback (sucesso/erro)
- Lista de registros com cards estilizados
- Layout responsivo
- Emojis para melhor UX

## 📊 Estrutura da Planilha

A planilha "Dados" criada automaticamente possui as seguintes colunas:

| Timestamp | Nome | Email | Mensagem |
|-----------|------|-------|----------|
| Data/Hora | Nome do usuário | Email do usuário | Mensagem enviada |

## 🔒 Segurança

- Validação de dados no frontend e backend
- Verificação de campos obrigatórios
- Validação de formato de email
- Tratamento de erros em todas as operações

## 🛠️ Tecnologias

- **Google Apps Script**: Backend em JavaScript
- **HTML5**: Estrutura da página
- **CSS3**: Estilização e design responsivo
- **JavaScript**: Lógica do frontend e comunicação com backend
- **Google Sheets API**: Armazenamento de dados

## 📝 Notas

- A aplicação cria automaticamente a planilha "Dados" na primeira execução
- Todos os registros incluem um timestamp automático
- A lista de dados é ordenada do mais antigo para o mais recente
- É possível ter múltiplos usuários acessando simultaneamente

## 🤝 Contribuindo

Sinta-se à vontade para fazer fork, modificar e enviar pull requests!

## 📄 Licença

Este projeto é de código aberto e está disponível para uso livre.