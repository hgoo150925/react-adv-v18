import { useState } from 'react';

export const UseStateBasics = () => {
  // useState nos permite cambiar el valor del estado
  // useState nos devuelve un array que tendrá el valor del estado y un método para actualizar el estado

  // https://midu.dev/react-hooks-introduccion-saca-todo-el-potencial-sin-class/
  // useState devuelve un valor con estado y una función para actualizarlo
  // useState recibe un parámetro: el valor inicial del estado
  // y devuelve un array de dos posiciones:
  // la primera (valor), tiene el valor del estado
  // la segunda (setValor), el método para actualizar el estado
  const [title, setTitle] = useState('random title');

  const handleClick = () => {
    if (title === 'random title') {
      setTitle('Ryan Gosling');
    } else {
      setTitle('random title');
    }
  };

  return (
    <>
      <h2>{title}</h2>
      <button onClick={handleClick} className="btn" type="button">
        change title
      </button>
    </>
  );
};
