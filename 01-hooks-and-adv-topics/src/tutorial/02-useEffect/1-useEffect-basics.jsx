import { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

export const UseEffectBasics = () => {
  const [counter, setCounter] = useState(0);

  // https://midu.dev/react-hooks-use-effect-funcionalidad-en-el-ciclo-vida-componentes/
  // useEffect ejecuta código cada vez que nuestro componente se renderiza.
  // useEffect es un un hook que recibe como parámetro una función que se ejecutará cada vez que nuestro componente se renderice,
  // ya sea por un cambio de estado, por recibir props nuevas o, y esto es importante, porque es la primera vez que se monta.
  useEffect(() => {
    console.log('call useEffect');
    if (counter >= 5) {
      alert('render conditional');
    }
    // [counter] cuando ejecutamos algo en el valor de la dependencia, entonces se ejecuta useEffect
    // Si no tiene dependencias el useEffect se ejecutara siempre
  }, [counter]);

  useEffect(() => {
    console.log('initial render');
  }, []);
  console.log('render component');

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)} className="btn">
        click me
      </button>
    </>
  );
};
