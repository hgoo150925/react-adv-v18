import { useState } from 'react';

import { Categories } from './Categories';
import { Menu } from './Menu';

import { menu } from './data';

const allCategories = ['all', ...new Set(menu.map(item => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterMenu = category => {
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }
    const newMenuItems = menu.filter(item => item.category === category);
    return setMenuItems(newMenuItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterMenu={filterMenu} />
        <Menu menu={menuItems} />
      </section>
    </main>
  );
}

export default App;
