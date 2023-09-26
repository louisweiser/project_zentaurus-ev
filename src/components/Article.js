import styles from "./Article.module.css";

function stringArrayIntoJSX(arrayOfStrings) {
  const convertedText = arrayOfStrings.map((text, index) => {
    return (
      <p className={styles.paragraph} key={index}>
        {text}
      </p>
    );
  });
  return convertedText;
}

export default function Article({ title, text, subtitle }) {
  const articleText = stringArrayIntoJSX(text);

  return (
    <article className={styles.article}>
      <div className={styles["article-container"]}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
        {articleText}
      </div>
    </article>
  );
}
