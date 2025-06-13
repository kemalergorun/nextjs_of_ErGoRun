import styles from "@/styles/pages/product-details.module.css";

// Next 15, dynamic routing params can be got by using async
export default async function ProductDetails({ params }) {
  const productId = (await params).productId;

  return <div>{productId}</div>;
}
