
import './App.css';
import Ejemplo4 from './hooks/Ejemplo-4';
// import MiComponenteConContexto from './hooks/Ejemplo-3';
// import ComponenteA from './componets/componente-a';
// import Ejemplo1 from './hooks/Ejemplo-1';
// import Ejemplo2 from './hooks/Ejemplo-2';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <ComponenteA contacto={contactoPrueba} /> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        <Ejemplo4 nombre= 'Juanma'></Ejemplo4>
        <h3>
          {/* .Todo lo que adentro de estp es tratado como
              props.children para cualquier componente
           */}
          Contenido del Children
        </h3>
      </header>
      
    </div>
  );
}

export default App;
