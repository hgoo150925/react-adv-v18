import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/goncy';

export const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('QuincyLarson');

  const getUsers = async () => {
    fetch(url)
      .then(resp => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then(data => {
        setUser(data);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }
  return (
    <div className="users">
      <ul>
        <li>
          <img src={user.avatar_url} alt={user.login} />
          <div>
            <h4>{user.login}</h4>
            <a href={user.html_url}>profile</a>
          </div>
        </li>
      </ul>
    </div>
  );
};
