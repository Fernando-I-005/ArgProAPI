import React from 'react';
import { AppClima } from "./AppClima";
import { AppTransito } from "./AppTransito";
import "./App.css"

export const App = () => {
  return (
    <div className="contenedorApp">
      <div className="mediaPantallaClima" >
        <AppClima />
      </div>

      <div className="mediaPantallaTransito">
        <AppTransito />
      </div>

    </div>
  )
}

