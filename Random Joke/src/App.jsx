import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [joke, setJoke] = useState("");
  const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

  const getJoke = () => {
    fetch(url)
      .then(data => data.json())
      .then(item => {
        setJoke(item.joke);
      })
      .catch(error => console.error('Error fetching joke:', error));
  };

  useEffect(() => {
    getJoke();  
  }, []);

  return (
    <div className="wrapper">
      <span>&#128514;</span>
      <p id="joke" className={`fade ${joke ? 'visible' : ''}`} style={{ transition: 'opacity 1.5s' }}>
        {joke}
      </p>
      <button onClick={getJoke}>Get New Joke</button>
    </div>
  );
};

export default App;
