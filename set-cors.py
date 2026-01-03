from google.cloud import storage
import json

# Read CORS configuration
with open('cors.json', 'r') as f:
    cors_config = json.load(f)

# Initialize storage client
client = storage.Client(project='serve-bb1fb')
bucket = client.get_bucket('serve-bb1fb.appspot.com')

# Set CORS configuration
bucket.cors = cors_config
bucket.patch()

print("✓ CORS configuration updated successfully!")
print(f"CORS rules: {bucket.cors}")
