import React from 'react'
import "./ContenedorTempDiaria.css"
import { TemperaturaDiaria } from './TemperaturaDiaria'

export const ContenedorTempDiaria = () => {
  return (
    <div className='claseContenedorTemp1'>
    <div className='contenedorSecundarioTemp'>
      <TemperaturaDiaria temperatura={5} hora={"12:00 AM"}/>
      <TemperaturaDiaria temperatura={6} hora={"03:00 AM"}/>
      <TemperaturaDiaria temperatura={9} hora={"06:00 AM"}/>
      <TemperaturaDiaria temperatura={12} hora={"09:00 AM"}/>
      <TemperaturaDiaria temperatura={24} hora={"12:00 PM"}/>
      </div>
      <div className='contenedorSecundarioTemp'>
      <TemperaturaDiaria temperatura={18} hora={"03:00 PM"}/>
      <TemperaturaDiaria temperatura={12} hora={"06:00 PM"}/>
      <TemperaturaDiaria temperatura={8} hora={"09:00 PM"}/>
      <TemperaturaDiaria temperatura={8} hora={"12:00 AM"}/>
    </div>

    </div>
  )
}
