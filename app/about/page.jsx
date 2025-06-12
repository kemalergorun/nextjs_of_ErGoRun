import LongContent from "@/components/LongContent";
import styles from "@/styles/pages/about-page.module.css";
import Link from "next/link";
export default function AboutPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>About Page</h1>

      <LongContent />

      {/* Whenever prefetch is false, the linked route will not be brought to the browser. Whenever you click it will be opened. */}
      <Link href="/products" prefetch={false}>
        Go to Products
      </Link>
    </main>
  );
}
