import Sidebar from "@/components/Sidebar";
import styles from "@/styles/layout/dashboard-layout.module.css";

export default function DashboardLayout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      {/* Sidebar */}
      <Sidebar />

      <div className={styles.content}>{children}</div>
    </div>
  );
}
