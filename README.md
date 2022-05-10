# RPN Calculator

An RPN calculator that's easy to install and use from a mobile phone, even when you're offline. It is a work in progress.

[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)
[![CI/CD](https://github.com/dave-burke/rpn-calc/actions/workflows/cd.yml/badge.svg?branch=main)](https://github.com/dave-burke/rpn-calc/actions/workflows/cd.yml)

## Features

- [Reverse Polish Notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation)
- Offline, installable [Progressive Web App](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) (PWA)
- Ergonomic layout for right-handed mobile use
- Arbitrary precision with no floating point errors (thanks, [decimal.js-light](https://github.com/MikeMcl/decimal.js-light/)!)
- Undo/Redo

## Contributing

This app is meant to be simple without much feature bloat, but if you have an idea feel free to create a new issue to discuss it. I may ask you to create a PR.

If you want to report a bug, please create a new issue that includes:

1. Steps to reproduce the problem beginning with an empty stack
1. The expected resulting state
1. The actual resulting state

or better yet, write some test cases that demonstrate the problem and submit a PR that makes them pass :grin:.

### Run Locally

Clone the project

```bash
  git clone https://github.com/dave-burke/rpn-calc.git
```

Go to the project directory

```bash
  cd rpn-calc
```

Install dependencies

```bash
  npm install --workspaces
```

Start the frontend server

```bash
  npm run dev --workspace=frontend
```

Browse to http://localhost:3000

### Deploy

Deploy to AWS (you need the [Pulumi](https://www.pulumi.com/) CLI and the the [AWS CLI](https://aws.amazon.com/cli/) installed and configured).

You will also need to update the domain in `infra/index.ts` to something you own.

```
  ./deploy-dev.sh
```

### Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=editorconfig.editorconfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite)

## Tech Stack

- [Pulumi](https://www.pulumi.com/)
- [Vue3](https://vuejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)
- [Playwright](https://playwright.dev/)

Also, while not exactly part of the "tech stack," one of my motivations for making this was to get better at using [CSS Grid layout](https://css-tricks.com/snippets/css/complete-guide-grid/).

## Acknowledgements

- [README creator](https://readme.so)
- [decimal.js-light](https://github.com/MikeMcl/decimal.js-light/)

