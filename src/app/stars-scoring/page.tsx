"use client";
import styles from "./page.module.css";

export default function StarsScoring() {
  const addScore = (score: number) => {
    console.log(score);
  };

  return (
    <div className={styles.container}>
      <div className={styles.starsContainer}>
        {Array.from(Array(5).keys())
          .reverse()
          .map((score) => (
            <span
              key={score}
              onClick={() => addScore(score + 1)}
              className={styles.star}
            >
              &#9733;
            </span>
          ))}
      </div>
      <span className={styles.icon}>icon</span>
    </div>
  );
}
