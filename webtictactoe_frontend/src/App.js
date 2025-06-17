import React from 'react';
import './App.css';
import WebTicTacToeContainer from "./WebTicTacToeContainer";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
            <button className="btn">WebTicTacToe</button>
          </div>
        </div>
      </nav>
      <main>
        {/* Main Game Container replaces the template hero */}
        <WebTicTacToeContainer />
      </main>
    </div>
  );
}

export default App;