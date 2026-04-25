import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `p-4 transition ${
      isActive
        ? "text-primary font-semibold bg-gray-100"
        : "hover:text-primary hover:scale-110"
    }`;
    
  return (
    <aside className="w-64 flex min-h-screen border-r pt-5">
      <ul className="flex flex-col">
        <NavLink to="/" className={linkClass}>
          Tela Inicial
        </NavLink>
        <NavLink to="/fluidoterapia" className={linkClass}>
          Cálculo de Fluidoterapia
        </NavLink>
      </ul>
    </aside>
  );
};

export default Sidebar;
