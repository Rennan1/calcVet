import { Calculator, Droplet, House } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `p-4 transition ${
      isActive
        ? "text-primary font-semibold bg-green-500/20 rounded-xl"
        : "hover:text-primary hover:scale-110"
    }`;

  return (
    <aside className="w-64 h-full border-r shadow pt-5 bg-white">
      <ul className="flex flex-col">
        <NavLink to="/" className={linkClass}>
          <House className="inline-block mr-2" size={20} />
          Tela Inicial
        </NavLink>
        <NavLink to="/fluidoterapia" className={linkClass}>
          <Droplet className="inline-block mr-2" size={20} />
          Cálculo de Fluidoterapia
        </NavLink>
        <NavLink to="/regra-de-3" className={linkClass}>
          <Calculator className="inline-block mr-2" size={20} />
          Regra de 3
        </NavLink>
      </ul>
    </aside>
  );
};

export default Sidebar;
