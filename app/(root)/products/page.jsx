import { wait } from "@/utils/wait";

export const metadata = {
  title: "Products | Learning Next",
  description:
    "This is the about page where you can be navigated to different routes.",
};

export default async function ProductPage() {
  await wait(3000);

  return <div>ProductPage</div>;
}
