import React from "react";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Adicionar21Dias = () => {
  const [dataInicial, setDataInicial] = React.useState("");
  const [novaData, setNovaData] = React.useState(null);

  React.useEffect(() => {
    if (!dataInicial) {
      setNovaData(null);
      return;
    }

    const inicio = new Date(dataInicial + "T00:00:00");

    inicio.setDate(inicio.getDate() + 21);

    setNovaData(inicio);
  }, [dataInicial]);

  const limpar = () => {
    setDataInicial("");
    setNovaData(null);
  };

  return (
    <div className="bg-white p-4 shadow">
      <div className="flex gap-2">
        <Calculator className="text-primary" size={24} />
        <h1 className="text-xl text-primary font-light mb-2">
          Adicionar 21 dias
        </h1>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col md:flex-row md:gap-5 w-full">
          <div className="flex flex-col w-full md:flex-1">
            <label htmlFor="data-inicial" className="font-light">
              Data Inicial
            </label>
            <Input
              id="data-inicial"
              type="date"
              className="w-full md:h-12 md:rounded-none"
              value={dataInicial}
              onChange={(e) => setDataInicial(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={limpar}
            className="hover:bg-red-700 md:h-12 transition w-full hover:scale-105 rounded-none"
          >
            Limpar
          </Button>
        </div>

        {novaData !== null && (
          <p className="text-xl font-bold mt-4 text-center bg-gray-50 text-primary rounded-full">
            A nova data é {novaData.toLocaleDateString("pt-BR")}
          </p>
        )}
      </div>
    </div>
  );
};

export default Adicionar21Dias;
