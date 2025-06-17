import { getProducts } from "@/services/get-products";
import { getUsers } from "@/services/get-users";

export default async function SequentialDataFetching() {
  // First operation will be waited in sequential
  const products = await getProducts();
  const users = await getUsers();

  console.log(products);
  console.log(users);

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
