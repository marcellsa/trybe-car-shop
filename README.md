<h1>Car Shop</h1>

> Status do Projeto: :heavy_check_mark: concluído

## 💻 Objetivo do projeto 

<p align="justify">
  Foi desenvolvido uma API com CRUD para gerenciar uma concessionária de veículosutilizando o banco de dados MongoDB através do framework do Mongoose. 
</p>

## 🛠 Tecnologias

<div>
    <img src='https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white' alt='ESlint' />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="NodeJS"/>
    <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/>
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express"/>
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
    <img src="https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white" alt="Mocha" />
    <img src="https://img.shields.io/badge/chai-A30701?style=for-the-badge&logo=chai&logoColor=white" alt="Chai" />
</div>

Neste projeto utilizou-se as seguintes ferramentas:
  
- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)
- Arquitetura Model-Service-Controller

### Testes

- [Mocha](https://mochajs.org/)
- [Sinon](https://sinonjs.org/)
- [Chai](https://www.chaijs.com/)

### Alinhamento de código

- [ESlint](https://eslint.org/)

## :warning: Dependências

Liste todas as dependencias e libs que o usuário deve ter instalado na máquina antes de rodar a aplicação 

```bash
npm install
``` 

## 🚀 Como executar o projeto

  ⚠️ Para executar o projeto é necessário ter o [Docker](https://docs.docker.com/desktop/install/linux-install/) instalado em sua máquina.
  

Para executar a aplicação inicie realizando o clone deste repositório com o comando abaixo.

    git clone git@github.com:marcellsa/car-shop.git

Navegue até a raíz do projeto.

    cd car-shop/

Execute o comando para instalar as dependencias do projetos.

    npm install
    
Na raíz do projeto, suba os containers do **car_shop** e **car_shop_db** com o comando abaixo

    docker-compose up -d

Inicie o servidor com o comando abaixo

    npm run dev
  
Rode os testes da aplicação usando o seguinte comando

    npm run test:mocha


---

Desenvolvido por [Marcel Albuquerque](www.linkedin.com/in/marcellsa), © 2023.
