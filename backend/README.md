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

## Consuntando com paginação e ordenação

http://localhost:3003/api/billingCycles?skip=0&limit=3&sort=month
