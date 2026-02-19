import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { wavelengthToRGB } from '../utils/wavelengthToRGB'
function SpectralPlot({element}) {
  const svgRef = useRef(null)

  useEffect(() => {
    const {spectralLines: lines}=element
   

    const width = 800
    const height = 300

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
      .range([0, width])

    lines.forEach(line => {
      svg.append('line')
        .attr('x1', x(line.wavelength))
        .attr('x2', x(line.wavelength))
        .attr('y1', 20)
        .attr('y2', height - 20)
        .attr('stroke', wavelengthToRGB(line.wavelength))
        .attr('stroke-width', 2)
    })
  }, [element])

  return <svg ref={svgRef} />
}

export default SpectralPlot
