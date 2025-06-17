"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const revalidateProduct = async () => {
  revalidatePath("/products");
  // revalidateTag("a")
};
