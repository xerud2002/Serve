// Hero Effects - Seasonal and Occasion-Based Skins
// Import different effect components and export them for easy switching

import FallingStars from './FallingStars'
import FallingSnowflakes from './FallingSnowflakes'

export { 
  FallingStars,           // Current - 6-pointed stars (active)
  FallingSnowflakes,      // Winter/Christmas - Classic snowflakes
}

// Usage in Hero.tsx:
// import { FallingSnowflakes } from './HeroEffects'
// Then use: <FallingSnowflakes />
//
// Or remove the component entirely for no effect
