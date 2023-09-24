import styles from "./Menu.module.css";

export default function HeaderMenu(props) {
  const isMenuVisible = props.isMenuVisible;
  const onClickHandler = props.onClickHandler;

  return (
    <div className={`${styles.menu} ${isMenuVisible ? styles.visible : ""}`}>
      <ul className={styles.menuList}>
        <li>
          <a href="#section2" onClick={onClickHandler}>
            Über uns
          </a>
        </li>
        <li>
          <a href="#section3" onClick={onClickHandler}>
            Beratung
          </a>
        </li>
        <li>
          <a href="#section4" onClick={onClickHandler}>
            Vorgehen
          </a>
        </li>
        <li>
          <a href="#section5" onClick={onClickHandler}>
            Projekte
          </a>
        </li>
        <li>
          <a href="#section6" onClick={onClickHandler}>
            Blog
          </a>
        </li>
        <li>
          <a href="#section7" onClick={onClickHandler}>
            Kontakt
          </a>
        </li>
        <li>
          <a href="#section7" onClick={onClickHandler}>
            Spenden
          </a>
        </li>
      </ul>
    </div>
  );
}
