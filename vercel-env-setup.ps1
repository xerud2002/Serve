# Script to add environment variables to Vercel
# Run this to add all environment variables to Vercel production

Write-Host "Adding environment variables to Vercel..." -ForegroundColor Cyan

# Firebase Configuration
Write-Output "AIzaSyCa85xpFNjo3zTa_NCBcnlIDYMCHL7yB3I" | vercel env add NEXT_PUBLIC_FIREBASE_API_KEY production
Write-Output "serve-bb1fb.firebaseapp.com" | vercel env add NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN production
Write-Output "serve-bb1fb" | vercel env add NEXT_PUBLIC_FIREBASE_PROJECT_ID production
Write-Output "serve-bb1fb.appspot.com" | vercel env add NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET production
Write-Output "208486040710" | vercel env add NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID production
Write-Output "1:208486040710:web:b75f8597b2634996a0bd07" | vercel env add NEXT_PUBLIC_FIREBASE_APP_ID production

# Email - Resend
Write-Output "re_SUL3c6WV_7ZMRfi2YTXBS5XDS7LC4DDqD" | vercel env add RESEND_API_KEY production

Write-Host "`nEnvironment variables added successfully!" -ForegroundColor Green
Write-Host "Now deploying to production..." -ForegroundColor Cyan

# Deploy to production
vercel --prod

Write-Host "`nDeployment complete!" -ForegroundColor Green

