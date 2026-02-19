import { useState } from 'react'
import SpectralPlot from './components/SpectralPlot'
import { ELEMENTS } from './data/elements'
import './App.css'

function App() {
  const [selected, setSelected] = useState(ELEMENTS[0])

  return (
    <div className="app">
      <h1>⬡ SPECTRAVIS</h1>
      <div className="buttons">
        {ELEMENTS.map(el => (
          <button
            key={el.symbol}
            onClick={() => setSelected(el)}
            className={selected.symbol === el.symbol ? 'active' : ''}
          >
            {el.name}
          </button>
        ))}
      </div>
      <SpectralPlot element={selected} />
    </div>
  )
}

export default App
