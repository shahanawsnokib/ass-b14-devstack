import React from "react";

import type { TtachData } from "./TtachData"

interface StackProps {
  selectedTech: TtachData[];
  removeFromStack: (id: string) => void;
  removeAll: () => void;
}

const Stack = ({
  selectedTech,
  removeFromStack,
  removeAll,
}: StackProps) => {
  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="text-xl font-bold text-slate-900">
        Your Stack
      </h2>

        {selectedTech.length !== 0 ? (
        <p className="mt-1 text-sm text-slate-400">
          {selectedTech.length} Technology Selected
        </p>
      ) : (
        <p className="mt-1 text-sm text-slate-400">
          No technologies selected yet.

          <p className="py-5 px-3 border rounded-2xl mt-5 text-center ">Your Stack Is Empty</p>
        </p>
      )}
      <div className="mt-5 space-y-2">

        {selectedTech.map((tech) => (
          <div
            key={tech.id}
            className="flex items-center justify-between rounded-xl border border-slate-200 p-3"
          >

            <div className="flex items-center gap-3">

              <img
                src={tech.icon}
                alt={tech.name}
                className="h-10 w-10"
              />

              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  {tech.name}
                </h3>

                <p className="text-[10px] text-slate-400">
                  {tech.category}
                </p>
              </div>

            </div>

            <button
              onClick={() => removeFromStack(tech.id)}
              className="text-3xl font-light text-slate-400"
            >
              ×
            </button>

          </div>
        ))}

      </div>

      {selectedTech.length > 0 && (
        <button
          onClick={removeAll}
          className="mt-14 w-full rounded-lg border border-red-300 py-2 text-sm font-semibold text-red-500"
        >
          Remove All
        </button>
      )}

    </div>
  );
};

export default Stack;