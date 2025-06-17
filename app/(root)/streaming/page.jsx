import ProductList from "@/components/ProductList";
import UserList from "@/components/UserList";
import { Suspense } from "react";

export default function StreamingPage() {
  return (
    <div>
      <h1>Streaming</h1>

      <Suspense fallback={<>Loading...</>}>
        <ProductList />
      </Suspense>

      <Suspense fallback={<>Loading...</>}>
        <UserList />
      </Suspense>
    </div>
  );
}
