# Car Shop API
A Trybe é uma escola de tecnologia com foco em formação de Desenvolvedores Web e o projeto Car Shop API Commerce foi proposto como atividade de aprimoramento dos estudos sobre desenvolvimento back-end utilizando Programação Orientada a Objetos e banco dados MongoDB.

## Objetivo
A aplicação desenvolvida é uma API de gerenciamento para uma concessionária de veículos, onde é possível cadastar, atualizar, remover ou visualizar um veículo do banco de dados.

## Tecnologias Utilizadas
TypeScript NodeJS Docker Express MongoDB Swagger ESlint Mocha Chai

Na elaboração deste projeto utilizou-se as seguintes ferramentas:

> NodeJS
Express
TypeScript
Docker
Mongoose
MongoDB
Arquitetura Model-Service-Controller
Testes
Mocha
Sinon
Chai

## Execução
⚠️ Para executar o projeto é necessário ter o Docker instalado em sua máquina.

Para executar a aplicação inicie realizando o clone deste repositório com o comando abaixo.

´´´git clone git@github.com:marcellsa/trybe-car-shop.git´´´
Navegue até a raíz do projeto.

´´´cd car-shop/´´´
Execute o comando para instalar as dependencias do projetos.

´´´npm install´´´
Na raíz do projeto, suba os containers do car_shop e car_shop_db com o comando abaixo

´´´docker-compose up -d´´´
Inicie o servidor com o comando abaixo

´´´npm run dev´´´
Rode os testes da aplicação usando o seguinte comando

´´´npm run test:mocha´´´
