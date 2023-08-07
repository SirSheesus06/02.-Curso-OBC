import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    // Usando hook useState
    // Sintaxis de useState
    // cons [variable, metodo para actualizarla] = valor inicial
    const [age, setAge] = useState(29)

    const birthday = () => {
        // Metodo para actualizar el State
        setAge(age + 1)
    }

    return (
        <div>
            <h1>
                Hola { props.name }! desde una funcion!
            </h1>
            <h2>
                Tu edad es { age} años
            </h2>
            <div>
                <button onClick={ birthday }>
                    Feliz Cumpleaños 
                </button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
