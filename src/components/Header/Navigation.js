import styles from "./Navigation.module.css";

export default function HeaderMenu(props) {
  const isMenuVisible = props.isMenuVisible;
  const onClickHandler = props.onClickHandler;

  const scrollToIntendedSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({ top: offsetTop + 7, behavior: "smooth" });
    }
  };

  return (
    <div className={`${styles.menu} ${isMenuVisible ? styles.visible : ""}`}>
      <ul className={styles.menuList}>
        <li>
          <button
            onClick={() => {
              scrollToIntendedSection("section2");
              onClickHandler();
            }}
          >
            Über uns
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              scrollToIntendedSection("section3");
              onClickHandler();
            }}
          >
            Beratung
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              scrollToIntendedSection("section4");
              onClickHandler();
            }}
          >
            Vorgehen
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              scrollToIntendedSection("section5");
              onClickHandler();
            }}
          >
            Projekte
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              scrollToIntendedSection("section6");
              onClickHandler();
            }}
          >
            Spenden
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              scrollToIntendedSection("section7");
              onClickHandler();
            }}
          >
            Kontakt
          </button>
        </li>
      </ul>
    </div>
  );
}
