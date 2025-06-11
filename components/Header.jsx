import Link from "next/link";
import styles from "@/styles/components/header.module.css";

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
  },
  {
    id: "4",
    title: "Contact",
    href: "/contact",
  },
  {
    id: "5",
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    id: "6",
    title: "Login",
    href: "/login",
  },
];

export default function Header() {
  return (
    <div>
      <header>
        <nav>
          <ul className={styles.ul}>
            {navItems.map((item) => (
              <li key={item.id} className={styles.li}>
                <Link
                  href={item?.href}
                  className={styles.link}
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
