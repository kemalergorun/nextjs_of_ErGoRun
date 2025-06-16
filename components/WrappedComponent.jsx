import { useState } from "react";

export default function WrappedComponent() {
  const [counter, setCounter] = useState(0);

  return (
    <button onClick={() => setCounter((prev) => prev + 1)}> {counter}</button>
  );
}
