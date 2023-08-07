/**
 * Ejemplos de uso de los Hooks:
 * ~ useState()
 * ~ useRef()
 * ~ useEffect()
 */

import React, { useEffect, useRef, useState} from "react";

const Ejemplo2 = () => {

    // Vamos a crear dos contadores distintos
    // Cada uno en un estado diferente

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Vamos a crear una referencia con useRef() para asociar una variable
    // con un elemento del DOM del componente ( vista HTML)

    const miRef = useRef();

    function incrementoContador1() {
        setContador1(contador1 + 1)
    }

    function incrementoContador2(){
        setContador2(contador2 + 1)
    }

    /**
     * Trabajando con useEffect()
     */

    /**
     * ? Caso 1: Ejecutar SIEMPRE un snippet de codigo
     * Cada vez que se haya hecho un cambio en el estado del componente
     * se ejecuta lo que este dentro de useEffect()
     */

    // useEffect(() => {
    //     console.log("Cambio en el Componente")
    //     console.log("Mostrando referencia al elemento del DOM: ")
    //     console.log(miRef)
    // });

    /**
     * ? Caso 2: Ejecutar SOLO cuando cambie el CONTADOR 1
     * Cada vez que haya un cambio, se ejecuta lo que diga el useEffect
     * En caso de que cambie CONTADOR 2, no habra ejecucion
     */

    // useEffect(() => {
    //     console.log("Cambio en el Contador 1")
    //     console.log("Mostrando referencia al elemento del DOM: ")
    //     console.log(miRef)
    // }, [contador1])

    /**
     * ? Caso 3: Ejecutar SOLO cuando cambie el CONTADOR 1 o CONTADOR 2
     * Cada vez que haya un cambio en CONTADOR 1, se ejecuta lo que diga el useEffect
     * Cada vez que haya un cambio en CONTADOR 2, se ejecuta lo que diga el useEffect
     */

    useEffect(() => {
        console.log("Cambio en el Contador 1 / Contador 2")
        console.log("Mostrando referencia al elemento del DOM: ")
        console.log(miRef)
    }, [contador1, contador2])

    return (
        <div>
            <h1> *** Ejemplo de uso de useEffect(), useRef() y useState() *** </h1>
            <h2>CONTADOR 1 : { contador1 }</h2>
            <h2>CONTADOR 2 : { contador2 }</h2>
            {/* Elemento Referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            <button onClick={ incrementoContador1 }>Contador 1</button>
            <button onClick={ incrementoContador2 }>Contador 2</button>
        </div>
    );
}

export default Ejemplo2;
