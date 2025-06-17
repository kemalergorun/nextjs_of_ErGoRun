import { wait } from "@/utils/wait";

export const getProducts = async () => {
  await wait(3000);

  try {
    const response = await fetch(`${process.env.MOCK_API_URL}/products`);

    if (!response.ok) throw new Error("Fetch failed");

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
