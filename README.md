Projeto de Teste Automatizado com Playwright

DESCRIÇÃO
Este repositório contém uma Prova de Conceito (POC) de automação de testes web para validar o fluxo de cadastro e pesquisa de produtos em um site público de e-commerce fictício, utilizando o Playwright. 
A solução foi projetada com foco na arquitetura Page Object Model (POM), garantindo manutenibilidade e organização.

TECNOLOGIAS UTILIZADAS
- Playwright: Framework de automação de testes.
- JavaScript: Linguagem de programação utilizada para escrever os testes.
- Node.js: Ambiente de execução.

FLUXO TESTADO
O projeto cobre os seguintes cenários:

1 - Login: Autenticação na aplicação com credenciais fornecidas.
2 - Navegação e Pesquisa: Acesso à página de produtos e pesquisa de itens.
3 - Validação do Produto: Seleção e verificação do título, preço e descrição do produto.
4 - Adicionar ao Carrinho e Checkout: Adição do produto ao carrinho, verificação e progresso para a tela de checkout.
5 - Finalização de Pedido: Preenchimento de dados de checkout e finalização do pedido.

ESTRUTURA DO PROJETO
/desafioAuvo
├── pages
│   ├── cart.page.js           # Manipulação do carrinho de compras
│   ├── checkout.page.js       # Manipulação do fluxo de checkout
│   ├── login.page.js          # Manipulação do login
│   └── products.page.js       # Manipulação dos produtos
├── tests
│   └── e2e.spec.js            # Especificações de teste E2E
├── node_modules               # Dependências do Node.js
├── .gitignore                 # Arquivos e pastas a serem ignorados pelo Git
├── package.json               # Configuração e dependências do projeto
├── package-lock.json          # Lockfile para consistência de dependências
├── playwright.config.js       # Configuração do Playwright
└── test-results               # Resultados gerados pelos testes

DETALHE DOS ARQUIVOS

pages/cart.page.js
° navigateToCart(): Acessa o carrinho de compras.
° validateCartItem(title, price): Valida título e preço do item no carrinho.
° proceedToCheckout(): Prossegue para o checkout.

pages/checkout.page.js
° fillCheckoutDetails(firstName, lastName, postalCode): Preenche os dados de checkout.
° completeCheckout(): Finaliza a compra.
° validateConfirmation(): Valida a mensagem de confirmação.

pages/login.page.js
° navigate(): Navega até a página inicial.
° login(username, password): Efetua login com as credenciais fornecidas.

pages/products.page.js
° validateProduct(title, price): Valida título e preço de produtos.
° addToCart(): Adiciona o produto ao carrinho.

tests/e2e.spec.js
° Fluxo completo do teste E2E: login, seleção de produto, validação do carrinho, checkout e finalização do pedido.

playwright.config.js
Configurações do Playwright para execução dos testes:
° testDir: Diretório dos testes.
° fullyParallel: Habilita execução paralela.
° retries: Define tentativas extras para testes falhos (2 no CI, 0 local).
° reporter: Gera relatórios em HTML.
° projects: Configuração para navegadores (Chromium, Firefox, WebKit).

INSTALAÇÃO E EXECUÇÃO

1 - Clone o repositório
  ° git clone <URL_DO_REPOSITORIO>
  ° cd desafioAuvo
2 - Instale as dependências:
  ° npm install
3 - Para executar os testes em modo interativo:
  ° npx playwright test --ui

DECISÕES DE DESIGN

- Page Object Model (POM): Implementado para separar a lógica dos elementos da interface dos cenários de teste, facilitando a manutenção.
- Execução Paralela: Configurada para reduzir o tempo de execução.
- Relatório em HTML: Implementado para melhor visualização dos resultados

 Desenvolvido por: Dimitri Barros
