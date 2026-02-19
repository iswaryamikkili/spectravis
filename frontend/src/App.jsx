import { useState } from 'react'
import SpectralPlot from './components/SpectralPlot'
import { ELEMENTS } from './data/elements'
import './App.css'
import { wavelengthToRGB } from './utils/wavelengthToRGB'
import { wavelengthRegion } from './utils/wavelengthRegion'
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
         <p className="description">{selected.description}</p>
        <table>
          <thead>
            <tr>
              <th>Color</th>
              <th>Wavelength (nm)</th>
              <th>Relative Intensity</th>
              <th>Region</th>
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
          
        }} />
     </td>
     <td>   
      {line.wavelength}
      </td>
      <td>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: `${line.intensity * 150}px`,
              height: '6px',
              borderRadius: '3px',
              background: wavelengthToRGB(line.wavelength)
            }} />
            <span>{(line.intensity * 100).toFixed(0)}%</span>
          </div>
        </td>
      <td>
  <span style={{
    color: wavelengthRegion(line.wavelength).color,
    fontSize: '12px'
  }}>
    {wavelengthRegion(line.wavelength).label}
  </span>
</td>
    </tr>
  ))}
</tbody>
        </table>
      </div>
    </>
  );
}

export default App;

