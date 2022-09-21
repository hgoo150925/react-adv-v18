import { useState } from 'react';
import { data } from '../../../data';

export const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  function removeItem(id) {
    let newPeople = people.filter(person => person.id !== id);
    setPeople(newPeople);
  }

  return (
    <>
      {people.map(({ id, name }) => {
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      <button onClick={() => setPeople([])} className="btn" type="button">
        clear
      </button>
    </>
  );
};
