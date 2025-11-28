import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function convertToWebP() {
  const inputFiles = [
    'public/images/awards/regional-winner1.png',
    'public/images/awards/regional-winner2.png'
  ];

  for (const inputFile of inputFiles) {
    const outputFile = inputFile.replace('.png', '.webp');
    
    try {
      await sharp(inputFile)
        .webp({ 
          quality: 100,
          lossless: false,
          alphaQuality: 100
        })
        .toFile(outputFile);
      
      console.log(`✅ Converted: ${inputFile} → ${outputFile}`);
      
      const inputStats = fs.statSync(inputFile);
      const outputStats = fs.statSync(outputFile);
      const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
      
      console.log(`   Original: ${(inputStats.size / 1024).toFixed(2)} KB`);
      console.log(`   WebP: ${(outputStats.size / 1024).toFixed(2)} KB`);
      console.log(`   Size reduction: ${reduction}%\n`);
    } catch (error) {
      console.error(`❌ Error converting ${inputFile}:`, error.message);
    }
  }
}

convertToWebP();
