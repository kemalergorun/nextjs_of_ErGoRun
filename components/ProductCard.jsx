import styles from "@/styles/components/product-card.module.css";

export default function ProductCard({ name, description, price, image }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}> {name} </h2>
        <p className={styles.description}> {description}</p>
        <p className={styles.price}> {price} </p>
      </div>
    </div>
  );
}
