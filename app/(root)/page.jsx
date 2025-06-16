import LongContent from "@/components/LongContent";
import styles from "@/styles/page.module.css";
import Link from "next/link";

export const metadata = {
  title: "Home | Learning Next",
  description:
    "This is the about page where you can be navigated to different routes.",
};

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

/*
Folder structure itself is a router for NextJs

Dynamic					      Catch All				Optional Catch All
 []						      	[...]						[[...]]
/1						      	/1						  /1
/1/2 - (Only 1 Lvl)		/1/2 +					/1/2 +

						          products				products
							        	page.jsx				[[...productId]]
							        	[...productId]				page.jsx
								        	page.jsx
*/
