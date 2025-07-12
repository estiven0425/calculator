import { useState } from "react";
import {evaluate} from "mathjs";
import Style from "./styles/calculator.module.scss";

function Calculator() {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
  };

  const handleCalculate = () => {
    try {
      const calculated = evaluate(input);
      setResult(calculated);
      console.log("Calculando: ", calculated);
    } catch (error) {
      alert("Error: " + error);
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    "00",
    ".",
    "+",
    "=",
  ];

  return (
    <>
      <aside className={Style.calculatorDisplay}>
        <output className={Style.calculatorInput}>{input}</output>
        <output className={Style.calculatorResult}>
          {result !== null ? result : ""}
        </output>
      </aside>
      {buttons.map((button, index) =>
        button === "=" ? (
          <button
            className={Style.calculatorButtonEqual}
            key={index}
            onClick={handleCalculate}
          >
            {button}
          </button>
        ) : (
          <button
            className={Style["calculatorButton" + index]}
            key={index}
            onClick={() => handleClick(button)}
          >
            {button}
          </button>
        ),
      )}
      <button className={Style.calculatorButtonClear} onClick={handleClear}>
        Limpiar
      </button>
    </>
  );
}

export default Calculator;
