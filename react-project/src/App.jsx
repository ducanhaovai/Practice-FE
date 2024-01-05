import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const reactDes= ['Duc Anh', 'Anh Thu'];

function genRamdon(max){
  return Math.floor(Math.random() * (max +1));
}

function Header() {
  return (<div>
    <a href="https://vitejs.dev" target="_blank">
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>
    <a href="https://react.dev" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
  </div>);
}


function App() {
  const des= reactDes[genRamdon(1)];
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>

      <h1>{des} + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
