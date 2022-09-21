export const ErrorExample = () => {
  let title = 'random title';

  const handleClick = () => {
    // No estamos renderizando el componente y title no se actualiza en pantalla
    title = 'Ryan Gosling';
    console.log(title);
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
