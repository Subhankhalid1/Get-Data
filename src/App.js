import React, { useEffect, useState } from 'react';
import './App.css'
function App() {
  const [repos, setRepos] = useState([{}]);
  useEffect(() => {

    async function getRespos() {
      const response = await fetch("https://api.github.com/users/Subhankhalid1/repos");
      const data = await response.json();
      console.log("Data", data)
      setRepos(data);
    }
    getRespos();
  
  }, [])
  return (
    <div>
      <ul>
        
        {repos.map((obj, ind) => {
          return (<li key={ind}>{obj.name}</li>)
        })}
      </ul>
    </div>
  );
}
export default App;