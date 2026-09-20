import React, { useState } from "react";
import logo from "../assets/logo-text.png"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

         
          <div className="text-2xl font-bold">
            <img src={logo} alt="" />
          </div>

        
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="hover:text-blue-500">
              Home
            </a>

            <a href="#" className="hover:text-blue-500">
              About
            </a>

            <a href="#" className="hover:text-blue-500">
              Services
            </a>

            <a href="#" className="hover:text-blue-500">
              Contact
            </a>
          </div>

      
          <div className="hidden md:flex gap-3">
            <button className="btn rounded-4xl">
              Sign In
            </button>

            <button className="btn btn-warning rounded-4xl">
              Sign Up
            </button>
          </div>

      
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

  
        {isOpen && (
          <div className="md:hidden mt-7 pb-5">
            <div className="flex flex-col gap-4">

              <a href="#" className="hover:text-blue-500">
                Home
              </a>

              <a href="#" className="hover:text-blue-500">
                About
              </a>

              <a href="#" className="hover:text-blue-500">
                Services
              </a>

              <a href="#" className="hover:text-blue-500">
                Contact
              </a>

         
              <button className="btn rounded-4xl">
                Sign In
              </button>

              <button className="btn btn-warning rounded-4xl">
                Sign Up
              </button>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;