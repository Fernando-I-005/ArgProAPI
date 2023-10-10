import React from 'react'
import "./ContenedorSecundario.css"
import { CompIndividual } from "./CompIndividual"
import { CompIndividualDoble } from './CompIndividualDoble'

export const ContenedorSecundario = ({ valorIndiceUV, valorViento, unidadViento, valorHoraAmanecer, valorHoraAtardecer, valorHumedad, unidadHumedad, valorVisibilidad, unidadVisibilidad, valorPresion, unidadPresion, direccionViento,textoIndiceUV }) => {
  return (
    <div className='claseContenedorSecundario'>
      <div className='claseBloque'>
        
        <CompIndividualDoble categoria="Indice UV" valor={valorIndiceUV} valor2={textoIndiceUV} />

        <CompIndividualDoble categoria="Viento / Dirección" valor={valorViento} unidad1={unidadViento}  valor2={direccionViento} />
        <CompIndividualDoble categoria="Amanecer / Atardecer" valor={valorHoraAmanecer} valor2={valorHoraAtardecer}  />
      </div>
      <div>
        <CompIndividual categoria="Humedad" valor={valorHumedad} unidad={unidadHumedad} />
        <CompIndividual categoria="Visibilidad" valor={valorVisibilidad} unidad={unidadVisibilidad} />
        <CompIndividual categoria="Presión" valor={valorPresion} unidad={unidadPresion} />
      </div>

    </div>
  )
}
