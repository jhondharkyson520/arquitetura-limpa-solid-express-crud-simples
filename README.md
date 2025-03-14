
# Projeto: Express Clean Architecture com Prisma

Este projeto é um estudo de implementação de uma aplicação RESTful utilizando o **Express** e o **Prisma**, seguindo os conceitos de **Arquitetura Limpa** (Clean Architecture). O foco é demonstrar como estruturar um projeto de forma modular, mantendo as responsabilidades bem definidas e utilizando boas práticas como SOLID e Clean Code.

## Tecnologias Utilizadas

- **Node.js** (para o ambiente de execução JavaScript)
- **Express** (framework para construção de APIs RESTful)
- **Prisma** (ORM para interagir com o banco de dados)
- **UUID** (geração de IDs únicos para usuários)
- **TypeScript** (para tipagem estática no JavaScript)
- **PostgreSQL** (banco de dados utilizado)

## Estrutura do Projeto

O projeto segue uma estrutura de pastas organizada, com cada camada sendo responsável por uma parte específica da aplicação:

```
/src
  /application
    /use-cases        # Casos de uso, ou lógica de negócio
  /domain
    /entities         # Entidades, ou modelos de dados
  /infrastructure
    /repositories     # Implementações dos repositórios, que interagem com o banco de dados
  /interfaces
    /controllers      # Controladores, que recebem as requisições HTTP e chamam os casos de uso
  /database
    /prisma-client    # Configuração do Prisma e modelos de dados
  /routes
    /user-routes      # Definição das rotas de usuário
```

### Descrição das Pastas

- **/application**: Contém a lógica de negócio, representada pelos *casos de uso*. Cada *caso de uso* é responsável por executar uma ação específica e orquestrar as interações entre as camadas.
  - Exemplo: `CreateUser` é um caso de uso responsável por criar um novo usuário no sistema.

- **/domain**: Contém as *entidades* e *modelos de dados*. Essas são as representações dos dados com os quais a aplicação trabalha.
  - Exemplo: `User` representa a entidade de um usuário no sistema.

- **/infrastructure**: Contém a implementação dos repositórios que interagem diretamente com o banco de dados. A camada de infraestrutura lida com detalhes como ORM e SQL.
  - Exemplo: `UserRepository` implementa as funções de CRUD (Create, Read, Update, Delete) para a entidade `User`.

- **/interfaces**: Contém as *interfaces* do sistema, incluindo controladores, que fazem a ponte entre as requisições HTTP e a lógica de negócio.
  - Exemplo: `createUserController` é um controlador que lida com requisições HTTP para a criação de um usuário.

- **/database**: Contém a configuração do Prisma e a definição de modelos de dados para o banco de dados.

- **/routes**: Contém a definição das rotas HTTP e como elas se conectam aos controladores.

## Arquitetura Limpa (Clean Architecture)

A aplicação segue os princípios da **Arquitetura Limpa**, um estilo de arquitetura que promove a separação de responsabilidades, facilitando a manutenção e os testes. A arquitetura é dividida em camadas:

1. **Camada de Apresentação (Interface)**: Responsável pela interação com o usuário. No caso da nossa API, são os controladores que lidam com as requisições HTTP.
2. **Camada de Aplicação (Use Cases)**: Contém a lógica de negócio e os casos de uso da aplicação. Os casos de uso são responsáveis por orquestrar as operações, mas não devem lidar com a persistência de dados.
3. **Camada de Domínio**: Contém as entidades e a modelagem de dados. As entidades representam o modelo de dados principal da aplicação.
4. **Camada de Infraestrutura**: Implementação dos repositórios, que interagem diretamente com o banco de dados. Essa camada pode ser facilmente trocada, por exemplo, se você decidir mudar o banco de dados ou usar outra tecnologia.

Essa abordagem facilita a **testabilidade**, a **manutenção** e a **escalabilidade** do projeto, pois cada camada pode ser alterada de forma independente sem afetar outras partes do código.

## SOLID

O projeto também segue os princípios de **SOLID**, que são:

1. **S** - **Single Responsibility Principle**: Cada classe tem uma única responsabilidade.
2. **O** - **Open/Closed Principle**: O código é aberto para extensão, mas fechado para modificação.
3. **L** - **Liskov Substitution Principle**: Objetos de uma classe derivada devem ser substituíveis por objetos da classe base.
4. **I** - **Interface Segregation Principle**: Interfaces menores e específicas são preferíveis a interfaces grandes.
5. **D** - **Dependency Inversion Principle**: As classes de alto nível não devem depender de classes de baixo nível. Ambas devem depender de abstrações.

A interface `UserRepository` é um exemplo de aplicação do **Dependency Inversion Principle**, pois ela abstrai a camada de persistência e permite que o código de aplicação dependa de um contrato em vez de uma implementação específica (como Prisma ou SQLite).

## Como Rodar o Projeto

### Requisitos

- Node.js (versão 16 ou superior)
- PostgreSQL ou SQLite (dependendo da configuração do banco de dados)

### Passos para Rodar

1. **Clonar o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instalar as dependências**:
   ```bash
   npm install
   ```

3. **Configurar o banco de dados**:
   - Para PostgreSQL: Crie uma instância do banco de dados e configure a URL de conexão no arquivo `.env`.
   - Para SQLite: A configuração será diferente, e o Prisma gerará um banco SQLite local.

4. **Executar as migrações do Prisma**:
   ```bash
   npx prisma migrate dev
   ```

5. **Rodar o servidor**:
   ```bash
   npm run dev
   ```

Agora você pode acessar a API localmente na URL `http://localhost:3000`.

## Endpoints da API

### `POST /users/create`

- Cria um novo usuário.
- **Body**:
  ```json
  {
    "name": "Nome do Usuário",
    "email": "email@dominio.com"
  }
  ```

- **Resposta**:
  ```json
  {
    "id": "uuid-do-usuario",
    "name": "Nome do Usuário",
    "email": "email@dominio.com"
  }
  ```

### `GET /users/get`

- Retorna todos os usuários cadastrados.
  
### `DELETE /users/delete/:id`

- Deleta o usuário pelo ID.

### `PUT /users/update/:id`

- Atualiza as informações de um usuário específico.

## Conclusão

Este projeto é um exemplo simples, mas poderoso, de como organizar e estruturar um projeto Node.js/Express utilizando Arquitetura Limpa, SOLID e boas práticas de desenvolvimento. Ao seguir esses conceitos, é possível criar aplicações escaláveis e de fácil manutenção.

---

### Autor

Este projeto foi criado como parte de um estudo para entender e aplicar conceitos de Arquitetura Limpa, SOLID, Clean Code e outras boas práticas em aplicações Node.js/Express.
