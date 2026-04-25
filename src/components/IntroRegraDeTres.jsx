import React from "react";

const IntroRegraDeTres = () => {
  return (
    <div>
      <h1 className="text-4xl text-primary transition">Regra de Três</h1>
      <div className="text-gray-500 font-mono">
        A regra de três simples é um procedimento matemático utilizado para
        determinar um valor desconhecido a partir da relação proporcional entre
        duas grandezas.
      </div>
      <div className="mt-4 text-gray-700 font-mono text-sm hidden md:block">
        Ela se aplica quando essas grandezas variam de forma dependente, ou
        seja, a alteração em uma provoca uma mudança na outra. Essa relação pode
        ser: Diretamente proporcional: ambas aumentam ou diminuem na mesma
        proporção. Inversamente proporcional: quando uma aumenta, a outra
        diminui na mesma proporção. Para resolver, organizam-se os dados em duas
        colunas, cada uma representando uma grandeza. Em seguida, colocam-se os
        valores conhecidos e substitui-se o valor desconhecido por x. A partir
        disso, monta-se uma proporção e realiza-se o cálculo para encontrar o
        resultado. Em termos simples, é uma técnica prática e objetiva para
        resolver problemas que envolvem proporções no cotidiano.
      </div>
    </div>
  );
};

export default IntroRegraDeTres;
