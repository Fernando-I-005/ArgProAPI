import React from 'react'
import "./ContenedorTempDiaria.css"
import { TemperaturaDiaria } from './TemperaturaDiaria'

export const ContenedorTempDiaria = ({temp00,temp03,temp06,temp09,temp12, temp15, temp18, temp21, temp24, unidadTemp}) => {
  return (
    <div className='claseContenedorTemp1'>
    <div className='contenedorSecundarioTemp'>
      <TemperaturaDiaria temperatura={temp00} hora={"12:00 AM"} unidadTemp={unidadTemp}/>
      <TemperaturaDiaria temperatura={temp03} hora={"03:00 AM"} unidadTemp={unidadTemp}/>
      <TemperaturaDiaria temperatura={temp06} hora={"06:00 AM"} unidadTemp={unidadTemp}/>
      <TemperaturaDiaria temperatura={temp09} hora={"09:00 AM"} unidadTemp={unidadTemp}/>
      <TemperaturaDiaria temperatura={temp12} hora={"12:00 PM"} unidadTemp={unidadTemp}/>
      </div>
      <div className='contenedorSecundarioTemp'>
      <TemperaturaDiaria temperatura={temp15} hora={"03:00 PM"} unidadTemp={unidadTemp}/>
      <TemperaturaDiaria temperatura={temp18} hora={"06:00 PM"} unidadTemp={unidadTemp}/>
      <TemperaturaDiaria temperatura={temp21} hora={"09:00 PM"} unidadTemp={unidadTemp}/>
      <TemperaturaDiaria temperatura={temp24} hora={"12:00 AM"} unidadTemp={unidadTemp}/>
    </div>

    </div>
  )
}
