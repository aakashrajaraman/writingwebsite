import React, { useEffect, useState } from 'react';

const TestPage = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    // Fetch data from the server or API endpoint
    fetch('http://localhost:5000/data')
    .then((response) => {
      console.log('Response received from fetch:', response);
      return response.json();
    })
    .then((data) => {
      console.log('Data received:', data);
      setDocuments(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  }, []);

  return (
    <div>
      <h1>Main Page</h1>
      <h2>Document List</h2>
      <ul>
        {documents.map((document) => (
          <li key={document.id}>
            <h3>{document.title}</h3>
            <p>{document.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestPage;