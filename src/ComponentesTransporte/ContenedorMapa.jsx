import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'   // useMap, no usado verrrr
import L from 'leaflet'; // Importa la biblioteca Leaflet
import 'leaflet/dist/leaflet.css'; // Importa el CSS de Leaflet
import Iconotransporte from "../recursos/iconoColectivo.png";
import "../Estilos/ContenedorMapa.css"



export const ContenedorMapa = ({ jsonFiltradoPorLinea }) => {

  // toma el jsonFiltradoPorLinea y crea un nuevo json al cual le agrega un campo "estado" y lo completa segun una condicion con "en movimiento" o "detenido"
  const jsonFiltradoPorLineaCompleto = jsonFiltradoPorLinea.map(item => {
    // Comprueba si la velocidad es mayor a cero
    if (item.speed > 0) {
      item.estado = "en movimiento";
    } else {
      item.estado = "detenido";
    }
    return item;
  });


  return (
    <div>

      <MapContainer center={[-34.60376, -58.38162]} zoom={10} scrollWheelZoom={true}>

        <TileLayer
          attribution='<a>Curso Famat</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {jsonFiltradoPorLineaCompleto.map((colectivo, index) => {
          return (

            <Marker
              key={index} // agregado corrige error
              position={[colectivo["latitude"], colectivo["longitude"]]}

              icon={new L.Icon({
                iconUrl: Iconotransporte, // Ruta de la imagen de icono personalizado
                iconSize: [55, 55], // Tamaño del icono (ancho x alto)
              })} >

              <Popup >
                <div className='ventanaEmergente'>
                  Linea: {colectivo["route_short_name"]} <br />
                  Destino: {colectivo["trip_headsign"]} <br />
                  {/*Velocidad: {(colectivo["speed"]).toFixed(2)} km/h <br />*/}
                  Estado: {colectivo["estado"]}
                </div>
              </Popup>

            </Marker>)
        })}

      </MapContainer>

    </div>
  )
}
