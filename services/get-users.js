import { wait } from "@/utils/wait";

export const getUsers = async () => {
  await wait(5000);

  try {
    const response = await fetch(`${process.env.MOCK_API_URL}/users`);

    if (!response.ok) throw new Error("Fetch failed");

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
