# Download Facebook Event Images
# Run this after you've updated your access token with the right permissions

# Configuration
$pageId = "239416516576684"
$eventIds = @(
    "505353872514098",  # Graeme Duffin
    "1118818683095354", # Sing for Serve
    "488541410754988",  # Happy to Serve
    "1456713141656694"  # Family Fun Day
)
$outputDir = "public\images\events"

# Load token from .env.local
if (Test-Path ".env.local") {
    Get-Content ".env.local" | ForEach-Object {
        if ($_ -match "FACEBOOK_ACCESS_TOKEN=(.+)") {
            $accessToken = $matches[1]
        }
    }
} else {
    Write-Host "Error: .env.local not found!" -ForegroundColor Red
    exit 1
}

if (-not $accessToken) {
    Write-Host "Error: FACEBOOK_ACCESS_TOKEN not found in .env.local!" -ForegroundColor Red
    exit 1
}

Write-Host "Fetching event images from Facebook..." -ForegroundColor Cyan

# Create output directory if it doesn't exist
New-Item -ItemType Directory -Force -Path $outputDir | Out-Null

$fileNames = @(
    "graeme-duffin.jpg",
    "sing-for-serve.jpg",
    "happy-to-serve.jpg",
    "family-fun-day.jpg"
)

for ($i = 0; $i -lt $eventIds.Length; $i++) {
    $eventId = $eventIds[$i]
    $fileName = $fileNames[$i]
    $outputPath = "$outputDir\$fileName"
    
    Write-Host "`nEvent ID: $eventId" -ForegroundColor Yellow
    
    # Fetch event data including cover photo
    try {
        $eventUrl = "https://graph.facebook.com/v19.0/$eventId`?fields=id,name,cover&access_token=$accessToken"
        $response = Invoke-RestMethod -Uri $eventUrl -Method Get
        
        if ($response.cover -and $response.cover.source) {
            $imageUrl = $response.cover.source
            Write-Host "   Found cover image: $($response.name)" -ForegroundColor Green
            Write-Host "   Downloading from: $imageUrl" -ForegroundColor Gray
            
            # Download the image
            Invoke-WebRequest -Uri $imageUrl -OutFile $outputPath
            
            if (Test-Path $outputPath) {
                $fileSize = (Get-Item $outputPath).Length / 1KB
                Write-Host "   Downloaded: $fileName ($([math]::Round($fileSize, 2)) KB)" -ForegroundColor Green
            } else {
                Write-Host "   Failed to save: $fileName" -ForegroundColor Red
            }
        } else {
            Write-Host "   No cover image found for this event" -ForegroundColor Yellow
        }
    }
    catch {
        Write-Host "   Error: $($_.Exception.Message)" -ForegroundColor Red
        if ($_.Exception.Response) {
            $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
            $responseBody = $reader.ReadToEnd()
            Write-Host "   Response: $responseBody" -ForegroundColor Red
        }
    }
}

Write-Host "`nDone! Check $outputDir for downloaded images." -ForegroundColor Green
Write-Host "Restart your dev server to see the new images on the website." -ForegroundColor Cyan
