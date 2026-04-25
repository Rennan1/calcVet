import React from 'react'

const IntroFluidoterapia = () => {
  return (
    <div>
      <h1 className="text-4xl text-primary transition">Fluidoterapia</h1>
      <div className="text-gray-500 font-mono">
        A fluidoterapia veterinária é utilizada para repor fluidos e manter a
        homeostase do organismo dos animais. Por meio de cálculos específicos,
        determina-se o volume ideal para corrigir desidratação, compensar perdas
        e auxiliar na recuperação, garantindo segurança e eficácia no
        tratamento.
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
    </div>
  )
}

export default IntroFluidoterapia
