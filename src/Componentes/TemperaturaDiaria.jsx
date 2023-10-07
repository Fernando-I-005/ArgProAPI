import React from 'react'
import "./TemperaturaDiaria.css"

export const TemperaturaDiaria = ({ temperatura, hora ,unidadTemp }) => {
  return (
    <div className='temperaturaDiaria'>

      <div className='tValor'>
        {temperatura} 
        <span className='tValorUnidad'> {unidadTemp}</span>
      </div>


      <div className='horaValor' >
        {hora}
        <img />
        
      </div>

    </div>
  )
}
