// Hero Effects - Seasonal and Occasion-Based Skins
// Import different effect components and export them for easy switching

import FallingStars from './FallingStars'
import FallingSnowflakes from './FallingSnowflakes'
import FloatingHearts from './FloatingHearts'
import AutumnLeaves from './AutumnLeaves'
import SpringFlowers from './SpringFlowers'
import Confetti from './Confetti'
import SummerBubbles from './SummerBubbles'

export { 
  FallingStars,           // Current - 6-pointed stars
  FallingSnowflakes,      // Winter/Christmas - Classic snowflakes
  FloatingHearts,         // Valentine's Day - Pink hearts
  AutumnLeaves,           // Fall/Autumn - Orange/brown leaves
  SpringFlowers,          // Spring - Colorful flower petals
  Confetti,               // Celebrations/Awards - Colorful confetti
  SummerBubbles,          // Summer - Floating bubbles
}

// Usage in Hero.tsx:
// import { FallingSnowflakes } from './HeroEffects'
// Then use: <FallingSnowflakes />
//
// Or remove the component entirely for no effect
