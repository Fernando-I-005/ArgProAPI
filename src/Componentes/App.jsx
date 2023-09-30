import React from 'react';
import { AppClima } from "./AppClima";
import { AppTransporte } from "./AppTransporte";
import "./App.css"

export const App = () => {
  return (
    <div className="contenedorApp">
      <div className="mediaPantallaClima" >
        <AppClima />
      </div>

      <div className="mediaPantallaTransito">
        <AppTransporte />
      </div>

    </div>
  )
}

