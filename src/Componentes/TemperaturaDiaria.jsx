import React from 'react'
import "./TemperaturaDiaria.css"

export const TemperaturaDiaria = ({ temperatura, hora }) => {
  return (
    <div className='temperaturaDiaria'>
      <div className='tValor'>
        {temperatura} 
        <span className='tValorUnidad'> ºC</span>
      </div>
      <div className='horaValor'>
        {hora}
      </div>
    </div>
  )
}
