import React from "react";
import type { TtachData } from "./TtachData";

interface TechCardProps {
  tech: TtachData[];
  addToStack: (technology: TtachData) => void;
}

const TechCard = ({ tech, addToStack }: TechCardProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {tech.map((techItem: TtachData) => (
        <div
          key={techItem.id}
          className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="flex items-start justify-between">
            <img
              src={techItem.icon}
              alt={techItem.name}
              className="h-10 w-10"
            />

            <span className="rounded-full border border-sky-100 bg-sky-50 px-4 py-1.5 text-sm text-sky-500">
              {techItem.badge}
            </span>
          </div>

          <h2 className="mt-6 text-2xl font-bold text-slate-900">
            {techItem.name}
          </h2>

          <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-500">
            {techItem.description}
          </p>

          <div className="my-4 border-t border-slate-100"></div>

          <div className="flex items-center justify-between">
            <span className="rounded-md bg-slate-100 px-3 py-1 text-sm text-slate-600">
              {techItem.category}
            </span>

            <span className="text-sm text-slate-600">
              {techItem.difficulty}
            </span>

            <div className="flex items-center gap-1 text-sm font-medium">
              <span className="text-yellow-400">★</span>
              <span className="text-slate-700">{techItem.rating}</span>
            </div>
          </div>

          <button
            onClick={() => addToStack(techItem)}
            className="mt-4 w-full rounded-lg bg-slate-950 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Add to Stack
          </button>
        </div>
      ))}
    </div>
  );
};

export default TechCard;