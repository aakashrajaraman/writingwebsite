

import { useEffect, useState, React } from "react";
//import axios from "axios";
const Retr = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const jsonData = await response.json();
        setData(jsonData);
      };
      fetchData();
    }, []);
  
    return (
      <div>
        {data.map(item => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.email}</p>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    );
  };
  


const Test = () => {
    
    return (
        <div>
            <Retr/>
        <h1>This is test</h1>
        </div>
    );
    }

export default Test;