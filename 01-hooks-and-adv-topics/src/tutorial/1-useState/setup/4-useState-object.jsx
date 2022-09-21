import { useState } from 'react';

export const UseStateObject = () => {
  const [people, setPeople] = useState({
    username: 'Ryan Gosling',
    age: 24,
    message: "I'm Ryan Gosling, what's up?",
  });
  const { username, message, age } = people;

  const changeMessage = () => {
    setPeople({
      ...people,
      username: ' Brene Brown',
      message: '“Háblate a ti mismo como harías con alguien a quien amas.”',
    });
  };

  return (
    <>
      <h3>{username}</h3>
      <h4>{message}</h4>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};
