import React from 'react'
import "../Estilos/ContenedorPrincipalTransporte.css"
import { ContenedorMapa } from './ContenedorMapa'
import { useEffect, useState } from "react"




export const ContenedorPrincipalTransporte = ({ jsonTransporte }) => {

  //  Filtrar en json por el numero de linea de colectivo . 1ro crear un array con todos los valores del campo "route_short_name"
  const routeShortNames = jsonTransporte.map(item => item.route_short_name);

  // funcion Set para eliminar duplicados y que exista lineas de colectivo unicas
  const unicoRouteShortNames = [...new Set(routeShortNames)];

  // funcion que ordena el arreglo primero por numero y luego por letras para que aparezca ordenado en el menu desplegable
  function compararElementos(a, b) {
    const numA = parseInt(a.match(/\d+/)[0]);
    const numB = parseInt(b.match(/\d+/)[0]);

    if (numA === numB) {
      const letraA = a.match(/[A-Z]+/)[0];
      const letraB = b.match(/[A-Z]+/)[0];
      return letraA.localeCompare(letraB);
    } else {
      return numA - numB;
    }
  }

  //contiene un array con las lineas de colectivos sin repetir y ordenadas . funcionamiento verificado desde probador.js
  const listaOrdenada = unicoRouteShortNames.sort(compararElementos);

  //se crea constante con usestate para guardar el valor de la linea elegida
  const [lineaElegida, setLineaElegida] = useState('');
  // se crea una constante con usestate para guardar el nuevo json filtrado por linea
  const [jsonFiltradoPorLinea, setJsonFiltradoPorLinea] = useState([]);

  // Manejar el cambio en el menú desplegable
  const handleSelectChange = (event) => {
    const selectedLinea = event.target.value;
    setLineaElegida(selectedLinea);
  };


  useEffect(() => {
    // Filtrar el JSON original cuando cambia "lineaElegida"
    const jsonFiltrado = jsonTransporte.filter((item) => item.route_short_name === lineaElegida);
    setJsonFiltradoPorLinea(jsonFiltrado);
  }, [lineaElegida]); // ver




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

