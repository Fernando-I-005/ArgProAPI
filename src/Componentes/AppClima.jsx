import React from 'react'
import "./AppClima.css"
import { ContenedorPrincipal } from './ContenedorPrincipal.jsx'
import  {ContenedorSecundario} from "./ContenedorSecundario"
import {ContenedorTempDiaria} from "./ContenedorTempDiaria"

export const AppClima = () => {
  return (
    <div className="estiloAppClima">
    <div>
    <ContenedorPrincipal/>
    </div>
    
    <div>
    <ContenedorTempDiaria/>
    </div>

    <div>
    <ContenedorSecundario/>
    </div>


    </div>
  )
}
