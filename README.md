

Recetario
que hace uso de una API, React Router, Tailwind, Zustand, Zod


#  Tailwind
 
Para descargar Tailwind usamos

npm i -D tailwindcss postcss autoprefixer


el menos -D es para decir que es una depedencia de desarrollo desarrollo

Luego ejecutamos 
npx tailwindcss init -p

# Revisar y agregar si hace falta en 
El vite.config

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
})

# ReactRouter
Libreria para crear aplicacion de multiples paginas de navegacion

permite crear secciones /*

Intalacion
npm i react-router-dom






# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```
