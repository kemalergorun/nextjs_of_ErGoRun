"use client";

import Link from "next/link";
import styles from "@/styles/components/header.module.css";
import { usePathname } from "next/navigation";

const navItems = [
  {
    id: "1",
    title: "Home",
    href: "/",
  },
  {
    id: "2",
    title: "Products",
    href: "/products",
  },
  {
    id: "3",
    title: "About",
    href: "/about",
    query: {
      contactInfo: "enabled",
    },
  },
  {
    id: "4",
    title: "Contact",
    href: "/contact",
    replace: true,
  },
  {
    id: "5",
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    id: "7",
    title: "CS",
    href: "/client-side",
  },
  {
    id: "6",
    title: "Login",
    href: "/login",
  },
];

export default function Header() {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div>
      <header>
        <nav>
          <ul className={styles.ul}>
            {navItems.map((item) => (
              <li key={item.id} className={styles.li}>
                <Link
                  href={{
                    pathname: item?.href,
                    query: item?.query,
                  }}
                  className={`${styles.link} ${
                    item?.href === "/"
                      ? pathName === "/"
                        ? styles.active
                        : ""
                      : pathName.startsWith(item?.href)
                      ? styles.active
                      : ""
                  }`}
                  title={`Go to ${item?.title} page`}
                >
                  {item?.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}
