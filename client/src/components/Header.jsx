import React from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-500 shadow-md">
      <div className="max-w-6xl mx-auto p-4 shadow-md flex justify-between items-center">
        <div className="flex flex-wrap">
          <NavLink to={"/"}>
            <span className="text-2xl font-bold  text-amber-200">Next</span>
            <span className="text-2xl font-bold text-white">Key</span>
          </NavLink>
        </div>
        <form
          className="bg-white rounded-md p-2 flex items-center w-24 sm:w-64 justify-between transition-all duration-200"
        >
          <input type="text" placeholder="Search..." className="outline-none" />
          <FaSearch className="text-amber-950"/>
        </form>

        <ul className="flex justify-between space-x-5 text-white">
          <li className="hidden sm:inline hover:underline">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="hidden sm:inline hover:underline">
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li className="hidden sm:inline hover:underline">
            <NavLink to={"/profile"}>Profile</NavLink>
          </li>
          <li className=" hover:underline">
            <NavLink to={"/sign-in"}>SignIn</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
