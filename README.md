<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

The application, which shows how to use Mongo DBRefs for Nestjs + Mongoose.

## Installation

```bash
$ yarn install
```

## Demo

1. Install packages:

```sh
yarn
```

2. Start the application:

```sh
yarn start
```

3. Execute next command in another terminal window:

```sh
yarn demo
```

OR: run the app and execute next commands manually for populating the DB with test data and see the auto-populated result:

```sh
curl --silent --location 'http://localhost:3000/members' --header 'Content-Type: application/json' --data-raw '{"firstName":"Oksana","lastName":"Kaka","email": "ok@gmail.com"}'
curl --silent --location 'http://localhost:3000/members' --header 'Content-Type: application/json' --data-raw '{"firstName":"Semen","lastName":"Doopa","email": "sm@gmail.com"}'
curl --silent --location 'http://localhost:3000/members' --header 'Content-Type: application/json' --data-raw '{"firstName":"Vasyl","lastName":"Bibikalo","email": "vb@gmail.com"}'
curl --silent --location 'http://localhost:3000/teams' --header 'Content-Type: application/json' --data-raw '{"name": "Alco bees","description": "The very best team ever","teamLead": "vb@gmail.com","members": ["sm@gmail.com","ok@gmail.com"]}'

echo "\n\n\nAuto populated Team:\n`curl --location 'http://localhost:3000/teams' | jq`"
```
