import './App.css';
import { useState } from 'react';

const dictionary = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    const foundWord = dictionary.find(
      (item) => item.word.toLowerCase() === searchTerm.toLowerCase()
    );
    if (foundWord) {
      setResult(foundWord.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div className="app">
      <h1>Dictionary App</h1>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a word"
          className="searchbar"
        />
        <button onClick={searchHandler}>Search</button>
      </div>
      <h4>Definition:</h4>
      <p>{result}</p>
    </div>
  );
}

export default App;