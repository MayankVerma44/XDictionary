import React, { useState } from 'react';
import './App.css';

function App() {
  //  dictionary data
  const initialDictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  // State to store the search term and search result
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  // Function to handle search operations
  const handleSearch = () => {
    const wordEntry = initialDictionary.find(entry =>
      entry.word.toLowerCase() === searchTerm.toLowerCase()
    );
    if (wordEntry) {
      setResult(wordEntry.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div className="App">
      <h1>XDictionary</h1>
      
      {/* Search Input and Button */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter a word..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Display the search result */}
      {result && <p className="result">{result}</p>}
    </div>
  );
}

export default App;
