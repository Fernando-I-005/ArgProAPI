import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'   // useMap, no usado verrrr
import L from 'leaflet'; // Importa la biblioteca Leaflet
import 'leaflet/dist/leaflet.css'; // Importa el CSS de Leaflet
import Iconotransporte from "../recursos/iconoColectivo.png";
import "../Estilos/ContenedorMapa.css"



export const ContenedorMapa = ({ jsonFiltradoPorLinea }) => {


    return (
        <div>

            <MapContainer center={[-34.60376, -58.38162]} zoom={10} scrollWheelZoom={true}>

                <TileLayer
                    attribution='<a>Aguante River</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {jsonFiltradoPorLinea.map((colectivo, index) => {
                    return (

                        <Marker position={[colectivo["latitude"], colectivo["longitude"]]}

                            icon={new L.Icon({
                                iconUrl: Iconotransporte, // Ruta de la imagen de tu icono personalizado
                                iconSize: [45, 45], // Tamaño del icono (ancho x alto)
                            })} >

                            <Popup >
                                <div className='ventanaEmergente'>
                                    Linea: {colectivo["route_short_name"]} <br />
                                    Destino: {colectivo["trip_headsign"]} <br />
                                    Velocidad: {(colectivo["speed"]).toFixed(2)} km/h <br />
                                    Estado:
                                </div>
                            </Popup>

                        </Marker>)
                })}

            </MapContainer>

        </div>
    )
}
