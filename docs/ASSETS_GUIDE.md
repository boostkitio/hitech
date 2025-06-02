# Assets Upload Guide for HiTech Aesthetics

## Quick Reference
- **Logos**: Upload to `/public/images/`
  - `logo-light.webp` - For dark backgrounds
  - `logo-dark.webp` - For light backgrounds

- **Fonts**: Upload to `/public/fonts/`
  - Already includes Ivy Presto Display fonts

- **Videos**: Upload to `/public/videos/`
  - Hero videos, background videos

## File Organization

```
public/
├── images/
│   ├── logo-light.webp (your light logo)
│   ├── logo-dark.webp (your dark logo)
│   ├── treatments/ (treatment images)
│   ├── team/ (team photos)
│   └── gallery/ (gallery images)
├── videos/
│   └── hero-video.mp4 (background videos)
└── fonts/
    └── (custom fonts already included)
```

## Image Optimization Tips

1. **Format**: Use WebP for best compression
2. **Size Guidelines**:
   - Logos: Max 400px width
   - Hero images: 1920x1080px
   - Treatment images: 800x600px
   - Team photos: 600x600px

3. **Tools for Optimization**:
   - [Squoosh](https://squoosh.app/) - Google's image optimizer
   - [TinyPNG](https://tinypng.com/) - For PNG/JPG compression
   - [CloudConvert](https://cloudconvert.com/webp-converter) - Convert to WebP

## Video Guidelines

1. **Format**: MP4 with H.264 codec
2. **Size**: Keep under 10MB for hero videos
3. **No audio** for background videos
4. **Duration**: Under 30 seconds

## How to Upload

1. Place your files in the appropriate folders:
   - Logos → `/public/images/`
   - Videos → `/public/videos/`

2. The site will automatically use:
   - Light logo on dark backgrounds
   - Dark logo on light backgrounds

3. If logos don't appear, the site shows a text fallback

## Contact Information Update
Your contact details have been updated to:
- Address: 114 Camden Road, Tunbridge Wells, TN1 2QX
- Phone: 01892 338157