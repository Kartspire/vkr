import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = ({ navLinks }) => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          {navLinks.map(({ path, text }, index) => (
            <li key={index}>
              <Link className={styles.link} to={path}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
