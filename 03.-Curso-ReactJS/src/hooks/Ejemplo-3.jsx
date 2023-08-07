/**
 * Ejemplo de HOOKS:
 *  ~ useState()
 *  ~ useContext()
 */

import React, { useContext, useState } from 'react';

/**
 * 
 * @returns Componete 1:
 * Dispone de un contexto que recibe de su elemento padre
 */

// Inicializa vacio y se llena con los datos del padre
const miContexto = React.createContext(null)

const Componente1 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h1>
                El Token es: { state.token }
            </h1>

            {/* Pintamos el Componente 2 */}

            <Componente2></Componente2>

        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto)
    return (
        <div>
            <h2>
                La sesion es: { state.sesion }
            </h2>
        </div>
    );
}

export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    // Creamos el estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion() {
        setSessionData(
            {
                token: 'QWASD121155345',
                sesion: sessionData.sesion + 1
            }
        )
    }

    return (

        <miContexto.Provider value={ sessionData }>
            {/* .Todo lo que esta aqui puede leer informacion de sessionData  */}
            {/* Ademas, si se actualiza, los componentes de aqui tambien lo actualizan */}
            <h1>Ejemplo de useState() y useContext()</h1>
            <Componente1></Componente1>
            <button onClick={ actualizarSesion }>Actualizar Sesion</button>
        </miContexto.Provider>

        )
}

