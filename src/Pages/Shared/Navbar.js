import React from "react";
import { NavLink } from "react-router-dom";
import profile from "../../img/IMG_0098.JPG";

const Navbar = () => {
  return (
    <nav className="navbar bg-orange-100 rounded-3xl px-3 text-black  font-serif">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="py-2">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-pink-200 underline" : "bg-lime-200"
                }
                to="/completed"
              >
                Completed Tasks
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-pink-200 underline" : "bg-yellow-200"
                }
                to="/todo"
              >
                To-Do
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-pink-200 underline" : "bg-indigo-200"
                }
                to="/calendar"
              >
                Calendar
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/">Task Management tool</NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li className="px-2">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-pink-200 underline" : "bg-lime-200"
              }
              to="/completed"
            >
              Completed Tasks
            </NavLink>
          </li>
          <li className="px-2">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-pink-200 underline" : "bg-yellow-200"
              }
              to="/todo"
            >
              To-Do
            </NavLink>
          </li>
          <li className="px-2">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-pink-200 underline" : "bg-indigo-200"
              }
              to="/calendar"
            >
              Calendar
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink to="profile">
          <div class="avatar online">
            <div class="w-10 rounded-full">
              <img alt="" src={profile} />
            </div>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
