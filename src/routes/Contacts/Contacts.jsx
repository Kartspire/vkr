import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { navLinks } from "../../consts";
import styles from "./Contacts.module.css";

export default function Contacts() {
  const navLinksForContacts = navLinks.filter(
    ({ text }) => text !== "Контакты"
  );

  return (
    <>
      <Header navLinks={navLinksForContacts}></Header>
      <div className="container">
        <h2>Мои контакты</h2>
        <a className={styles.tel} href="tel:+88888888888">
          {" "}
          +8 (888) 888-88-88{" "}
        </a>
        <a href="mailto:Loremipsum@gmail.com">Все вопросы сюда</a>
      </div>
    </>
  );
}
