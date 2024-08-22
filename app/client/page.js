"use client";
import { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-7xl mb-4">Count: {count}</h1>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button
        className="btn btn-secondary ml-4"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default ClientPage;
