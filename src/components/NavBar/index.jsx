import styles from "./styles.module.css";
// import image from "../../assets/dertam-logo.png";
import GeneralButton from "../GeneralButton";

export default function NavBar(props) {
  const { className } = props
  return (
    <div className={styles.container}>
      <div className={`${styles.subcontainer} ${className}`}>
        <nav className={styles.navbar}>
          <a href="#aboutus" className={styles.navbar__item}>
            Sobre nosotros
          </a>
          <a className={styles.navbar__item}>Instructores</a>
          <a href="#services" className={styles.navbar__item}>Servicios</a>
        </nav>
        <div className={styles.logo}>
          <img src='/logo dertam.png' className={styles.logo__image} />
          <img src='/iconizer-dertam-logo-2.svg' className={styles.logo__image2} />
        </div>
        <div className={styles.login}>
          <GeneralButton color="blue">Ingresar</GeneralButton>
        </div>
      </div>
    </div>
  );
}
