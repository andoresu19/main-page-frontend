import { useMemo, useState } from "react"
import styles from "./styles.module.css"
import sectionData from "./services.json"

const Card = (props) => {
  const { title, imgPath, text, highlight, randomShape = false } = props;
  const getColor = () => {
    const colorPalette = [
      "#3357FF", // Azul eléctrico
      "#FF33A1", // Rosa fucsia
      "#33FFF3", // Turquesa
      "#FF8C33", // Naranja quemado
      "#5733FF", // Púrpura intenso
      "#FF33F1", // Magenta brillante
      "#F3FF33", // Amarillo neón
      "#FF3333", // Rojo brillante
      "#33FFAA", // Verde aguamarina
    ];

    const max = colorPalette.length;
    const randomN = Math.floor(Math.random() * max);

    return colorPalette[randomN];
  }
  const getShape = () => {
    const shapes = [
      "35% 65% 49% 51% / 83% 18% 82% 17%",
      "9% 91% 96% 4% / 20% 33% 67% 80%",
      "61% 39% 89% 11% / 58% 77% 23% 42%",
      "49% 51% 11% 89% / 46% 19% 81% 54%",
      "14% 86% 66% 34% / 54% 30% 70% 46%",
      "21% 79% 11% 89% / 57% 26% 74% 43%",
      "77% 23% 64% 36% / 38% 61% 39% 62%",
      "22% 78% 36% 64% / 38% 39% 61% 62%",
      "47% 53% 71% 29% / 36% 87% 13% 64%",
      "80% 20% 29% 71% / 51% 45% 55% 49%"
    ]
    const max = shapes.length;
    const randomN = Math.floor(Math.random() * max);

    return shapes[randomN];
  }

  return <div className={`${styles.card} ${highlight && styles.card__highlight}`}>
    <div className={`${styles.card__image}`} style={randomShape ? { background: getColor() + "aa", borderRadius: getShape() } : { background: getColor() }}>
      {imgPath && <img src={imgPath || ""} />}
    </div>
    <div className={styles.card__info} >
      <p className={styles.card__title} >
        {title}
      </p>
      <p className={styles.card__text} style={highlight ? { color: "#2994F2", fontWeight: "bold" } : {}}>{text}</p>
    </div>
  </div >
}

export default function Services() {
  const [activeKey, setActiveKey] = useState(0);
  const [activeKeyContent, setActiveKeyContent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);


  const handleChangeTab = (key) => {
    if (key === activeKey) {
      key = 0;
    };

    setIsTransitioning(true);
    setActiveKey(key);

    setTimeout(() => {
      setActiveKeyContent(key);
      setIsTransitioning(false);
    }, 500);
  }

  const transitionStyleController = isTransitioning ? styles.transitionOut : styles.transitionIn;
  const tabModeController = activeKeyContent !== 0 && styles.services__nav_focus;

  const activeTab = useMemo(() => (
    sectionData.find(({ key }) => key === activeKeyContent)?.title
  ), [sectionData, activeKeyContent])

  return (
    <div className={styles.container}>
      <h2 style={activeKey ? { width: "100%", justifyContent: "flex-start" } : {}}><span>Conoce nuetros servicios</span></h2>
      <nav
        className={
          `${styles.services__nav} ${transitionStyleController} ${tabModeController}`
        }
      >
        {activeKeyContent === 0 ?
          sectionData.map((data) => (
            <button
              className={`${styles.services__button} ${data.key === activeKey ? styles.active : ""}`}
              key={data.key}
              onClick={() => handleChangeTab(data.key)}
            >
              <Card
                title={data.title}
                // text={data?.text}
                imgPath={data.imgPath}
                randomShape
                highlight={data.text}
              />
            </button>
          ))
          :
          <>
            <button
              className={styles.services__return}
              onClick={() => handleChangeTab(0)}
            >
              <i className="fa-solid fa-circle-chevron-left" />
              Todos los servicios
            </button>
            <span className={styles.services__tab_name}>
              {activeTab}
            </span>
          </>
        }
      </nav>

      <div className={`${styles.content} ${transitionStyleController}`}>
        {sectionData
          .find((service) => service.key === activeKeyContent)
          ?.list
          ?.map((data) =>
            <Card
              title={data?.title}
              imgPath={data?.imgPath}
              text={data?.text}
              key={data?.id}
              randomShape
            />
          )}
      </div>
    </div>
  )
};
