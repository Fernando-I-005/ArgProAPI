import React from 'react'
import "./ContenedorPrincipal.css"

import { TMaxMin } from './TMaxMin'


export const ContenedorPrincipal = ({ ciudad, fecha, hora, tempActual, unidadTemp, imagenPronostico, textoPronostico, tempMax, tempMin }) => {
  return (
    <section className='contenedorSeccion'>
      <div className="claseContenedorLugarHora">
        <h5 className='lugar'>{ciudad} </h5>
        <h5 className='fecha'>  {fecha} </h5>
        <h6 className='hora'>  {hora} hs </h6>
      </div>

      <section className="claseContenedorGrande">
        <h1 className="temperaturaPrincipal" >{tempActual}</h1>
        <h4 className="unidadTemperatura">{unidadTemp}</h4>
        <img className="imagenPng" src={imagenPronostico} alt="Imagen del pronostico" />
      </section>

      <div>
        <h1 className='textoPronostico'>  {textoPronostico} </h1>
      </div>

      <div className='contenedorMaxMin'>
        <TMaxMin tempMaxMin={tempMin} textoMaxMin={"Min:"} unidadTemp={unidadTemp} />
        <TMaxMin tempMaxMin={tempMax} textoMaxMin={"Max:"} unidadTemp={unidadTemp} />
      </div>
    </section>
  )
}
