import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

export const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      const response = await fetch(url);
      const users = await response.json();
      setUsers(users);
    } catch (error) {
      throw new Error(`Error! status: ${response.status}`);
    }
  }

  useEffect(() => {
    getUsers();
  }, [users]);

  return (
    <>
      <h1>github users</h1>
      <ul className="users">
        {users.map(({ id, login, avatar_url, html_url }) => {
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
