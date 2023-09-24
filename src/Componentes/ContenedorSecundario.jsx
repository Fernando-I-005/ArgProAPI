import React from 'react'
import "./ContenedorSecundario.css"
import { CompIndividual } from "./CompIndividual"
import { CompIndividualDoble } from './CompIndividualDoble'

export const ContenedorSecundario = () => {
  return (
    <div className='claseContenedorSecundario'>
      <div className='claseBloque'>
        <CompIndividual categoria="Indice UV" valor="6" unidad=""/>
        <CompIndividual categoria="Viento" valor="11.12" unidad=" Km/h"/>
        <CompIndividualDoble categoria="Amanecer / Atardecer" valor="6.35" unidad1="AM" valor2="8:01" unidad2="PM"/>
      </div>
      <div>
        <CompIndividual categoria="Humedad" valor="12" unidad=" %"/>
        <CompIndividual categoria="Visibilidad" valor="6.1" unidad=" Km"/>
        <CompIndividual categoria="Calidad de aire" valor="105" unidad=""/>
      </div>

    </div>
  )
}
