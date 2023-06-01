import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./Solver.module.css";
import "../../main.global.css";

const Solver = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [solution, setSolution] = useState("");

  const solveEquation = (e) => {
    e.preventDefault();
    // Расчет параметров уравнения
    const discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      setSolution(`x1 = ${x1}, x2 = ${x2}`);
    } else if (discriminant === 0) {
      const x = -b / (2 * a);
      setSolution(`Уравнение имеет единственное решение: x = ${x}`);
    } else {
      setSolution("Уравнение не имеет действительных решений");
    }
  };

  return (
    <div className="container">
      <h1>Работа с квадратными уравнениями</h1>
      <div className={styles.equation}>
        <div>
          <h3>Введите параметры уравнения</h3>
          <form
            className={styles.form}
            action=""
            onSubmit={(e) => solveEquation(e)}
          >
            <Input
              value={a}
              onChange={(e) => setA(e.target.value)}
              paramName="A"
            />
            <Input
              value={b}
              onChange={(e) => setB(e.target.value)}
              paramName="B"
            />
            <Input
              value={c}
              onChange={(e) => setC(e.target.value)}
              paramName="C"
            />
            <Button label="Рассчитать" />
          </form>
        </div>
        <div>
          <h3>Формат уравнения</h3>
          <p>Ax² + Bx + C = 0</p>
        </div>
        <div>
          <h3>Результат</h3>
          <div className={styles.answer}>{solution}</div>
        </div>
      </div>
    </div>
  );
};

export default Solver;
