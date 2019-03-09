[![Build Status](https://travis-ci.org/danielso2007/my-money-app.svg?branch=master)](https://travis-ci.org/danielso2007/my-money-app)
![version](https://img.shields.io/badge/version-0.1.0-blue.svg)
[![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/danielso2007/my-money-app.svg)](https://github.com/danielso2007/my-money-app/pulls)
[![GitHub issues](https://img.shields.io/github/issues/danielso2007/my-money-app.svg)](https://github.com/danielso2007/my-money-app/issues?q=is%3Aopen+is%3Aissue)
![GitHub last commit](https://img.shields.io/github/last-commit/danielso2007/my-money-app.svg)
![GitHub contributors](https://img.shields.io/github/contributors/danielso2007/my-money-app.svg)
![GitHub top language](https://img.shields.io/github/languages/top/danielso2007/my-money-app.svg)

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

[![GitHub followers](https://img.shields.io/github/followers/danielso2007.svg?label=Follow&style=social)](https://github.com/danielso2007?tab=followers)

# Projeto My Money App

    Projeto de estudo.

## Padrão de mensagem de commit (CHANGELOG automatizados):

O projeto terá o controle de versão e a geração do CHANGELOG automatizados com mensagens de confirmação  convencionais seguindo o padrão estabelecido por este documento.

`Lembrando: A mensagem de commit será pré-estabelecida no issue`

Para os commites do projeto, se o mensagem do commite não for definida no issue, usar o padrão definido abaixo:

_Para bugs:_

```sh
git commit -m "fix: texto_do_que_foi_feito_no_issue (número_do_issue_com_#)"
```

_Para os demais:_

```sh
git commit -m "feat: texto_do_que_foi_feito_no_issue (número_do_issue_com_#)"
```

_Para escopo opcional de um commit:_

```sh
git commit -m "feat(optional_scope): texto_do_que_foi_feito_no_issue (número_do_issue_com_#)"
```

_Algumas regras:_

1. Commits deve ser prefixado com um tipo, o qual consiste de um substantivo, `feat`, `fix`, etc, seguida de dois pontos e um espaço.
2. O tipo `feat`DEVE ser usado quando um commit adiciona um novo recurso ao seu aplicativo ou biblioteca.
3. O tipo `fix` DEVE ser usado quando um commit representa uma correção de bug para seu aplicativo.
4. Um escopo opcional pode ser fornecido após um tipo. Um escopo é uma frase que descreve uma seção da base de código entre parênteses, por exemplo, `fix(parser)`:

### Referências:
[Standard Version](https://github.com/conventional-changelog/standard-version/blob/master/README.md)

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)

# Gerando o CHANGELOG do projeto

```sh
npm run release -- --release-as 1.1.0  --dry-run

npm run release -- --release-as patch --dry-run

npm run release -- --release-as minor  --dry-run

npm run release -- --release-as major  --dry-run
```

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