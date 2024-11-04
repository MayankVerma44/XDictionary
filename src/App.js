import React, { useState } from 'react';
import './App.css';

function App() {
  const initialDictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setResult("Please enter a word to search.");
      return;
    }
    const wordEntry = initialDictionary.find(entry =>
      entry.word.toLowerCase() === searchTerm.toLowerCase()
    );
    setResult(wordEntry ? wordEntry.meaning : "Word not found in the dictionary.");
  };

  return (
    <div className="App">
      <h1>XDictionary</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter a word..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          data-testid="search-input"
        />
        <button onClick={handleSearch} data-testid="search-button">Search</button>
      </div>
      {result && <p className="result" data-testid="search-result">{result}</p>}
    </div>
  );
}

export default App;
