import React from 'react'
import "./CompIndividual.css"

export const CompIndividualDoble = ({ categoria, valor, valor2, unidad1, unidad2 }) => {
    return (
        <div className="claseIndividual">

            <div className='nombreParametro'>
                {categoria}
            </div>
            <div className='nombreValor'>
                {valor} 
                <span className='nombreUnidad'>{unidad1}</span><span> / </span>
                {valor2}
                <span className='nombreUnidad'>{unidad2} </span>
            </div>
        </div>

    )
}
