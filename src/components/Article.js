import styles from "./Article.module.css";

function StringArrayIntoJSX(arrayOfStrings) {
  return arrayOfStrings.map((text, index) => (
    <p className={styles.paragraph} key={index}>
      {text}
    </p>
  ));
}

export default function Article({ title, text, subtitle, colored }) {
  const articleText = StringArrayIntoJSX(text);

  return (
    <article
      className={`${styles.article} ${colored ? styles.coloredBackground : ""}`}
      aria-labelledby={title ? "article-title" : undefined}
      aria-describedby="article-text"
    >
      {title && (
        <h2 className={styles.title} id="article-title">
          {title}
        </h2>
      )}
      {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
      <div className={styles.text} id="article-text">
        {articleText}
      </div>
    </article>
  );
}
