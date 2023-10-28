import React from 'react'
import "../Estilos/TMaxMin.css"

export const TMaxMin = ({ tempMaxMin, textoMaxMin, unidadTemp }) => {
  return (
    <div className='contenedorTmaxTmin'>
      <span className='textoMaxMinConstante'> {textoMaxMin}</span>
      <span className='textoMaxMinVariable' > {tempMaxMin} {unidadTemp}</span>
    </div>
  )
}
