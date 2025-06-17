// import { wait } from "@/utils/wait"
import ProductCard from "@/components/ProductCard";
import RevalidateButton from "@/components/RevalidateButton";
import styles from "@/styles/pages/product-page.module.css";
import Link from "next/link";

export const metadata = {
  title: "Products | Learning Next",
  description:
    "This is the about page where you can be navigated to different routes.",
};

export default async function ProductPage() {
  // await wait(3000);

  const response = await fetch(`${process.env.MOCK_API_URL}/products`, {
    next: {
      revalidate: 60,
      tags: ["a"],
    },
  });

  if (!response.ok) throw new Error("Fetch failed.");

  const products = await response.json();
  console.log(products);

  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Products Page</h1>
      <RevalidateButton />
      <div className={styles.productList}>
        {products.map((product) => (
          <Link
            key={product?.id}
            href={`/products/${product?.id}`}
            className={styles.link}
          >
            <ProductCard {...product} />
          </Link>
        ))}
      </div>
    </main>
  );
}
