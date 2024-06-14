import * as React from "react";
const { useState, useEffect } = React;

export default function Editor() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("counter", counter);
  }, [counter]);
  return (
    <div>
      <h1>Editor</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <pre>{JSON.stringify({ counter }, null, 2)}</pre>
    </div>
  );
}
