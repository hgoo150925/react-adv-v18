import { useState } from 'react';

import { List } from './List';

import data from './data';

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} people today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])} className="btn">
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
