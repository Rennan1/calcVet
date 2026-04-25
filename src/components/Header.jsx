import React from "react";

const Header = ({ onMenuClick }) => {
  return (
    <header className="w-full border shadow-sm text-center text-3xl p-2 bg-white">
      <div className="flex justify-between md:ml-16">
        <div>
          <span>Calc</span>
          <span className="text-primary">Vet</span>
        </div>
        <button onClick={onMenuClick} className="md:hidden">
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
