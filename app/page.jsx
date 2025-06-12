import LongContent from "@/components/LongContent";
import styles from "@/styles/page.module.css";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.h1}>Home Page</h1>

      <LongContent />

      {/* Whenever prefetch is true, linked page will be loaded whenever user enter this route */}
      <Link href="/contact" prefetch={true}>
        Go To Contact Page
      </Link>
    </div>
  );
}
