import { ArrowRight, Info } from "lucide-react";
import React from "react";

const FluidoterapiaTips = () => {
  return (
    <div className="bg-white mt-4 text-gray-700 p-4 md:max-w-[300px] md:mt-28 rounded-sm">
      <div className="flex gap-2">
        <Info size={24} className="text-primary" />

        <h1 className="text-primary font-light text-xl">Orientações</h1>
      </div>
      <p>Regras de arredondamento para infusão manual:</p>
      <div className="flex flex-col gap-2">
        <div className="flex bg-gray-100 md:max-w-[300px] p-2 gap-8 rounded-sm">
          <p className="font-bold text-primary">0,5</p>
          <ArrowRight size={20} />
          <p className="font-bold ">1 gota / 2s</p>
        </div>
        <div className="flex bg-gray-100 md:max-w-[300px] p-2 gap-8 rounded-sm">
          <p className="font-bold text-primary">0,33</p>
          <ArrowRight size={20} />
          <p className="font-bold ">1 gota / 3s</p>
        </div>
        <div className="flex bg-gray-100 md:max-w-[300px] p-2 gap-8 rounded-sm">
          <p className="font-bold text-primary">1,67</p>
          <ArrowRight size={20} />
          <p className="font-bold ">~2 gotas / s</p>
        </div>
      </div>
    </div>
  );
};

export default FluidoterapiaTips;
