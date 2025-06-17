import { getProducts } from "@/services/get-products";

export default async function ProductList() {
  const products = await getProducts();

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
