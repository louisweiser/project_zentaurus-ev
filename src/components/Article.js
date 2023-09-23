import styles from "./Article.module.css";

export function stringArrayIntoJSX(arrayOfStrings) {
  const convertedText = arrayOfStrings.map((text, index) => {
    return (
      <p className={styles.paragraph} key={index}>
        {text}
      </p>
    );
  });
  return convertedText;
}

export default function Article({ title, text, introduction }) {
  const articleText = stringArrayIntoJSX(text);

  if (introduction) {
    return (
      <article>
        <div className={styles["article-container"]}>
          <h1>Warum ist das Thema Inklusion für uns so wichtig ?</h1>
          <h1>Jeder Mensch ist einzigartig - </h1>
          <h1>... voneinander lernen bringt uns in der Gemeinschaft weiter!</h1>
        </div>
      </article>
    );
  }

  return (
    <article className={styles.article}>
      <div className={styles["article-container"]}>
        {title && <h2>{title}</h2>}
        {articleText}
      </div>
    </article>
  );
}
