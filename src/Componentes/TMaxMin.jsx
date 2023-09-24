import React from 'react'
import "./TMaxMin.css"

export const TMaxMin = ({tempMaxMin, textoMaxMin}) => {
    return (
        <div className='contenedorTmaxTmin'>
            <span className='textoMaxMinConstante'> {textoMaxMin}</span>
            <span className='textoMaxMinVariable' > {tempMaxMin} ºC</span>
        </div>
    )
}
