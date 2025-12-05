# Script to add environment variables to Vercel
# Run this to add all environment variables to Vercel production

Write-Host "Adding environment variables to Vercel..." -ForegroundColor Cyan

# Facebook Integration
Write-Output "EAAZADjQJDkC8BQOZAyJp0AGaxDcZC3UR5Ct4qqUsvelGs1CZASarIWVBctebM7R9u6rgPP91qN2u9iCY9ZBe25J9OhfiF8OMRL0y7IVI6cpvgpLoJp76zrNXQ9tW5bvkZC6YrCUGjKqbAv9HQUXxBYs0siIkwRzCgoNGJ0t8ptv36um9N7R6gxlFlRouqDANwdqVfYGSfhXvGFbFeLQkshAyh8qBPn6JbkxqD38ixJVWMHeM0ellYtBXvoSReRvCRwvePF9OtZBePvRd4lVNFlZBZAD47EQZDZD" | vercel env add FACEBOOK_ACCESS_TOKEN production
Write-Output "239416516576684" | vercel env add FACEBOOK_PAGE_ID production

# Email - Resend
Write-Output "re_SUL3c6WV_7ZMRfi2YTXBS5XDS7LC4DDqD" | vercel env add RESEND_API_KEY production


Write-Host "`nEnvironment variables added successfully!" -ForegroundColor Green
Write-Host "Now deploying to production..." -ForegroundColor Cyan

# Deploy to production
vercel --prod

Write-Host "`nDeployment complete!" -ForegroundColor Green
