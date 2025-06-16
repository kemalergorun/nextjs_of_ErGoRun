"use client";
import ChildOfClientSide from "@/components/ChildOfClientSide";
// Gives error:
// import "server-only"

import { useParams, useRouter, useSearchParams } from "next/navigation";

export default function ClientSidePage() {
  console.log("ClientSidePage is rendered/re-rendered");

  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();

  console.log(params);

  console.log(searchParams);
  console.log(searchParams.get("color"));
  console.log(searchParams.get("size"));
  console.log(searchParams.get("gender"));

  console.log(
    `mydomain.com/clothes?color=${searchParams.get(
      "color"
    )}&size=${searchParams.get("size")}`
  );

  const fetchClothes = async () => {
    await fetch(
      `mydomain.com/clothes?color=${searchParams.get(
        "color"
      )}&size=${searchParams.get("size")}`
    );
  };

  const handleClick = () => {
    // router.push("/login");
    router.replace("/login");
  };

  return (
    <div>
      <h1>Client Side Component</h1>
      <p>use client is added on the top of the file</p>
      <p>{JSON.stringify(params)}</p>
      <button onClick={handleClick}>Go to Login Page</button>

      <ChildOfClientSide />
    </div>
  );
}
