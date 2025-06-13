import styles from "@/styles/pages/contact-page.module.css";
import Link from "next/link";

export default async function ContactPage({ params }) {
  const slug = (await params).slug;
  console.log(slug);

  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Contact Page</h1>
      <h2>Optional Catch All Routes</h2>

      {/* Default is scroll true so it will scroll up to top of the page */}
      {/* Whenever prefetch is not stated, linked page will be loaded whenever link tag is entered to user's viewport */}
      <Link href="/" scroll={false}>
        Go To Home Page
      </Link>
    </main>
  );
}
