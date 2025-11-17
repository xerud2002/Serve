/**
 * Image Compression Script
 * Converts JPG/PNG to WebP with 85% quality for optimal performance
 * Preserves originals in /unused folder as backup
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const QUALITY = 85;
const INPUT_DIR = path.join(__dirname, '../public/images');
const BACKUP_DIR = path.join(__dirname, '../public/images/unused/originals');

// Ensure backup directory exists
if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  // Skip if already WebP or SVG
  if (ext === '.webp' || ext === '.svg') {
    console.log(`⏭️  Skipping: ${path.basename(filePath)}`);
    return;
  }

  // Only process JPG and PNG
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
    return;
  }

  const fileName = path.basename(filePath, ext);
  const dirName = path.dirname(filePath);
  const webpPath = path.join(dirName, `${fileName}.webp`);
  
  try {
    const originalSize = fs.statSync(filePath).size;
    
    // Convert to WebP
    await sharp(filePath)
      .webp({ quality: QUALITY })
      .toFile(webpPath);
    
    const newSize = fs.statSync(webpPath).size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${fileName}${ext} → ${fileName}.webp (${savings}% smaller)`);
    
    // Move original to backup (don't delete)
    const backupPath = path.join(BACKUP_DIR, path.basename(filePath));
    fs.renameSync(filePath, backupPath);
    
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      // Skip backup directory
      if (entry.name !== 'unused') {
        await processDirectory(fullPath);
      }
    } else if (entry.isFile()) {
      await compressImage(fullPath);
    }
  }
}

async function main() {
  console.log('🚀 Starting image compression...\n');
  console.log(`📁 Input directory: ${INPUT_DIR}`);
  console.log(`💾 Backup directory: ${BACKUP_DIR}`);
  console.log(`🎯 Target quality: ${QUALITY}%\n`);
  
  const startTime = Date.now();
  
  await processDirectory(INPUT_DIR);
  
  const duration = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n✨ Compression complete in ${duration}s!`);
  console.log(`📦 Originals backed up to: ${BACKUP_DIR}`);
}

main().catch(console.error);
