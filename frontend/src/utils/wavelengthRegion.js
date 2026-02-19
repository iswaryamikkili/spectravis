export function wavelengthRegion(wl) {
  if (wl < 380) return { label: 'Ultraviolet', color: '#a855f7' }
  if (wl < 450) return { label: 'Violet', color: '#8b5cf6' }
  if (wl < 485) return { label: 'Blue', color: '#3b82f6' }
  if (wl < 500) return { label: 'Cyan', color: '#06b6d4' }
  if (wl < 565) return { label: 'Green', color: '#22c55e' }
  if (wl < 590) return { label: 'Yellow', color: '#eab308' }
  if (wl < 625) return { label: 'Orange', color: '#f97316' }
  if (wl <= 700) return { label: 'Red', color: '#ef4444' }
  return { label: 'Infrared', color: '#991b1b' }
}
