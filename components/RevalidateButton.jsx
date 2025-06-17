import { revalidateProduct } from "@/utils/revalidate-product";

export default function RevalidateButton() {
  return (
    <form action={revalidateProduct}>
      <button type="submit">Revalidate</button>
    </form>
  );
}
