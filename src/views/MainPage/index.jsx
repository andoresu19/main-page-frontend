import styles from "./styles.module.css";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import Services from "../../components/Services";
import Experiences from "../../components/Experiences";

export default function MainPage() {
  return (
    <div className={styles.mainPage}>
      <NavBar className={styles.navBar} />
      <div className={`${styles.containerFull} ${styles.containerFull_main}`} children={<Header />} />
      <div id="services" className={styles.container} children={<Services />} />
      <div className={styles.container} children={<Experiences />} />
      <footer>
        <p>
          <i className="fa-solid fa-copyright" /> DERTAM Pedagogías y Servicios
        </p>
      </footer>
    </div>
  );
}
