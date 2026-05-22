import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Input } from "../components/ui/input";


const CalcRegraDeTres = () => {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [valor3, setValor3] = useState("");
  const [resultado, setResultado] = useState("");

  useEffect(() => {
    calculo();
  }, [valor1, valor2, valor3]);
  const calculo = () => {
    if (valor1 && valor2 && valor3) {
      const res = (valor2 * valor3) / valor1;
      setResultado(res.toFixed(2));
    }
  };

  return (
    <div className="flex flex-col gap-5 mt-10 bg-white p-5 shadow rounded-xl border-primary border-[0.2px] md:max-w-[500px] items-center justify-center">
      <div className="flex gap-5 items-center">
        <Input
          type="number"
          value={valor1}
          onChange={(e) => setValor1(e.target.value)}
          placeholder="A"
          className="text-center w-full md:text-xl md:h-12 md:max-w-[120px]"
        />
        <p className="bg-green-500 px-2 py-1 rounded text-sm font-bold">
          ESTÁ PARA
        </p>
        <Input
          type="number"
          value={valor2}
          onChange={(e) => setValor2(e.target.value)}
          placeholder="B"
          className="text-center w-full md:text-xl md:h-12 md:max-w-[120px]"
        />
      </div>
      <h1 className="bg-black/90 text-green-500 p-2 font-bold rounded-xl">
        ASSIM COMO
      </h1>
      <div className="flex gap-5 items-center">
        <Input
          type="number"
          value={valor3}
          onChange={(e) => setValor3(e.target.value)}
          placeholder="C"
          className="text-center w-full md:text-xl md:h-12 md:max-w-[120px]"
        />

        <p className="bg-green-500 px-2 py-1 rounded text-sm font-bold">
          ESTÁ PARA
        </p>

        <Input
          value={resultado}
          disabled
          placeholder="X"
          className="text-center w-full md:text-xl md:h-12 md:max-w-[120px] bg-green-600 text-white placeholder:text-white"
        />
      </div>
    </div>
  );
};

export default CalcRegraDeTres;
