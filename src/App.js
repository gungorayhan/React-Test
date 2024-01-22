import React from 'react'
import "./App.css"

const App = () => {
  return (
    <div className='app'>
      <h1>React Test</h1>
      <button aria-label='disabled' data-testid="btnDisabled" disabled>Disabled</button>
      <button aria-label='enabled' data-testid="btnEnabled">Enabled</button>
      <h3 className="green">Green Color</h3>
      <p>coding with ayhangungor</p>
      
    </div>
  )
}

export default App
