import React from 'react'
import { useEffect, useState } from "react"
import "../Estilos/AppTransporte.css"
import { ContenedorPrincipalTransporte } from "./ContenedorPrincipalTransporte"
//import jsonTransporte from "../utilidades/jsonTransporteReducido.json"
import cargandov1 from "../recursos/cargandoV3.svg"


export const AppTransporte = () => {
  // codigo fetch nuevo
  const [cargando2, setcargando2] = useState(true);  //estado inicial de pagina modo cargando
  const [jsonTransporte2, setjsonTransporte2] = useState(null); // estado inicial de jsonclima


  useEffect(() => {
    const interval = setInterval(() => {
      fetch("https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6")

        .then((respuestaApi) => respuestaApi.json()) //transforma promesa a formato json
        .then((info) => {
          setjsonTransporte2(info); //luego de promesa guarda la info obtenida en jsonTransporte2
          setcargando2(false);  //luego de promesa abandona el estado de cargando
        })
        .catch((ex) => {
          console.error(ex); // para manejar errores...investigar luego
        })
    }, 31000);
    return () => clearInterval(interval);
  }, []);



  return (
    <>
      {/* renderizado para estado de cargando activo y jsonTransporte2 sin recibir*/}
      <div>
        {cargando2 && (
          <>
            <div className=".mediaPantallaTransito" >
              <span className='contenedorBorde'>
                <span><h3 className='textocargandoT' >Cargando...</h3>
                </span>
                <img className='imagenCargandoT' src={cargandov1} alt="cargando" />
              </span>
            </div>
          </>
        )}
      </div>

      {/* renderizado para estado de cargado desactivado y jsonTransporte2 recibido */}
      <div>
        {!cargando2 && jsonTransporte2 && (
          <div className="estiloAppTransporte">
            <div>
              <ContenedorPrincipalTransporte
                jsonTransporte={jsonTransporte2} />
            </div>
          </div>
        )}</div>
    </>


  )
}
