import { ArrowRight, Info } from "lucide-react";
import React from "react";

const RegraDeTresTips = () => {
  return (
    <div className="bg-white mt-4 text-gray-700 p-7 max-w-[260px] md:mt-[270px] mx-auto rounded-sm text-center shadow">
      
      <div className="flex items-center justify-center gap-2">
        <Info size={24} className="text-primary" />
        <h1 className="text-primary font-light text-xl">Orientações</h1>
      </div>

      <p className="p-2">Exemplo para uso diário</p>

      <div className="flex flex-col items-center">
        <div className="flex flex-col bg-gray-100 rounded w-full">
          
          <div className="flex justify-between items-center p-2">
            <p className="font-bold text-primary">2kg</p>
            <ArrowRight size={20} />
            <p className="font-bold">40mg</p>
          </div>

          <div className="flex justify-between items-center p-2">
            <p className="font-bold text-primary">5kg</p>
            <ArrowRight size={20} className="md:mr-5"/>
            <p className="font-bold md:mr-3">X</p>
          </div>

          <div className="text-primary text-xl font-bold text-center p-2">
            <p>X = 100mg</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RegraDeTresTips;