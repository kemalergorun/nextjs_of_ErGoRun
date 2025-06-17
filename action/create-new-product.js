"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createNewProduct = async (formData) => {
  console.log(formData);

  // First way to get formData as an object
  const payload = {
    name: formData.get("name"),
    image: formData.get("image"),
    price: formData.get("price"),
    description: formData.get("description"),
  };

  // Second way to get formData as an object
  const secondWay = Object.fromEntries(formData.entries());
  console.log("second way: ", secondWay);

  let check = false;

  try {
    const response = await fetch(`${process.env.MOCK_API_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error("Post req is declined");

    const data = await response.json();

    check = true;

    return data;
  } catch (error) {
    console.log(error);
  } finally {
    if (!check) return null;

    revalidatePath("/products");
    redirect("/products");
  }
};
