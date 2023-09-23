import React from 'react'
import "./ContenedorSecundario.css"
import { CompIndividual } from "./CompIndividual"

export const ContenedorSecundario = () => {
  return (
    <div className='claseContenedorSecundario'>
      <div className='claseBloque'>
        <CompIndividual />
        <CompIndividual />
        <CompIndividual />
      </div>
      <div>
        <CompIndividual />
        <CompIndividual />
        <CompIndividual />
      </div>

    </div>
  )
}
