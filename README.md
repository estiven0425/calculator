# Calculadora React con Vite + TypeScript

> _💡 Descripción del proyecto:_  
> _Calculadora sencilla clásica desarrollada con fines educativos, está en fase de producción ya desplegada en GitHub Pages, se ha desarrollado con la intención de aprender TypeScript y mejorar el conocimiento y uso del IDE WebStorm. Software sujeto a actualizaciones._

---

## 🚀 Tecnologías utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [Docker](https://www.docker.com/)
- [GitHub Pages](https://pages.github.com/)
- IDE recomendado: [WebStorm](https://www.jetbrains.com/webstorm/)

---

## 📦 Clonar el repositorio

```bash
git clone https://github.com/estiven0425/calculator.git
cd calculator
```

---

## 📥 Instalar dependencias

```bash
npm install
```

---

## 🧪 Ejecutar en entorno local (modo desarrollo)

```bash
npm run dev
```

Esto iniciará la aplicación en `http://localhost:5173` por defecto.

---

## 🐳 Iniciar con Docker (modo producción)

### 1. Configurar `vite.config.ts`

Antes de compilar para Docker, cambia la propiedad `base` en el archivo `vite.config.ts`:

```ts
export default defineConfig({
  base: './',
  ...
});
```

Esto garantiza que los recursos estáticos se sirvan correctamente sin rutas relativas dependientes de GitHub Pages.

---

### 2. Compilar la app

```bash
npm run build
```

---

### 3. Ejecutar con Docker Compose

```bash
docker-compose up --build
```

La aplicación quedará disponible en:  
👉 `http://localhost:8080`

---

## 🌐 Desplegar en GitHub Pages

La configuración por defecto en `vite.config.ts` usa:

```ts
base: "/calculator/";
```

Esto permite desplegar correctamente usando GitHub Pages. Asegúrate que el repositorio y la ruta coincidan.

### 1. Compilar para GitHub Pages

```bash
npm run build
```

### 2. Desplegar

```bash
npm run deploy
```

Esto usa `gh-pages` para publicar el contenido del directorio `dist` en el branch `gh-pages`.

---

## 📄 Licencia

Este proyecto fue hecho con fines educativos y sin ánimo de lucro, si quieres recomendarme algo adelante, estaría muy agradecido.  
Puedes modificarlo, adaptarlo y usarlo libremente.
