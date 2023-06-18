# ISBN Calculator

Project by Matias Ferraro. This Algorithm evaluates that an ISBN is correct:

- It has a correct length
- has only numbers
- has no spaces

If it is correct, the algorithm, follow these instructions:

1. Take each digit, from left to right and multiply them alternatively by 1 and 3
2. Sum those numbers
3. Take mod 10 of the summed figure
4. Subtract 10 and if the end number is 10, make it 0

After that show the result on the screen.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
