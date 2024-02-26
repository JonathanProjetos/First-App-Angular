# Bem-vindo ao Projeto Lista de Pessoas
Este é um projeto full-stack desenvolvido com o objetivo de fornecer uma plataforma intuitiva para criar e gerenciar listas de pessoas. A aplicação contempla as nescessidades fornecidas neste estudo de caso [Teste técnico](https://drive.google.com/file/d/1Z7D_3Jo_CVUALLAuTq6xed4Sbg3F_NQ0/view?usp=sharing).

## Requisitos
 Para o funcionamento da aplicação, será necessário ter a versão 20 do Node.js ou superior, a versão 17 do Angular e o Docker instalados.
- O processo de versionamento do node pode ser realizado atraves deste tutorial [Pacote de versionamento Node](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide)
- Angular CLI ferramenta de interface de linha de comando que você usa para inicializar, desenvolvimento. [angular-cli](https://angular.io/cli)
- Documentação do Docker para a instalação em diversas plataformas. [Docker](https://docs.docker.com/desktop/install/windows-install/)
 <details>
<summary><strong>Back end</strong></summary><br/>

## Sumário
- [Bem-vindo ao Back end](#bem-vindo-ao-back-end)
- [Contexto](#contexto)
- [Tecnologias e Ferramentas Utilizadas](#tecnologias-e-ferramentas-utilizadas)
- [Docker](#docker)
- [Iniciar a aplicação sem o uso do Docker](#iniciar-a-aplicação-sem-o-uso-do-docker)

# Bem-vindo ao Back-end
Esta aplicação back-end foi desenvolvida para oferecer uma solução para manipular uma lista de pessoas. Utilizando Node.js, Express e MySQL, juntamente com a flexibilidade proporcionada pelo Docker.

## Contexto
O __Projeto Lista de Pessoas__ é uma ferramenta que acessa a bases de dados, é permite aos usuários:
- Listar todas as pessoas;
- Adicionar novas pessoas;
- Deleta um pessoa;

## Tecnologias e Ferramentas Utilizadas

Este projeto utiliza as seguintes tecnologias e ferramentas:

- [NodeJS](https://nodejs.org/en/) | Plataforma de execução runtime baseda em javascript.
- [Express](https://expressjs.com/pt-br/) | Framework para nodejs 
- [Mysql](https://dev.mysql.com/doc/) | Banco de dados SQL relacional.
- [Sequelize](https://sequelize.org/docs/) | ORM Object-Ralational-Mapping.

O Node.js foi utilizado com o intuito de obter os benefícios da escalabilidade e eficiência, pois ele é capaz de lidar com vários tráfegos sem bloqueio e lida com solicitações com baixo consumo de recursos. O Express é um framework para o Node.js que permite construir aplicações web robustas e escaláveis de forma mais fácil e rápida. O MySQL é um banco de dados amplamente utilizado devido a várias razões. Ele oferece desempenho eficiente e rápido, é altamente escalável e possui uma comunidade ativa que fornece suporte e recursos adicionais. Além disso, o MySQL é flexível, seguro e possui integração com tecnologias populares. O Sequelize é uma biblioteca de mapeamento objeto-relacional (ORM) para Node.js, que simplifica a interação com bancos de dados relacionais, incluindo o MySQL. Com o Sequelize, é possível mapear objetos JavaScript para tabelas e colunas no banco de dados, escrever consultas em JavaScript e gerenciar relacionamentos entre tabelas de forma fácil.

### Entities
<img src='https://drive.google.com/uc?id=1av8kgGIu6AWP81UC5Xp0t0t-Jmf4QYb4' alt='entidades'/>

### Arquivo env
- Dentro da pasta Projeto/Backend, existe o arquivo .env. O arquivo .env contém as informações de credenciais necessárias para a conexão da API com o banco de dados. As informações declaradas no .env são de vital importância para o funcionamento do Docker Compose. Caso não seja feito o uso do Docker e opte-se por utilizar o banco de dados MySQL na máquina local, as propriedades das variáveis deverão ser personalizadas conforme os critérios de autenticação do banco de dados da máquina local.

### Docker
 - O tempo de execução do docker-compose terá um acrecimo de cerca de 30 segundos devido as checagens de disponibilidade, os "Health-checks". Este recurso garantirá que tanto o banco de dados quanto a API estejam diponíveis para a execução.
 - Quando executar a aplicação usando o docker-compose up, as dependências necessárias serão instaladas. Além disso, o banco de dados será criado e as migrações serão executadas. Logo após, a aplicação será disponibilizada através do ts-node na porta 3001.
```
cd Projeto/Backend
- Caso queira acompanhar o progresso de criação dos conteiners.
docker-compose up

- Caso queira oculta toda a pilha de informação de inicialização.
docker-compose up -d
```
### Iniciar a aplicação sem o uso do Docker
```
- Reforçando, esta opção e para executar a aplicação sem o Docker, será necessário configurar o arquivo .env conforme os dados de autenticação da máquina local.

cd Projeto/Backend
npm install
npm run create
npm run dev
```

### Tests
```
cd Projeto/Backend
npm test
ou 
npm run test:coverage
```
</details>
<details>
 <summary><strong>Front end</strong></summary><br/>
 
## Sumário
- [Contexto](#contexto)
- [Tecnologias e Ferramentas Utilizadas](#tecnologias-e-ferramentas-utilizadas)
- [Instalar dependências](#instalar-dependências)
- [Executando](#executando)

## Contexto

No lado do __Frontend__, o usuário é capaz de:

- Interagir com os inputs para cadastrar uma pessoa na lista após o clique no botão 'enviar'.
- Interagir com os botões na tabela para deletar os dados da pessoa da lista e da fonte de dados.

## Preview
<img src='https://drive.google.com/uc?id=1nIWLKJvqp0SWeOAU9A9xliC0CPknLuyx' alt='tela principal'/>

## Tecnologias e Ferramentas Utilizadas

O `Frontend` foi desenvolvido com o uso das seguintes tecnologias e ferramentas:

- [Angular](https://angular.dev/overview): Utilizei o __Angular__, um *framework* `JavaScript` robusto e amplamente adotado para a criação de aplicações. O __Angular__ oferece um ecossistema completo, incluindo ferramentas para roteamento, formulários, testes unitários e *end-to-end*, entre outras funcionalidades.
- [Angular Material](https://material.angular.io/): O __Angular Material__ foi utilizado para fornecer estilos `CSS` pré-construídos e componentes de interface do usuário reutilizáveis. Isso ajudou a acelerar o processo de desenvolvimento e garantir a consistência visual em toda a aplicação. Além disso, __Angular Material__ adere aos princípios de design do __Material Design da Google__, garantindo uma experiência do usuário de alta qualidade.

### Instalar dependências

Em seguida, navegue até o diretório `Frontend` e instale as dependências necessárias com os seguintes comandos:

```bash
cd Projeto/Frontend
npm install
```
Esses comandos instalam todas as dependências listadas no arquivo `package.json`, que são necessárias para a execução do projeto.

### Executando

Para executar o projeto utilize o seguinte comando:
  
```bash
cd Projeto/Frontend
ng serve
```

Este comando inicia o servidor de desenvolvimento e o site ficará disponível na __porta 4200__, geralmente acessível através do endereço `http://localhost:4200` no navegador.

</details>

