import { Link } from "react-router-dom";
import Solver from "../../components/Solver/Solver";
import { Header } from "../../components/Header/Header";
import { navLinks } from "../../consts";
import "../../main.global.css";

export default function Main() {
  const navLinksForMain = navLinks.filter(({ text }) => text !== "Главная");
  return (
    <>
      <Header navLinks={navLinksForMain}></Header>
      <Solver></Solver>
    </>
  );
}
