import React from 'react'
import "./ContenedorPrincipal.css"
import imagenNube from "../Nube1.png"

const imagenNube1= imagenNube


export const ContenedorPrincipal = () => {
  return (
    <>
      <div className="claseContenedorLugarHora">Buenos Aires , 10:45 PM</div>
      <div className="claseContenedorGrande">25 ºC</div>
      <div className="claseContenedorGrande">
      <img className='imagen-pequena'  src={imagenNube1} alt="Mi Imagen" />
      </div>
      <div className="claseContenedorLugarHora">Min:-10º Max:45º</div>
    </>
  )
}
