import React from 'react';
import './App.css';
import Editor from './Editor';

function App() {
  return (
    <div className="App">
      <h3 className="header">
        Hello world, I am a Markdown editor
      </h3>
      <Editor />
    </div>
  );
}

export default App;
