<!-- Badges -->
[![100% TypeScript](https://img.shields.io/github/languages/top/guiribmedeiros/proffy-api?style=for-the-badge)](https://github.com/guiribmedeiros/proffy-api/search?l=typescript)
[![License](https://img.shields.io/github/license/guiribmedeiros/proffy-api?style=for-the-badge)](./LICENSE.md)
[![Open Issues](https://img.shields.io/github/issues/guiribmedeiros/proffy-api?style=for-the-badge)](https://github.com/guiribmedeiros/proffy-api/issues)

## About Proffy

Proffy is a platform that helps people find teachers for online classes efficiently. This project was developed for the brazilian **National Day of Education Professionals** during the [Next Level Week](https://nextlevelweek.com) 2.0 by [@rocketseat](https://github.com/rocketseat). Proffy takes the pain out studying online by connecting teachers with students, see more:

- [Proffy Mobile](https://github.com/guiribmedeiros/proffy-mobile) 1.0.
- [Proffy Web](https://github.com/guiribmedeiros/proffy-web) 1.0.

Proffy API is an open-sourced restful API. It is written in [TypeScript](http://www.typescriptlang.org) and
uses [Express](https://expressjs.com/) along with [SQLite](https://www.sqlite.org/).

## Getting Started

First, let’s make sure that your development environment is ready.

- If you don’t have **Node.js** installed, [install it from here](https://nodejs.org/).

Then configure your development environment from the `.env.example` file and install the dependencies from your project’s `package.json` file by running the following command:

```
npm install
```

Once your dependencies are installed, in order to run all Knex.js migrations and build your application's database schema, execute the `migrate` command:

```
npm run migrate
```

Finally, the `serve` script starts your Node.js "development server" on port 8000.

```
npm run serve
```

That’s it! :rocket:  
If you have questions about Proffy API, you can ask on [GitHub Issues](https://github.com/guiribmedeiros/proffy-api/issues).
