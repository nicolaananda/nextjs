"use client";
import { useState } from "react";

export const ClientComp = ({ data }: { data: any }) => {
  const [state, setState] = useState(data);

  function handleAddData() {
    setState([
      ...state,
      {
        id: Math.random(),
        title: `New title ${Math.random()}`,
      },
    ]);
  }

  return (
    <main>
      <button
        className="text-sm rounded text-white px-2 py-2 bg-blue-500"
        type="button"
        onClick={handleAddData}
      >
        Add data
      </button>
      <section>
        {state.map((item: any) => {
          return <div key={item.id}>{item.title}</div>;
        })}
      </section>
    </main>
  );
};
