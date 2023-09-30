import React from 'react'
import "./AppClima.css"
import { ContenedorPrincipal } from './ContenedorPrincipal.jsx'
import { ContenedorSecundario } from "./ContenedorSecundario"
import { ContenedorTempDiaria } from "./ContenedorTempDiaria"
//import { InfoData } from './InfoData'
import imagenNube from "../recursos/99 - TormentaGranizo.png"

const unidadtemperatura = "ºC"
const unidadViento = "Km/h"
const unidadHumedad = "%"
const unidadVisibilidad = "Km"
const unidadPresion = "hPa"









export const AppClima = () => {
  const imagenNube1 = imagenNube;
  //const solNube = solNube



 





  return (
    <div className="estiloAppClima">

      <ContenedorPrincipal
        ciudad="Bariloche"
        fecha="05/02/23"
        hora="12:12 AM"
        tempActual="29"
        unidadTemp={unidadtemperatura}
        imagenPronostico={imagenNube1}
        textoPronostico="Lluvia moderada"
        tempMax="52"
        tempMin="-88" />

      <ContenedorTempDiaria
        temp00="-9"
        temp03="-5"
        temp06="9"
        temp09="19"
        temp12="29"
        temp15="19"
        temp18="8"
        temp21="2"
        temp24="-2"
        unidadTemp={unidadtemperatura} />

      <ContenedorSecundario
        valorIndiceUV="16"
        valorViento="25.36"
        unidadViento={unidadViento}
        valorHoraAmanecer="6:35"
        valorHoraAtardecer="18:00"
        valorHumedad="50"
        unidadHumedad={unidadHumedad}
        valorVisibilidad="6.9"
        unidadVisibilidad={unidadVisibilidad}
        valorPresion="1.050"
        unidadPresion={unidadPresion}

      />


    </div>
  )
}
