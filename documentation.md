Documentação do Projeto de Teste Automatizado com Playwright

Estrutura do Projeto

/desafioAuvo
├── pages
│ ├── cart.page.js # Manipulação do carrinho de compras
│ ├── checkout.page.js # Manipulação do fluxo de checkout
│ ├── login.page.js # Manipulação do login
│ └── products.page.js # Manipulação dos produtos
├── tests
│ └── e2e.spec.js # Especificações de teste E2E
├── node_modules # Dependências do Node.js
├── .gitignore # Arquivos e pastas a serem ignorados pelo Git
├── package.json # Configuração e dependências do projeto
├── package-lock.json # Lockfile para consistência de dependências
├── playwright.config.js # Configuração do Playwright
└── test-results # Resultados gerados pelos testes

Descrição dos Arquivos

1. CartPage
   Este arquivo contém a classe responsável por gerenciar ações relacionadas ao carrinho de compras.
   Principais Métodos:
   navigateToCart(): Acessa o carrinho de compras.
   validateCartItem(title, price): Valida se o item no carrinho possui título e preço corretos.
   proceedToCheckout(): Prossegue para o checkout.

2. CheckoutPage
   Gerencia as ações realizadas na página de checkout.
   Principais Métodos:
   fillCheckoutDetails(firstName, lastName, postalCode): Preenche os dados necessários para o checkout.
   completeCheckout(): Finaliza a compra.
   validateConfirmation(): Valida se a mensagem de confirmação aparece após a finalização.

3. LoginPage
   Realiza ações relacionadas ao login no sistema.
   Principais Métodos:
   navigate(): Navega até a página inicial.
   login(username, password): Efetua o login com as credenciais fornecidas.

4. ProductsPage
   Gerencia os produtos na página de listagem.
   Principais Métodos:
   validateProduct(title, price): Valida se o produto possui título e preço corretos.
   addToCart(): Adiciona o produto ao carrinho.

5. e2e.spec.js
   Este arquivo contém o teste E2E que cobre todo o fluxo do e-commerce.
   Fluxo Testado:
   Login no sistema.
   Validação e adição de um produto ao carrinho.
   Validação do carrinho e progresso para o checkout.
   Preenchimento dos dados de checkout e finalização da compra.
   Validação da mensagem de confirmação.

6. playwright.config.js
   testDir: Define o diretório onde os testes E2E estão localizados.

fullyParallel: Quando true, os testes são executados em paralelo, o que pode reduzir o tempo de execução total.

forbidOnly: Se habilitado, impede que testes com test.only sejam executados em ambientes de integração contínua (CI), garantindo que todos os testes sejam executados.

retries: No CI, os testes falhos serão executados até 2 vezes. Em ambientes locais, não há tentativas adicionais.

workers: Define o número de workers (processos paralelos) que executam os testes. No CI, será configurado para 1, enquanto localmente o número de workers pode ser maior.

reporter: O formato de relatório definido é html, o que gera um relatório visual em HTML dos resultados dos testes.

use: Contém configurações compartilhadas para todos os testes, como trace, que grava o trace do teste ao tentar uma nova execução em caso de falha.

projects: Aqui são definidos os projetos para cada navegador que será testado (Chromium, Firefox, WebKit). Cada projeto está configurado para usar o perfil de desktop do navegador correspondente.

webServer (comentado): Caso seja necessário rodar um servidor local para os testes, essa configuração permite definir o comando para iniciar o servidor e a URL de acesso.

Executando os Testes

Instale as dependências:
npm init playwright@latest

O Playwright baixará os navegadores necessários e também criará os seguintes arquivos.

Execute os testes:
npx playwright test

Para rodar testes em modo visual:
npx playwright test --ui
