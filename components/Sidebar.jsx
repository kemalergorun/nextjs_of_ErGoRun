"use client";

import styles from "@/styles/components/sidebar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    id: 2,
    title: "Profile",
    href: "/dashboard/profile",
  },
  {
    id: 3,
    title: "Products",
    href: "/dashboard/products",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  console.log("Pathname: ", pathname);

  return (
    <div className={styles.sidebarContainer}>
      <ul className={styles.ul}>
        {menuItems.map((menu) => (
          <li key={menu?.id}>
            <Link
              href={menu?.href}
              className={`${styles.link} ${
                pathname === menu?.href ? styles.active : ""
              }`}
              title={`Go to ${menu?.title} page`}
            >
              {menu?.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
