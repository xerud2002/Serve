import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const conversions = [
  ['Cheryl 1.JPG', 'Cheryl.webp'],
  ['Emily.jpg', 'Emily.webp'],
  ['Kerry.JPG', 'Kerry.webp'],
  ['Louise.jpg', 'Louise.webp'],
  ['Mario.jpg', 'Mario.webp'],
  ['Sam 1.JPG', 'Sam.webp'],
  ['Sean.jpg', 'Sean.webp']
];

const teamDir = path.join(__dirname, '..', 'public', 'images', 'team');

(async () => {
  console.log('Converting team photos to WebP...\n');
  
  for (const [input, output] of conversions) {
    const inputPath = path.join(teamDir, input);
    const outputPath = path.join(teamDir, output);
    
    try {
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);
      console.log(`✓ Converted ${input} → ${output}`);
    } catch (error) {
      console.error(`✗ Failed to convert ${input}:`, error.message);
    }
  }
  
  console.log('\n✅ All team photos converted successfully!');
})();
