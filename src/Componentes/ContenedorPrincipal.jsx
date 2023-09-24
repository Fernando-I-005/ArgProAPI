import React from 'react'
import "./ContenedorPrincipal.css"
import imagenNube from "../Nube1.png"
import { TMaxMin } from './TMaxMin'

const imagenNube1 = imagenNube


export const ContenedorPrincipal = () => {
  return (
    <section className='contenedorSeccion'>
      <div className="claseContenedorLugarHora">
        <h5 className='lugar'>Buenos Aires </h5>
        <h6 className='hora'>  Lunes 10:45 PM </h6>
      </div>

      <section className="claseContenedorGrande">
        <h1 className="temperaturaPrincipal" >25</h1>
        <h4 className="unidadTemperatura">ºC</h4>
        <img className="imagenPng" src={imagenNube1} alt="Mi Imagen" />
      </section>


      <div className='contenedorMaxMin'>
        <TMaxMin tempMaxMin={-7} textoMaxMin={"Min:"}/>
        <TMaxMin tempMaxMin={43} textoMaxMin={"Max:"}/>
      </div>
    </section>
  )
}
