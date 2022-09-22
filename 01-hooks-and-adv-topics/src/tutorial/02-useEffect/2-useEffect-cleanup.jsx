import { useState, useEffect } from 'react';

// cleanup function
// second argument

export const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);

    return () => {
      window.removeEventListener('resize', checkSize);
      console.log('cleanup');
    };
  }, [size]);

  return (
    <>
      <h1>window</h1>
      <h2>{size} Px</h2>
    </>
  );
};
