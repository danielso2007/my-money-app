# BACKEND

## Instalação do produção

- [Expressjs](https://expressjs.com/pt-br/)
- [Mongoosejs](https://mongoosejs.com/)
- [Body-parser](https://www.npmjs.com/package/body-parser)
- [Lodash](https://lodash.com/)
- [Mongoose-paginate](https://github.com/edwardhotchkiss/mongoose-paginate)
- [Express-query-int](https://www.npmjs.com/package/express-query-int)
- [Node-restful](https://github.com/baugarten/node-restful)
- [PM2](http://pm2.keymetrics.io/) `Gerente de processo de produção avançado para o Node.js`

```shell
npm i --save express
npm i --save mongoose
npm i --save body-parser
npm i --save lodash
npm i --save mongoose-paginate
npm i --save express-query-int
npm i --save node-restful
npm i --save pm2
```

## Instalação do desenvolvimento

- [Nodemon](https://nodemon.io/)

```shell
npm i --save-dev nodemon
```

## Rodando backend em segundo plano

```shell
nohup node loader.js > output.log &
```
### Matando processo

```shell
ps -ef | grep loader.js
```

## Rodando como serviço no linux

- Crie um arquivo chamado `my-money-app-backend.service`
- Adicione o conteúdo abaixo:
```shell
[Unit]
Description=My money app backend

[Service]
[Unit]
Description=My money app backend

[Install]
WantedBy=multi-user.target

[Service]
WorkingDirectory=/home/FASOLTI/daniel.oliveira/desenv/estudo_react_webpack/my-money-app
Type=forking
Restart=always
ExecStart=/home/FASOLTI/daniel.oliveira/desenv/estudo_react_webpack/my-money-app nodemon
KillMode=process
```
- Observe: backend/src/loader.js deve ter `#!/usr/bin/env node` na primeira linha
- Copie seu arquivo de serviço para o `/etc/systemd/system`
- Comece com `systemctl start my-money-app-backend`.
- Ativá-lo para ser executado na inicialização com `systemctl enable my-money-app-backend`.
- Veja os logs com `journalctl -u my-money-app-backend`

## Teste REST POSTMAN
- POST
- Body: x-www-form-urlencoded
- http://localhost:3003/api/billingCycles

```
name: Março/18
month: 3
year: 2018
debts[0][name]: Condomínio
debts[0][value]: 452.98
debts[1][name]: Aluguel
debts[1][value]: 1375.98
credi[0][name]: Telefone
debts[0][value]: 2369
debts[0][status]: PAGO
```

## Consultando com paginação e ordenação

http://localhost:3003/api/billingCycles?skip=0&limit=3&sort=month


# Autenticação

- [bcrypt](https://www.npmjs.com/package/bcrypt)

bcrypt é uma função hash de senhas projetada por Niels Provos e David Mazières, baseada na cifra Blowfish e apresentada na USENIX em 1999. [1] Além de incorporar um salt para proteger contra ataques rainbow table attacks , o bcrypt é uma função adaptativa: com o tempo, a contagem de iteração pode ser aumentada para torná-lo mais lento, por isso, permanece resistente a ataques de busca de força bruta, mesmo com o aumento do poder de computação.

- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

O JSON Web Token (JWT) é um meio compacto e seguro de URL para representar alega ser transferido entre duas partes. As reivindicações em um JWT são codificados como um objeto JSON que é usado como carga útil de um JSON
Estrutura de Assinatura da Web (JWS) ou como texto simples de uma Web JSON Criptografia (JWE), permitindo que as solicitações sejam digitalmente assinado ou protegido por integridade com um Código de Autenticação de Mensagem (MAC) e / ou criptografados.

### Para Encode or Decode JWTs

- [JSON Web Token](https://www.jsonwebtoken.io/)
- [jwt.io](https://jwt.io/)

### Arquivo `.env`

O objetivo principal do .env é armazenar váriáveis de configuração da sua aplicação backend, por enquando será armazendo apenas a chave usada para gerar o token JWT.