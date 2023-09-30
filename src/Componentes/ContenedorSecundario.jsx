import React from 'react'
import "./ContenedorSecundario.css"
import { CompIndividual } from "./CompIndividual"
import { CompIndividualDoble } from './CompIndividualDoble'

export const ContenedorSecundario = ({valorIndiceUV,valorViento,unidadViento,valorHoraAmanecer,valorHoraAtardecer,valorHumedad,unidadHumedad,valorVisibilidad,unidadVisibilidad,valorPresion,unidadPresion}) => {
  return (
    <div className='claseContenedorSecundario'>
      <div className='claseBloque'>
        <CompIndividual categoria="Indice UV" valor={valorIndiceUV}/>
        <CompIndividual categoria="Viento" valor={valorViento} unidad={unidadViento}/>
        <CompIndividualDoble categoria="Amanecer / Atardecer" valor={valorHoraAmanecer} unidad1="AM" valor2={valorHoraAtardecer} unidad2="PM"/>
      </div>
      <div>
        <CompIndividual categoria="Humedad" valor={valorHumedad} unidad={unidadHumedad}/>
        <CompIndividual categoria="Visibilidad" valor={valorVisibilidad} unidad={unidadVisibilidad}/>
        <CompIndividual categoria="Presión" valor={valorPresion} unidad={unidadPresion}/>
      </div>

    </div>
  )
}
