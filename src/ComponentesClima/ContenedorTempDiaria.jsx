import React from 'react'
import "../Estilos/ContenedorTempDiaria.css"
import { TemperaturaDiaria } from './TemperaturaDiaria'

export const ContenedorTempDiaria = ({temp00,temp03,temp06,temp09,temp12, temp15, temp18, temp21, temp24, unidadTemp,horaDiaria12AM}) => {
  return (
    <div className='claseContenedorTemp1'>
    <div className='contenedorSecundarioTemp'>
      <TemperaturaDiaria temperatura={temp00} hora={"00:00 hs"} unidadTemp={unidadTemp}/>
      <TemperaturaDiaria temperatura={temp03} hora={"03:00 hs"} unidadTemp={unidadTemp}/>
      <TemperaturaDiaria temperatura={temp06} hora={"06:00 hs"} unidadTemp={unidadTemp}/>
      <TemperaturaDiaria temperatura={temp09} hora={"09:00 hs"} unidadTemp={unidadTemp}/>
      <TemperaturaDiaria temperatura={temp12} hora={"12:00 hs"} unidadTemp={unidadTemp}/>
      </div>
      <div className='contenedorSecundarioTemp'>
      <TemperaturaDiaria temperatura={temp15} hora={"15:00 hs"} unidadTemp={unidadTemp}/>
      <TemperaturaDiaria temperatura={temp18} hora={"18:00 hs"} unidadTemp={unidadTemp}/>
      <TemperaturaDiaria temperatura={temp21} hora={"21:00 hs"} unidadTemp={unidadTemp}/>
      <TemperaturaDiaria temperatura={temp24} hora={"24:00 hs"} unidadTemp={unidadTemp}/>
    </div>

    </div>
  )
}
