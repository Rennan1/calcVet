import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import {useState} from "react"

const Fluidoterapia = () => {
  const [mlTotalMacro, setMlTotalMacro] = useState("");
  const [horasMacro, setHorasMacro] = useState("");
  const [resultadoMacro, setResultadoMacro] = useState("");
  const [mlTotalMicro, setMlTotalMicro] = useState("");
  const [horasMicro, setHorasMicro] = useState("");
  const [resultadoMicro, setResultadoMicro] = useState("");

  const calcularMacroEquipo = (mlTotalMacro, horasMacro) => {
    const mlPorHoraMacro = mlTotalMacro / horasMacro;
    const resultadoMacro = mlPorHoraMacro / 180; // Convertendo para gotas por segundo
    setResultadoMacro(resultadoMacro.toFixed(2))
  }

  const calcularMicroEquipo = (mlTotalMicro, horasMicro) => {
    const mlPorHoraMicro = mlTotalMicro / horasMicro;
    const resultadoMicro = mlPorHoraMicro / 60; // Convertendo para microgotas por segundo
    setResultadoMicro(resultadoMicro.toFixed(2))
  }


  const limparCamposMacro = () => {
    setMlTotalMacro("");
    setHorasMacro("");
    setResultadoMacro("");
  }

  const limparCamposMicro = () => {
    setMlTotalMicro("");
    setHorasMicro("");
    setResultadoMicro("");
  }

  return (
    <div>
    <h1 className="text-4xl text-primary transition">Fluidoterapia</h1>
    <div className="text-gray-500 font-mono">
      A fluidoterapia veterinária é utilizada para repor fluidos e manter a
      homeostase do organismo dos animais. Por meio de cálculos específicos,
      determina-se o volume ideal para corrigir desidratação, compensar perdas e
      auxiliar na recuperação, garantindo segurança e eficácia no tratamento.
    </div>
    <div className="mt-4 text-gray-700">
      <p>Sempre arredonde para valores executáveis.</p>
      <p>Utilize para os resultados:</p>
      <ul className="list-disc list-inside">
        <li>0,5 → 1 gota/2 s</li>
        <li>0,33 → 1 gota/3 s</li>
        <li>1,67 → ~2 gotas/seg</li>
      </ul>
    </div>
    <p className="text-xl mt-400 mt-4">Cálculo de Reanimação</p>
    <div className="flex flex-col text-gray-700">
    <span>Hipovolemia - bolus 15min - Pode repetir</span>
    <span>Cão: 15 - 20ml/kg</span>
    <span>Gato: 5 a 10ml/kg</span>
    </div>
    <div className="flex flex-col md:flex-row mt-4 gap-2">
    <div className="flex flex-col">
    <label className="">Peso do animal (kg)</label>
    <Input placeholder="Exemplo: 18" className='w-full md:max-w-[120px]'/>
    </div>

    <div className="flex flex-col">
    <label className="">Volume total a ser administrado (ml)</label>
    <Input placeholder="Exemplo: 360" className='w-full md:max-w-[120px]'/>
    </div>
    </div>
    <div className="mt-10">
    </div>
    <p className="text-xl">Macro Equipo - 20 gotas/mL</p>
    <div className="flex flex-col md:flex-row gap-5">
      <div className="flex flex-col">
      <label className="font-light">Valor total em mL</label>
      <Input 
      value={mlTotalMacro}
      onChange={(e) => setMlTotalMacro(e.target.value)}
      placeholder="Exemplo: 360" className='w-full md:max-w-[120px]'/>
      </div>
      <div className="flex flex-col">
      <label className="font-light">Em quantas horas?</label>
      <Input 
      value={horasMacro}
      onChange={(e) => setHorasMacro(e.target.value)}
      placeholder="Exemplo: 2 " className='w-full md:max-w-[120px]'/>    
      </div>
      <div className="flex gap-2 mt-1">
      <Button variant="outline" onClick={() => calcularMacroEquipo(mlTotalMacro, horasMacro)} className="mt-5 hover:bg-green-500 transition hover:scale-105">Calcular</Button>
      <Button variant="outline" onClick={() => limparCamposMacro()} className="mt-5 hover:bg-red-500 transition hover:scale-105">Limpar</Button>
      </div>
      {resultadoMacro && <p className="text-lg font-bold mt-5">Resultado: {resultadoMacro} gota(s)/segundo</p>}

    </div>
    <p className="text-xl mt-10">Micro Equipo - 60 microgotas/mL</p>
    <div className="flex flex-col md:flex-row gap-5">
      <div className="flex flex-col">
      <label className="font-light">Valor total em mL</label>
      <Input 
      value={mlTotalMicro}
      onChange={(e) => setMlTotalMicro(e.target.value)}
      placeholder="Exemplo: 360" className='w-full md:max-w-[120px]'/>
      </div>
      <div className="flex flex-col">
      <label className="font-light">Em quantas horas?</label>
      <Input 
      value={horasMicro}
      onChange={(e) => setHorasMicro(e.target.value)}
      placeholder="Exemplo: 2 " className='w-full md:max-w-[120px]'/>
      </div>
      <div className="flex gap-2 mt-1">
      <Button variant="outline" onClick={() => calcularMicroEquipo(mlTotalMicro, horasMicro)} className="mt-5 hover:bg-green-500 transition hover:scale-105">Calcular</Button>
      <Button variant="outline" onClick={() => limparCamposMicro()} className="mt-5 hover:bg-red-500 transition hover:scale-105">Limpar</Button>
      </div>
      {resultadoMicro && <p className="text-lg font-bold mt-5">Resultado: {resultadoMicro} microgota(s)/segundo</p>}

    </div>
    </div>
  );
};

export default Fluidoterapia;
