import { Header } from "../../components/Header/Header";
import { navLinks } from "../../consts";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <>
      <Header navLinks={navLinks}></Header>
      <div className={styles.body}>
        <p className={styles.errorCode}>404</p>
        <p>NotFound</p>
      </div>
    </>
  );
}
