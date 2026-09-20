import React, { use } from "react";

import TechCard from "./TechCard";
import Stack from "./Stack";

import type { TtachData } from "./TtachData";

interface Ipromise {
  promise: Promise<TtachData[]>;
}

const Technologies = ({ promise }: Ipromise) => {
  const tech = use(promise);

  const [selectedTech, setSelectedTech] = React.useState<TtachData[]>([]);

  const addToStack = (technology: TtachData) => {
    setSelectedTech((current) => {
      // Don't add the same technology twice
      const alreadyExists = current.some(
        (item) => item.id === technology.id
      );

      if (alreadyExists) {
        return current;
      }

      return [...current, technology];
    });
  };

  const removeFromStack = (id: string) => {
    setSelectedTech((current) =>
      current.filter((item) => item.id !== id)
    );
  };

  const removeAll = () => {
    setSelectedTech([]);
  };

  return (
    <div className="container mx-auto">

      <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
        <h1 className="text-4xl font-bold">
          Explore the{" "}
          <span className="bg-linear-to-r from-orange-500 via-pink-600 to-purple-950 bg-clip-text text-4xl font-bold text-transparent">
            Technologies
          </span>
        </h1>

        <p className="text-xl text-gray-400">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="my-10 flex flex-col gap-6 md:flex-row">

        <section className="w-full md:w-9/12">
          <TechCard
            tech={tech}
            addToStack={addToStack}
          />
        </section>

        <section className="w-full md:w-3/12">
          <Stack
            selectedTech={selectedTech}
            removeFromStack={removeFromStack}
            removeAll={removeAll}
          />
        </section>

      </div>
    </div>
  );
};

export default Technologies;