import styles from "./styles.module.css";
import cases from "./cases.json";

const Card = ({ name, service, description }) => {
  const getColor = () => {
    const colorPalette = [
      "#3357FF", // Azul eléctrico
      "#FF33A1", // Rosa fucsia
      "#2994F2", // Turquesa ->>
      "#FF8C33", // Naranja quemado
      "#5733FF", // Púrpura intenso
      "#FF33F1", // Magenta brillante
      "#FDBD42", // Amarillo neón->>
      "#FF3333", // Rojo brillante
      "#3AC1A9", // Verde aguamarina ->>
    ];

    const max = colorPalette.length;
    const randomN = Math.floor(Math.random() * max);

    return colorPalette[randomN];
  }

  return (
    <div className={styles.card}>
      <p className={styles.card__description}>"{description}"</p>
      <p className={styles.card__info}>
        <span className={styles.card__name} style={{ color: getColor() + "aa" }}>{name}</span>
        <span className={styles.card__service}>{service}</span>
      </p>
    </div>
  )
}

export default function Experiences() {

  return (
    <div className={styles.container}>
      <h2>Experiencias de nuestros clientes</h2>
      <div className={styles.content}>

        <div className={styles.overflow}>
          <div className={`${styles.slider} ${styles.slider1}`}>
            {cases.map((caseData) => (
              <Card
                key={caseData.id}
                name={caseData.nombre}
                service={caseData.servicio}
                description={caseData.comentario}
              />
            ))}
          </div>
          <div className={styles.slider}>
            {cases.map((caseData) => (
              <Card
                key={caseData.id}
                name={caseData.nombre}
                service={caseData.servicio}
                description={caseData.comentario}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
};

