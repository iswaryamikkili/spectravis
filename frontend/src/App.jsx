import { useState } from 'react'
import SpectralPlot from './components/SpectralPlot'
import { ELEMENTS } from './data/elements'
import './App.css'
import { wavelengthToRGB } from './utils/wavelengthToRGB'
function App() {
  const [selected, setSelected] = useState(ELEMENTS[0]);

  return (
    <>
      <div className="app">
        <h1>SPECTRAVIS</h1>

        <div className="buttons">
          {ELEMENTS.map((el) => (
            <button
              key={el.symbol}
              onClick={() => setSelected(el)}
              className={selected.symbol === el.symbol ? "active" : ""}
            >
              {el.name}
            </button>
          ))}
        </div>

        <SpectralPlot element={selected} />
      </div>

      <div className="info">
        <h2>
          {selected.name} ({selected.symbol})
        </h2>

        <table>
          <thead>
            <tr>
              <th>Wavelength (nm)</th>
              <th>Intensity</th>
            </tr>
          </thead>
          <tbody>
            {selected.spectralLines.map((line) => (
              <tr key={line.wavelength}>
              <td>

        <span style={{

          display: 'inline-block',

          width: '10px',

          height: '10px',

          borderRadius: '50%',

          background: wavelengthToRGB(line.wavelength),

          marginRight: '8px'

        }} />

        {line.wavelength}

      </td>

      <td>{(line.intensity * 100).toFixed(0)}%</td>

    </tr>

  ))}

</tbody>
        </table>
      </div>
    </>
  );
}

export default App;

