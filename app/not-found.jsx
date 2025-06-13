import styles from "@/styles/pages/not-found-page.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h2 className={styles.number}> 404 </h2>
      <h1 className={styles.text}> This page is not available </h1>
    </div>
  );
}
