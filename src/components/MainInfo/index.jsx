import styles from "./styles.module.css";
import image from "../../assets/school.png";

export default function Mainsection() {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} />
      <div className={`${styles.section} ${styles.mission}`}>
        <h1 className={styles.big_text}>{"¿Quienes somos?"}</h1>
        <span className={styles.text}>
          <p className={styles.parraph}>
            En DERTAM Pedagogías y Servicios ejecutamos proyectos innovadores en
            educación, cultura, tecnología y medio ambiente. Contamos con un
            equipo altamente competente e interdisciplinario que garantiza la
            calidad, personalización y confiabilidad en todas nuestras
            propuestas.
          </p>
        </span>
      </div>
      <div className={`${styles.section} ${styles.mission2}`}>
        <h1 className={styles.big_text}>{"Nuestra misión"}</h1>
        <span className={styles.text}>
          <p className={styles.parraph}>
            Nuestro enfoque se centra en proyectos disruptivos en educación,
            asesorías pedagógicas y formación/capacitación, buscando cualificar
            el talento humano y crear un ambiente seguro y didáctico.
          </p>
        </span>
      </div>
      <div className={`${styles.section} ${styles.mission3}`}>
        <h1 className={styles.big_text}>{"Nuestra visión"}</h1>
        <span className={styles.text}>
          <p className={styles.parraph}>
            Nuestro objetivo es ser reconocidos a nivel nacional e internacional
            como líderes en la gestión del conocimiento y en la ejecución de
            proyectos disruptivos que promuevan el crecimiento personal,
            profesional y empresarial.
          </p>
        </span>
      </div>
    </div>
  );
}
