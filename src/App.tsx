import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Overlay from "./Overlay"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          See source <a href="https://github.com/Gosha/react-reveal-circle">here</a>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Overlay />
    </div>
  )
}

export default App
