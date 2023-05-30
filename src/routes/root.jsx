import { Link } from "react-router-dom";
import Solver from "../components/Solver/Solver";

export default function Root() {
  return (
    <>
      <div>
        <Link to="/contacts">CONTACTS</Link>
        <Link to="/notfound">NOTFOUND</Link>
        <h1>Работа с квадратными уравнениями</h1>
        <Solver></Solver>
      </div>
    </>
  );
}
