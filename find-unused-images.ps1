# Find and Move Unused Images Script
# This script scans all images in public folder and moves unused ones to public/images/unused

Write-Host "`nScanning for unused images..." -ForegroundColor Cyan

# Find all image files
$allImages = Get-ChildItem -Path "public" -Recurse -Include *.jpg,*.jpeg,*.png,*.svg,*.gif,*.webp,*.ico | Where-Object { $_.FullName -notmatch 'node_modules|unused' }

# Get all source files content
Write-Host "Reading source files..." -ForegroundColor Cyan
$sourceFiles = Get-ChildItem -Path "src" -Recurse -Include *.tsx,*.ts,*.js,*.jsx
$sourceContent = ($sourceFiles | Get-Content -Raw) -join "`n"

# Images that are used/unused
$usedImages = @()
$unusedImages = @()

Write-Host "`nAnalyzing images..." -ForegroundColor Cyan
Write-Host "==========================================`n" -ForegroundColor Cyan

foreach ($img in $allImages) {
    $relativePath = $img.FullName.Replace((Get-Location).Path + '\public', '').Replace('\', '/')
    $fileName = $img.Name
    
    # Check if this path or filename appears in any source file
    if (($sourceContent -match [regex]::Escape($relativePath)) -or ($sourceContent -match [regex]::Escape($fileName))) {
        $usedImages += $img
        Write-Host "Used:   $relativePath" -ForegroundColor Green
    } else {
        $unusedImages += $img
        Write-Host "Unused: $relativePath" -ForegroundColor Yellow
    }
}

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "Total images found: $($allImages.Count)" -ForegroundColor White
Write-Host "Used images:        $($usedImages.Count)" -ForegroundColor Green
Write-Host "Unused images:      $($unusedImages.Count)" -ForegroundColor Yellow
Write-Host "========================================`n" -ForegroundColor Cyan

if ($unusedImages.Count -eq 0) {
    Write-Host "No unused images found! All images are in use." -ForegroundColor Green
    exit 0
}

# Ask for confirmation
Write-Host "Found $($unusedImages.Count) unused images." -ForegroundColor Yellow
$response = Read-Host "Do you want to move them to public/images/unused? (Y/N)"

if ($response -ne 'Y' -and $response -ne 'y') {
    Write-Host "Operation cancelled." -ForegroundColor Red
    exit 0
}

# Create unused folder
New-Item -ItemType Directory -Force -Path "public\images\unused" | Out-Null

# Move unused images
Write-Host "`nMoving unused images..." -ForegroundColor Cyan
foreach ($img in $unusedImages) {
    $destination = "public\images\unused\$($img.Name)"
    Write-Host "  -> $($img.Name)" -ForegroundColor Magenta
    Move-Item -Path $img.FullName -Destination $destination -Force
}

Write-Host "`nDone! Moved $($unusedImages.Count) unused images to public\images\unused\" -ForegroundColor Green
Write-Host "You can review them there and delete if confirmed unused.`n" -ForegroundColor Gray
