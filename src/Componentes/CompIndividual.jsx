import React from 'react'
import "./CompIndividual.css"

export const CompIndividual = ({ categoria, valor, unidad }) => {
    return (
        <div className="claseIndividual">
            <div className='nombreParametro'>
                {categoria}
            </div>

            <div className='nombreValor'>
                {valor}<span>  </span>
                <span className='nombreUnidad'>{unidad}</span>
            </div>
        </div>

    )
}
