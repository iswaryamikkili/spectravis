import { useState } from 'react'
import SpectralPlot from './components/SpectralPlot'
import { ELEMENTS } from './data/elements'

function App() {
  const [selected, setSelected] = useState(ELEMENTS[0])

  return (
    <div>
      <h1>SpectraVis</h1>
      <div>
        {ELEMENTS.map(el => (
          <button
            key={el.symbol}
            onClick={() => setSelected(el)}
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
