import React from 'react';
import { AppClima } from "./AppClima";
import { AppTransporte } from "./AppTransporte";
import "./App.css"
import { useEffect, useState } from "react"
import cargandov3 from "../recursos/cargandoV3.svg"




export const App = () => {

  // codigo fetch nuevo
  const [cargando, setcargando] = useState(true);  //estado inicial de pagina modo cargando
  const [jsonClima2, setjsonClima2] = useState(null); // estado inicial de jsonclima

  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=-41.1456&longitude=-71.3082&hourly=temperature_2m,relativehumidity_2m,pressure_msl,visibility,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=1 ")
      .then((respuestaApi) => respuestaApi.json()) //transforma promesa a formato json
      .then((info) => {
        setjsonClima2(info); //luego de promesa guarda la info obtenida en jsonClima2
        setcargando(false);  //luego de promesa abandona el estado de cargando
        console.log(info)
      })
      .catch((ex) => {
        console.error(ex); // para manejar errores...verrrrrrrrrr
      })
  }, []);


 
  return (
    <>
      {/* renderizado para estado de cargando activo y jsonClima sin recibir*/}
      <div>
        {cargando && (
          <div className="contenedorApp">
            <div className="mediaPantallaClima" >

              <div className='textocargando'>
                <h3 >Cargando...</h3>
              </div>

              <div>
                <img className='imagenCargando' src={cargandov3} alt="cargando" />
              </div>


            </div>

            <div className="mediaPantallaTransito">
              <AppTransporte />
            </div>
          </div>
        )}
      </div>




      {/* renderizado para estado de cargado desactivado y jsonClima2 recibido */}
      <div>
        {!cargando && jsonClima2 && (
          <div className="contenedorApp">

            <div className="mediaPantallaClima" >
              <AppClima jsonClima={jsonClima2}
              />
            </div>

            <div className="mediaPantallaTransito">
              <AppTransporte />
            </div>

          </div>
        )}</div>

    </>

  )

}

/*

  return (  
    <div className="contenedorApp">
      <div className="mediaPantallaClima" >
        <AppClima 
          jsonClima={jsonClima2}
        />
      </div>

      <div className="mediaPantallaTransito">
        <AppTransporte />
      </div>

    </div>
  )
}
*/
