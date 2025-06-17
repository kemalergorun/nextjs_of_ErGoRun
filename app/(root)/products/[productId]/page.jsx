import styles from "@/styles/pages/product-details.module.css";

// const products = [
//   {
//     id: 1,
//     title: "Electric Guitar",
//   },
//   {
//     id: 2,
//     title: "Piano",
//   },
//   {
//     id: 3,
//     title: "Violin",
//   },
// ];

// export async function generateMetadata({params, searchParams}) {

//   const id = (await params).productId;
//   // const searched = (await searchParams).productId;

//   // console.log("Params: ", id);
//   // console.log("Search Params: ", searched);

//   return {
//     title: products.find(product => +product.id === +id).title,
//     description: "Very good item."
//   }

// }

// Next 15, dynamic routing params can be got by using async
export default async function ProductDetails({ params }) {
  const id = (await params).productId;

  const response = await fetch(`${process.env.MOCK_API_URL}/products/${id}`);
  const product = await response.json();

  return (
    <div className={styles.productContainer}>
      <div className={styles.card}>
        <img src={product.image} className={styles.image} />

        <div className={styles.content}>
          <h2 className={styles.title}> {product.name} </h2>
          <p className={styles.description}> {product.description}</p>
          <p className={styles.price}> {product.price}</p>
        </div>
      </div>
    </div>
  );
}
