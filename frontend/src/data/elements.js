export const ELEMENTS = [
  {
    symbol: 'H',
    name: 'Hydrogen',
    spectralLines: [
      { wavelength: 656.3, intensity: 1.0 },
      { wavelength: 486.1, intensity: 0.56 },
      { wavelength: 434.0, intensity: 0.30 },
      { wavelength: 410.2, intensity: 0.18 },
    ],
    description: 'When hydrogen electrons fall from higher to lower energy levels, they release light at these exact wavelengths. The bright red line at 656.3nm is called H-alpha — the most common light in the universe.',
  },
  {
    symbol: 'Na',
    name: 'Sodium',
    spectralLines: [
      { wavelength: 589.0, intensity: 1.0 },
      { wavelength: 589.6, intensity: 0.97 },
      { wavelength: 568.8, intensity: 0.08 },
    ],
description: 'Sodium has two very close yellow lines at 589.0nm and 589.6nm called the D lines. These are so bright they dominate its spectrum — explaining why sodium street lamps glow yellow.',
  },
  {
    symbol: 'Ne',
    name: 'Neon',
    spectralLines: [
      { wavelength: 640.2, intensity: 1.0 },
      { wavelength: 614.3, intensity: 0.75 },
      { wavelength: 585.2, intensity: 0.6 },
      { wavelength: 650.6, intensity: 0.55 },
    ],
description: 'Neon has many closely packed lines in the red-orange region. When electricity excites neon gas, electrons constantly jump between levels producing that signature glow you see in neon signs.',
  },
  {
    symbol: 'He',
    name: 'Helium',
    spectralLines: [
      { wavelength: 587.6, intensity: 1.0 },
      { wavelength: 667.8, intensity: 0.65 },
      { wavelength: 501.6, intensity: 0.5 },
      { wavelength: 447.1, intensity: 0.45 },
    ],
    description: 'Helium was discovered in the Sun before it was found on Earth — purely through spectroscopy. Scientists saw unknown lines in sunlight and realized they belonged to a new element.',
  },
  {
    symbol: 'Li',
    name: 'Lithium',
    spectralLines: [
      { wavelength: 670.8, intensity: 1.0 },
      { wavelength: 610.4, intensity: 0.12 },
      { wavelength: 460.3, intensity: 0.08 },
    ],
   description: 'Lithium electrons produce a strong red line at 670.8nm when excited. This is why lithium compounds burn bright red — the same principle used in red fireworks.',
  },
  {
    symbol: 'Ar',
    name: 'Argon',
    spectralLines: [
      { wavelength: 763.5, intensity: 1.0 },
      { wavelength: 696.5, intensity: 0.6 },
      { wavelength: 750.4, intensity: 0.75 },
      { wavelength: 706.7, intensity: 0.55 },
    ],
description: 'Argon emits mostly in the near-infrared region just beyond visible light. Its stable, predictable lines make it a standard reference source for calibrating scientific instruments.',
  },
  {
    symbol: 'Hg',
    name: 'Mercury',
    spectralLines: [
      { wavelength: 435.8, intensity: 1.0 },
      { wavelength: 546.1, intensity: 0.85 },
      { wavelength: 404.7, intensity: 0.6 },
      { wavelength: 577.0, intensity: 0.4 },
    ],
description: 'Mercury produces strong lines across violet, blue and green. Fluorescent lights work by using mercury vapor to produce UV light, which then excites a phosphor coating to produce white light.',
  }
]
