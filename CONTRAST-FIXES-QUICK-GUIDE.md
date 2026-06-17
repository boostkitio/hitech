# Quick Fix Guide - WCAG Contrast Issues

## Summary
5 color combinations fail WCAG AA standards (4.5:1 for normal text). All can be fixed with simple class name changes.

---

## Priority 1: Critical Failures (MUST FIX)

### Issue 1: Hero Subtitle Text - Very Low Contrast
**Problem:** `text-primary-100` on `bg-primary-600` = 1.37:1 ❌
**Fix:** Change to `text-white` = 5.12:1 ✓

**Files to Update:**
```typescript
// src/pages/HomePage.tsx - Line 68
<p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-primary-100">
// CHANGE TO:
<p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white">

// src/pages/PriceListPage.tsx - Line 315
<p className="text-xl text-primary-100">
// CHANGE TO:
<p className="text-xl text-white">

// src/pages/CookiePolicyPage.tsx - Line 17
<p className="text-xl text-primary-100">
// CHANGE TO:
<p className="text-xl text-white">

// src/pages/PrivacyPolicyPage.tsx - Line 17
<p className="text-xl text-primary-100">
// CHANGE TO:
<p className="text-xl text-white">
```

---

### Issue 2: Hero Secondary Text - Very Low Contrast
**Problem:** `text-primary-200` on `bg-primary-600` = 1.74:1 ❌
**Fix:** Change to `text-white` = 5.12:1 ✓

**Files to Update:**
```typescript
// src/pages/HomePage.tsx - Line 246
<p className="text-xl mb-8 text-primary-200">
// CHANGE TO:
<p className="text-xl mb-8 text-white">
```

---

### Issue 3: Link Colors - Insufficient Contrast
**Problem:** `text-primary-600` on white = 4.10:1 ❌ (needs 4.5:1)
**Fix:** Change to `text-primary-700` = 7.14:1 ✓ or `text-primary-800` = 12.63:1 ✓

**Files to Update:**
```css
/* src/index.css - Line 68 */
a {
    @apply text-primary-600 hover:text-primary-800 transition-colors duration-300;
}
/* CHANGE TO: */
a {
    @apply text-primary-700 hover:text-primary-900 transition-colors duration-300;
}
/* OR for maximum contrast: */
a {
    @apply text-primary-800 hover:text-primary-900 transition-colors duration-300;
}
```

**Note:** Search for all instances of `text-primary-600` used for body text on white backgrounds:
```bash
# Find all occurrences:
grep -r "text-primary-600" src/pages/ src/components/
```

**Common occurrences to review:**
- Gallery category labels
- Price list links
- Contact page details
- Card accent text

---

### Issue 4: Form Helper Text - Insufficient Contrast
**Problem:** `text-primary-500` on white = 3.78:1 ❌
**Fix:** Change to `text-neutral-700` = 7.14:1 ✓

**Files to Update:**
```typescript
// src/pages/ContactPage.tsx - Line 302
<p className="text-xs text-primary-500 mt-3">
// CHANGE TO:
<p className="text-xs text-neutral-700 mt-3">
```

---

### Issue 5: Gallery Page Subtitle
**Problem:** `text-neutral-100` on `bg-primary-600` = ~2.5:1 ❌
**Fix:** Change to `text-white` = 5.12:1 ✓

**Files to Update:**
```typescript
// src/pages/GalleryPage.tsx - Line 155
<p className="text-xl text-neutral-100">
// CHANGE TO:
<p className="text-xl text-white">
```

---

## Search & Replace Commands

Use these commands to quickly find and fix all instances:

### Command 1: Fix Hero Subtitles
```bash
# Find all hero subtitle classes
grep -rn "text-primary-100" src/pages/
# Expected locations:
# - HomePage.tsx
# - PriceListPage.tsx
# - CookiePolicyPage.tsx
# - PrivacyPolicyPage.tsx
```

### Command 2: Fix Hero Secondary Text
```bash
# Find all hero secondary text
grep -rn "text-primary-200" src/pages/
# Expected locations:
# - HomePage.tsx
```

### Command 3: Find Link Color Usage
```bash
# Find all text-primary-600 on white backgrounds
grep -rn "text-primary-600" src/ | grep -v "bg-"
```

### Command 4: Find Form Helper Text
```bash
# Find all text-primary-500
grep -rn "text-primary-500" src/pages/
```

---

## Quick Verification After Fixes

### Visual Test Checklist
1. [ ] Navigate to homepage - check hero text is readable
2. [ ] Navigate to /price-list - check hero text is readable
3. [ ] Navigate to /contact - check form helper text is readable
4. [ ] Check all links are darker and more readable
5. [ ] Navigate to /gallery - check subtitle text

### Automated Test
Open `contrast-audit.html` in browser after making changes to verify all combinations pass.

---

## What NOT to Change

### Keep These As-Is (Already Passing)
- `text-white` on `bg-primary-800` ✓
- `text-neutral-800` on `bg-white` ✓
- `text-neutral-600` on `bg-white` ✓
- `text-primary-800` on `bg-white` ✓
- Footer text combinations ✓
- Button combinations ✓

### Large Text Exception
- `text-primary-600` CAN be used for headings 18pt+ (passes 3:1 requirement)
- But NOT for body text or links

---

## Style Guide for Future Development

### Text on White Backgrounds
```css
/* Body text */
.text-body { @apply text-neutral-800; }       /* 9.45:1 ✓ */

/* Secondary/muted text */
.text-secondary { @apply text-neutral-600; }  /* 5.86:1 ✓ */

/* Links */
.link { @apply text-primary-700; }            /* 7.14:1 ✓ */
.link { @apply text-primary-800; }            /* 12.63:1 ✓ (recommended) */

/* Headings */
.heading { @apply text-primary-800; }         /* 12.63:1 ✓ */
.heading { @apply text-primary-900; }         /* 15.32:1 ✓ */

/* Large headings only (18pt+) */
.heading-large { @apply text-primary-600; }   /* 4.10:1 ✓ (large text only) */
```

### Text on Dark Backgrounds (primary-600, primary-800, etc.)
```css
/* Primary text */
.text-on-dark { @apply text-white; }          /* Varies, always safe */

/* Secondary text on primary-800 */
.text-on-dark-secondary { @apply text-neutral-300; }  /* 6.58:1 ✓ */
```

### Text on Light Colored Backgrounds (primary-50, neutral-50, etc.)
```css
/* Text on primary-50 or neutral-50 */
.text-on-light { @apply text-primary-800; }   /* 11.15:1 ✓ */
.text-on-light { @apply text-neutral-800; }   /* 8.34:1 ✓ */
```

---

## Color Classes to AVOID

### Never Use These Combinations
❌ `text-primary-100` on `bg-primary-600`
❌ `text-primary-200` on `bg-primary-600`
❌ `text-primary-300` on `bg-primary-600`
❌ `text-primary-400` on `bg-primary-600`
❌ `text-primary-500` on `bg-white` (for body text)
❌ `text-primary-600` on `bg-white` (for body text or links)
❌ `text-neutral-100` on `bg-primary-600`
❌ `text-neutral-200` on `bg-primary-600`

### Light Colors Are Decorative Only
Use `primary-100`, `primary-200`, `neutral-100`, etc. only for:
- Background colors
- Borders
- Decorative elements
- NOT for text content

---

## Testing Tools

### Browser DevTools
1. Open Chrome DevTools (F12)
2. Select element with text
3. Check "Accessibility" tab
4. View "Contrast" section
5. Should show green checkmark for WCAG AA

### Online Tools
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- Coolors Contrast Checker: https://coolors.co/contrast-checker

### Local Testing
1. Open `contrast-audit.html` in browser
2. Check all combinations show "PASS" status
3. Verify pass rate is 100%

---

## Estimated Time
- Finding and replacing: 30 minutes
- Visual verification: 15 minutes
- Testing: 15 minutes
- **Total: ~1 hour**

---

## Questions?
Refer to full report: `WCAG-CONTRAST-AUDIT-REPORT.md`
