import styles from "@/styles/pages/dashboard-product-page.module.css";
import Link from "next/link";

export default function DashboardProductsPage() {
  return (
    <div>
      <h1 className={styles.h1}>Dashboard Product Page</h1>

      <div className={styles.container}>
        <Link
          href="/dashboard/products/edit"
          title={`Go to edit page`}
          className={styles.link}
        >
          Edit
        </Link>

        <Link
          href="/dashboard/products/new"
          title={`Go to new page`}
          className={styles.link}
        >
          New
        </Link>
      </div>
    </div>
  );
}
