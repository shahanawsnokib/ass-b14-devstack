import React from "react";
import banner from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="flex justify-around items-center  flex-col container mx-auto mt-8 md:flex-row md:text-start text-center">
      <div>
        <h1 className="text-4xl font-bold">Build Your Ideal</h1>
        <h2 className="text-4xl font-bold bg-linear-to-r from-orange-500 via-pink-600 to-purple-950 bg-clip-text text-transparent">
          {" "}
          Development Stack
        </h2>
        <p>
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <button className="btn btn-warning rounded-2xl mr-2">
          Explore Technologies
        </button>
        <button className="btn rounded-2xl">Learn More</button>
      </div>

      <img src={banner} alt="" />
    </div>
  );
};

export default Hero;
