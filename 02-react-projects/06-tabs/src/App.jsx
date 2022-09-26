import { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const data = response.json();
    setJobs(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section>
        <h1>loading...</h1>
      </section>
    );
  }

  return <h2>tabs project setup</h2>;
}

export default App;
