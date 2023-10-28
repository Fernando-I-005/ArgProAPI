import React from 'react'
import "../Estilos/ContenedorPrincipalTransporte.css"
import { ContenedorMapa } from './ContenedorMapa'
import { useEffect, useState } from "react"




export const ContenedorPrincipalTransporte = ({ jsonTransporte }) => {

    const routeShortNames = jsonTransporte.map(item => item.route_short_name); //  Filtrar en json por el numero de linea de colectivo . 1ro crear un array con todos los valores del campo "route_short_name"
  const unicoRouteShortNames = [...new Set(routeShortNames)]; // funcion Set elimina duplicados 


  function compararElementos(a, b) { // funcion que ordena el arreglo primero por numero y luego por letras para que aparezca ordenado en el menu desplegable
    const matchA = a.match(/[A-Z]+/);
    const matchB = b.match(/[A-Z]+/);

    // Compruebe si matchA y matchB no son nulos antes de acceder a sus propiedades
    const letraA = matchA ? matchA[0] : '';   // codigo agregado para ignorar error por campo nulo
    const letraB = matchB ? matchB[0] : '';
    const numA = parseInt(a.match(/\d+/)[0]);
    const numB = parseInt(b.match(/\d+/)[0]);
    if (numA === numB) {
      return letraA.localeCompare(letraB);
    } else {
      return numA - numB;
    }
  }

  
  const listaOrdenada = unicoRouteShortNames.sort(compararElementos); //contiene un array con las lineas de colectivos sin repetir y ordenadas . funcionamiento verificado desde probador.js
  const [lineaElegida, setLineaElegida] = useState(''); //se crea constante con usestate para guardar el valor de la linea elegida
  const [jsonFiltradoPorLinea, setJsonFiltradoPorLinea] = useState([]); // se crea una constante con usestate para guardar el nuevo json filtrado por linea

 
  const handleSelectChange = (event) => {  // Manejar el cambio en el menú desplegable
    const selectedLinea = event.target.value;
    setLineaElegida(selectedLinea);
  };

  useEffect(() => {
    const jsonFiltrado = jsonTransporte.filter((item) => item.route_short_name === lineaElegida); // Filtrar el JSON original cuando cambia "lineaElegida"
    setJsonFiltradoPorLinea(jsonFiltrado);
  }, [lineaElegida, jsonTransporte]); // se agrega Jsontransporte y soluciona problema de actualizacion de posiciones en el mapa // renderiza cuando se elige una linea y cuando cambia el json

  return (
    <div className='claseContenedorPrincipalTransporte'>
      <h1 className='textoTituloTransporte '> Red de colectivos AMBA</h1>
      <div >
        {/* Menú desplegable (select) con opciones de "listaOrdenada" */}
        <select className="textoImput" value={lineaElegida} onChange={handleSelectChange}>

          <option value="">Seleccione una línea de colectivo</option>

          {listaOrdenada.map((linea, index) => (

            <option key={index} value={linea}>
              {linea}
            </option>

          ))}
        </select>

        <div>
          <ContenedorMapa
            jsonFiltradoPorLinea={jsonFiltradoPorLinea} />
        </div>
      </div>
    </div>
  )
}

