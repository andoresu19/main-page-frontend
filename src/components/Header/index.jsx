import styles from "./styles.module.css";
import slogans from "./slogans.json";
import { useEffect, useState } from "react";
import image from "/student-girl2.jpeg";

export default function Header() {
  const [slogan, setSlogan] = useState("DERTAM Pedagogías Y Servicios");
  const getRandomIndex = (array) => {
    const min = 0;
    const max = array.length - 1;
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    const slogansList = [...slogans.slogans];
    const randomIndex = getRandomIndex(slogansList);
    setSlogan(slogansList[randomIndex]);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.graphic}>
        <img src={image} className={styles.image} />
      </div>
      <div className={styles.info}>
        <h1 className={styles.big_text}>{slogan}</h1>
        <span className={styles.text}>
          <p>Somos una empresa que ejecuta proyectos innovadores en educación, arte,
            cultura, tecnología y medio ambiente, ofreciendo estrategias efectivas
            para generar el cambio que nuestros clientes necesitan.
          </p>
          {/* <p> */}
          {/*   Somos una empresa */}
          {/*   que ejecuta proyectos innovadores en educación, cultura, tecnología */}
          {/*   y medio ambiente. */}
          {/* </p> */}
          {/* <p> */}
          {/*   Buscamos ofrecer estrategias eficientes y eficaces para generar el */}
          {/*   cambio que nuestros clientes y sus organizaciones requieren. */}
          {/* </p> */}
        </span>
        <div className={styles.social}>
          <div className={styles.social__content}>
            <a
              // href=""
              target="_blank"
              className={`${styles.social__link} ${styles.social__w}`}
              children={<i className="fa-brands fa-whatsapp" />}
            />
            <a
              // href=""
              target="_blank"
              className={`${styles.social__link} ${styles.social__i}`}
              children={<i className="fa-brands fa-instagram" />}
            />
            <a
              // href=""
              target="_blank"
              className={`${styles.social__link} ${styles.social__f}`}
              children={<i className="fa-brands fa-facebook-f" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
