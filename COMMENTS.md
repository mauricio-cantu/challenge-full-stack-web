# Challenge Grupo A Educação

## Arquitetura do servidor

No servidor utilizei uma estrutura que separa as responsabilidades entre <strong>Rotas</strong>, <strong>Serviços</strong> e <strong>Repositório</strong>. As rotas recebem as requisições, validam o preenchimento correto dos inputs e invocam o Service apropriado para a requisição. O service, por sua vez, valida as regras de negócio da aplicação e, caso esteja tudo certo, o repositório é invocado para realizar a persistência dos dados. Essa é uma arquiterura que estou acostumado e que acho que aplica de forma eficaz o princípio de SoC (Separation of Concerns).
Para persistência, foi utilizado o banco de dados Postgres. Para comunicação entre servidor e banco de dados, foi utilizado o Query Builder Knex.

### Endpoints

Todas as respostas são enviadas em formato JSON.

- <code>GET "/students":</code> retorna array com todos os estudantes cadastrados. 
- <code>GET "/students/:RA":</code> retorna o objeto de estudante com o RA passado por parâmetro.
- <code>POST "/students":</code> retorna o RA do aluno cadastrado em caso de sucesso ou objeto de erro em caso contrário.
- <code>PUT "/students/:RA":</code> retorna o RA do aluno alterado em caso de sucesso ou objeto de erro em caso contrário.
- <code>DELETE "/students/:RA":</code> retorna o RA do aluno deletado em caso de sucesso ou objeto de erro em caso contrário.

Os objetos de erro servem para detalhar o que houve de errado no processamento da requisição. Estes objetos contem as seguintes propriedades:

- status: código HTTP da resposta
- errorCode: <code>"missing-fields"</code> em caso de campos obrigatórios não preenchidos, ou <code>"invalid-fields"</code> em caso de valores inválidos (email inválido, por exemplo)
- erroDetail: array com detalhe de cada erro. No caso de "missing-fields", array com os names dos inputs. No caso de "invalid-fields", array com detalhamento de quais informações são inválidas.

## Bibliotecas utilizadas no projeto

- Knex
- Express
- PG
- Vuetify
- Axios
- Sweetalert 2

## O que eu melhoraria

- A responsividade e design em geral do front-end.
- A listagem dos estudantes na página principal, adicionando busca e paginação.
- A estrutura de arquivos do projeto do front-end.

## Requisitos não entregues

- Busca na listagem dos estudantes.
- Validação e tratamento de erros nos forms da aplicação.
