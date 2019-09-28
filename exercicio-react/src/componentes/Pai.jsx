import React from 'react'
import Filho from './Filho'

export default props => {
    const notificarSaida = lugar => alert(`Liberado para sair ${lugar}`)

    return <div>
        <Filho notificarSaida={notificarSaida} />
    </div>
}