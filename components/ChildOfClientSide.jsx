import { useState } from "react";

// Child of a client side component will be client side unless otherwise is stated
export default function ChildOfClientSide() {
  const [isShow, setIsShow] = useState(true);

  return (
    <button onClick={() => setIsShow((prev) => !prev)}>
      {isShow ? "X" : "Y"}
    </button>
  );
}
