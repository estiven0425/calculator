import Calculator from "../components/Calculator.tsx";
import Style from "./styles/app.module.scss";

function App() {
  return (
    <section className={Style.app}>
      <header className={Style.appHeader}>
        <h1>Calculadora en React con Vite + TypeScript</h1>
      </header>
      <main className={Style.appMain}>
        <Calculator />
      </main>
      <footer className={Style.appFooter}>
        <h2>
          Realizado por{" "}
          <a href="https://github.com/estiven0425" target="_blank">
            @estiven0425
          </a>
        </h2>
      </footer>
    </section>
  );
}

export default App;
