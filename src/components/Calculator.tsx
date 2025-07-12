import { useState } from "react";
import { evaluate } from "mathjs";
import Style from "./styles/calculator.module.scss";

function Calculator() {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const isOperator = (char: string) => {
    return ["+", "-", "*", "/"].includes(char);
  };

  const handleClick = (value: string) => {
    const lastChar = input[input.length - 1];

    if (input.length === 0) {
      if (isOperator(value) && value !== "-") return;
      if (value === "-" || !isOperator(value)) {
        setInput(value);
      }
      return;
    }

    if (!isOperator(value) && value !== ".") {
      setInput((prev) => prev + value);
      return;
    }

    if (value === ".") {
      const parts = input.split(/[+\-*/]/);
      const lastPart = parts[parts.length - 1];

      if (lastPart.includes(".")) {
        return;
      }

      if (!isNaN(parseInt(lastChar as string)) || lastChar === ".") {
        setInput((prev) => prev + value);
        return;
      }

      if (input.length === 0 || isOperator(lastChar)) {
        setInput((prev) => prev + "0.");
        return;
      }

      if (lastChar === ".") return;
    }

    if (isOperator(value)) {
      if (isOperator(lastChar)) {
        if (value === "-") {
          if (["+", "*", "/"].includes(lastChar)) {
            setInput((prev) => prev + value);
            return;
          }

          if (lastChar === "-") {
            const secondLastChar =
              input.length > 1 ? input[input.length - 2] : null;

            if (
              secondLastChar &&
              !isOperator(secondLastChar) &&
              secondLastChar !== "-"
            ) {
              setInput((prev) => prev + value);
              return;
            }
            return;
          }
        } else {
          if (
            lastChar === "-" &&
            input.length > 1 &&
            isOperator(input[input.length - 2])
          ) {
            setInput((prev) => prev.slice(0, -2) + value);
            return;
          }
          setInput((prev) => prev.slice(0, -1) + value);
          return;
        }
      }
      setInput((prev) => prev + value);
      return;
    }
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
  };

  const handleCalculate = () => {
    try {
      let finalInput = input;
      while (
        finalInput.length > 0 &&
        isOperator(finalInput[finalInput.length - 1])
      ) {
        const last = finalInput[finalInput.length - 1];
        const secondLast =
          finalInput.length > 1 ? finalInput[finalInput.length - 2] : null;

        if (finalInput === "-" || (last === "-" && secondLast === "-")) {
          break;
        }
        finalInput = finalInput.slice(0, -1);
      }

      if (finalInput.length === 0) {
        setResult(null);
        return;
      }

      const calculated = evaluate(finalInput);
      setResult(calculated);
      console.log("Calculando: ", calculated);
    } catch (error) {
      alert("Error en la expresión: " + error);
      console.error("Error al calcular:", error);
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
