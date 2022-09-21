import { useState } from 'react';

export const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);

  const decrease = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };

  function complexIncrease() {
    setTimeout(() => {
      setCounter(counter + 1);
    }, 3000);
  }
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>regular counter</h2>
        <h1>{counter}</h1>
        <button className="btn" onClick={() => setCounter(counter + 1)}>
          increase
        </button>
        <button className="btn" onClick={decrease}>
          decrease
        </button>
        <button className="btn" onClick={() => setCounter(0)}>
          reset
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>more complex counter</h2>
        <h1>{counter}</h1>
        <button className="btn" onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  );
};
