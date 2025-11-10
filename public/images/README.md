# Image Directory Guide

## Team Photos
Place team member photos in `/public/images/team/` with these filenames:

- `director.jpg` - Executive Director
- `care-manager.jpg` - Care Manager
- `community-coordinator.jpg` - Community Coordinator
- `operations-manager.jpg` - Operations Manager

**Recommended specs:**
- Format: JPG or PNG
- Dimensions: 400x500px (portrait orientation)
- File size: Under 500KB
- Style: Professional headshot with neutral background

---

## Trustee Photos
Place trustee photos in `/public/images/trustees/` with these filenames:

- `chair.jpg` - Chair of the Board
- `vice-chair.jpg` - Vice Chair
- `trustee-1.jpg` - Trustee (Social Care)
- `trustee-2.jpg` - Trustee (Legal)
- `trustee-3.jpg` - Trustee (Marketing)
- `trustee-4.jpg` - Trustee (HR)

**Recommended specs:**
- Format: JPG or PNG
- Dimensions: 400x480px (portrait orientation)
- File size: Under 500KB
- Style: Professional headshot with neutral background

---

## How to Add Photos

1. Save your photos with the exact filenames listed above
2. Place them in the appropriate folder
3. The website will automatically display them

## Updating Names and Information

To update the actual names, roles, and expertise areas:

Edit the file: `/src/app/about/page.tsx`

Find the `teamMembers` array (around line 14) and update:
```typescript
const teamMembers = [
  {
    name: 'John Smith', // Change name here
    role: 'Executive Director', // Change role here
    image: '/images/team/director.jpg',
    description: 'Your description here'
  },
  // ... more team members
]
```

Find the `trustees` array (around line 37) and update similarly.
