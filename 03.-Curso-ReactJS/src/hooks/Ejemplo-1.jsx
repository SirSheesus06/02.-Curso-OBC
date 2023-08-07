/* 
    Uso de los hooks proporcionados por React
*/

import React, { useState } from "react";

const Ejemplo1 = () => {

    // Valor inicial para un contador
    const valorInicial = 0;

    // Valor inicial para un objeto
    const personaInicial = {
        nombre: 'Juan',
        email: 'juanmcr@gmail.com'
    }

    /**
     * Queremos que el VALORINICIAL y PERSONAINICIAL sean parte
     * del estado del componente asi poder gestionar su cambio
     * y que este se vea reflejado en la vista del componente
     * 
     * Ejemplo de uso
     * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
     */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Funcion para actualizar el estado
     */

    function incrementarContador(){
        // funcionParaCambiar( nombreVariable )
        setContador(contador + 1)
    }

    /**
     * Funcion para actualizar el estado de Persona
     * en el componente
     */

    function actualizarPersona() {
        setPersona(
            {
                nombre: 'Manuel',
                email: 'toot.sheesus.ram@gmail.com'
            }
        )
    }

    return (
        <div>
            <h1>*** Ejemplo de Hook useState() ***</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA</h2>
            <h3>NOMBRE: { persona.nombre }</h3>
            <h3>EMAIL: { persona.email }</h3>

            {/* Bloque de botones para actualizar los estados */}

            <button onClick={ incrementarContador }>Incremento Contador</button>
            <button onClick={ actualizarPersona }>Cambiar Persona</button>
        </div>
    );
}

export default Ejemplo1;

