# RPN Calculator

An RPN calculator that's easy to install and use from a mobile phone, even when you're offline. It is a work in progress.

[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)
[![CI/CD](https://github.com/dave-burke/rpn-calc/actions/workflows/cd.yml/badge.svg?branch=main)](https://github.com/dave-burke/rpn-calc/actions/workflows/cd.yml)

## Features

- [Reverse Polish Notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation)
- Ergonomic layout for right-handed mobile use

### Future enhancements

- Offline first PWA (Possibly using [Vite PWA Plugin](https://vite-plugin-pwa.netlify.app/))

## Contributing

Contributions will be welcome after the initial release.

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

Deploy AWS infrastructure (you need the [Pulumi](https://www.pulumi.com/) CLI installed and configured)

```bash
  pulumi up
```

Build the app

```
  npm run build --workspace=frontend
```

Deploy the app

```
  aws s3 sync --acl public-read --follow-symlinks --delete frontend/dist [your S3 bucket URL]
```

### Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=editorconfig.editorconfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Tech Stack

### Frontend

- [Vue3](https://vuejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

Also, while not exactly part of the "tech stack," one of my motivations for making this was to get better at using [CSS Grid layout](https://css-tricks.com/snippets/css/complete-guide-grid/).

### Infrastructure

- [Pulumi](https://www.pulumi.com/)

### Future additions

- [MathJS](https://github.com/josdejong/mathjs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Playwright](https://playwright.dev/)
- [Vitest](https://vitest.dev/)

## Acknowledgements

- [README creator](https://readme.so)

