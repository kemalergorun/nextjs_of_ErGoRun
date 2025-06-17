import { getProducts } from "@/services/get-products";
import { getUsers } from "@/services/get-users";

export default async function ParallelDataFetching() {
  const [products, users] = await Promise.all([getProducts(), getUsers()]);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}

      {users.map((user) => (
        <div key={user.id}>{user.username}</div>
      ))}
    </div>
  );
}
