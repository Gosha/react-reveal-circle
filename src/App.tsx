import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Overlay from "./Overlay"

function App() {
  const [key, setKey] = React.useState(1)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={() => setKey((key) => key + 1)}>Again</button>
        </p>
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
      <Overlay key={key} />
    </div>
  )
}

export default App
