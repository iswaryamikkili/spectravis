import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { wavelengthToRGB } from '../utils/wavelengthToRGB'
function SpectralPlot({element}) {
  const svgRef = useRef(null)

  useEffect(() => {
    const {spectralLines: lines}=element
   

    const width = 800
    const height = 360

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()
    svg.attr('width', width).attr('height', height)

    svg.append('rect')
      .attr('width', width)
      .attr('height', height)
      .attr('fill', '#111827')
      .attr('rx', 8)

    const x = d3.scaleLinear()
      .domain([380, 780])
      .range([60, 740])
     // Spectrum color bar
const barHeight = 20
const barY = 30

for (let wl = 380; wl <= 780; wl += 2) {
  svg.append('rect')
    .attr('x', x(wl))
    .attr('y', barY)
    .attr('width', x(wl + 2) - x(wl))
    .attr('height', barHeight)
    .attr('fill', wavelengthToRGB(wl))
}
svg.append('text')
  .attr('x', x(380) - 5)
  .attr('y', barY + 14)
  .attr('text-anchor', 'end')
  .attr('fill', '#a855f7')
  .attr('font-size', '10px')
  .text('← UV')

svg.append('text')
  .attr('x', x(780) + 5)
  .attr('y', barY + 14)
  .attr('text-anchor', 'start')
  .attr('fill', '#991b1b')
  .attr('font-size', '10px')
  .text('IR →')
    // X axis
    const xAxis = d3.axisBottom(x).ticks(10)
    svg.append('g')
  .attr('transform', `translate(0, ${height - 40})`)
  .call(xAxis)
   .call(ax => ax.select('.domain').attr('stroke', '#374151'))
  .call(ax => ax.selectAll('text').attr('fill', '#9ca3af').attr('font-size', '11px'))
  .call(ax => ax.selectAll('line').attr('stroke', '#374151'))
   svg.append('text')
  .attr('x', 400)
  .attr('y', height-10)
  .attr('text-anchor', 'middle')
  .attr('fill', '#6b7280')
  .attr('font-size', '12px')
  .text('Wavelength (nm)')     
  lines.forEach(line => {
       svg.append('line')
        .attr('x1', x(line.wavelength))
        .attr('x2', x(line.wavelength))
        .attr('y1', 60)
        .attr('y2', height - 40)
        .attr('stroke', wavelengthToRGB(line.wavelength))
        .attr('stroke-width', 8)
        .attr('opacity',0.3)
       // sharp line
  svg.append('line')
    .attr('x1', x(line.wavelength))
    .attr('x2', x(line.wavelength))
    .attr('y1', 20)
    .attr('y2', height - 40)
    .attr('stroke', wavelengthToRGB(line.wavelength))
    .attr('stroke-width', 1.5)
    })
  }, [element])

  return <svg ref={svgRef} />
}

export default SpectralPlot
