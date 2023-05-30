import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./Solver.module.css";

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
    <div>
      <div>Ax² + Bx + C = 0</div>
      <form
        className={styles.form}
        action=""
        onSubmit={(e) => solveEquation(e)}
      >
        <Input value={a} onChange={(e) => setA(e.target.value)} paramName="A" />
        <Input value={b} onChange={(e) => setB(e.target.value)} paramName="B" />
        <Input value={c} onChange={(e) => setC(e.target.value)} paramName="C" />
        <Button label="Рассчитать" />
      </form>

      <div className={styles.answer}>{solution}</div>
    </div>
  );
};

export default Solver;
