# Task: Redesign Portfolio Gallery with Masonry Grid & Advanced Lightbox

## Steps:

1. Enhance masonry grid layout in src/components/dee-events/Portfolio.tsx
   - Confirm use of CSS columns for masonry
   - Apply smooth fade-in animation on scroll for grid items using React hook + CSS classes
   - Update image card styles to have equal spacing, 10-16px rounded corners, soft drop shadow

2. Improve lazy loading technique on images if needed

3. Refactor/enhance lightbox in src/components/dee-events/Portfolio.tsx
   - Add zoom-in opening and zoom-out closing animations with CSS transitions
   - Ensure full-screen black overlay with background scroll locked and interaction disabled
   - Enhance next/previous navigation buttons for click, tap, swipe support on desktop and mobile
   - Support keyboard navigation: arrow keys and Esc key to close
   - Add thumbnails carousel beneath the main image with horizontal scroll and clickable thumbnails
   - Prevent accidental page redirects and disable default anchor behavior
   - Fix double-click / rapid interaction glitches and maintain image position on navigation

4. Add or update CSS styles for masonry grid, fade-in animations, lightbox animations and thumbnails carousel in src/index.css or new CSS module

5. Create utility React hooks if required for scroll reveal animation and swipe event handling

6. Test responsiveness and performance on various devices (mobile, tablet, desktop)
7. Verify smooth load and zero layout shift

---

I will proceed with step 1: Enhance masonry grid and add scroll fade-in animation.
