### [Refactoring]

1. All components in App.tsx

   - Issue: Hard to find and manage components

   - Fix: Moved each component to its own file in the container/ folder

2. Unclear component name: BoxArea97

   - Issue: Not meaningful or descriptive

   - Fix: Renamed to HeroSection for clarity

3. Unclear component name: BoxArea108

   - Issue: Doesn’t convey purpose

   - Fix: Renamed to SearchInput as it handles input with a search button

4. SearchInput component logic for handling search

   - Issue: Debounce logic was tightly coupled inside the component, making it hard to reuse and cluttering the component logic.

   - Fix: Created a reusable useDebounced hook that manages local state, syncs with initialValue, and calls onChange with a delay.

### [Design Fix]

1. Font family mismatch

   - Issue: System font used instead of design fonts

   - Fix: Added and loaded Inter and Work Sans locally

2. Header search alignment

   - Issue: Icon misaligned and UI not responsive

   - Fix: Aligned icon properly and used a button to trigger modal for better responsiveness

3. Hero section search bar

   - Issue: Incorrect colors, border, and radius

   - Fix: Updated to match design specifications

4. TagList badges

   - Issue: Padding and font size didn’t match design

   - Fix: Adjusted spacing and typography

### [Accessibility]

1. Header

   - Issue: Icons (like the search icon) didn’t have labels for screen readers.
   - Fix: Adding aria-label to buttons and links so screen readers understand them

   - Issue: The search input was missing a visible or screen reader-friendly label.
   - Fix: Adding a screen reader-only label (with sr-only) to the search icon.

   - Issue: Some elements (like the logo and avatar links) didn’t clearly say what they do for assistive technologies.
   - Fix: Using alt text like "Worctionary logo" for images.

   - Issue: No clear semantic role (role="banner") for the header.
   - Fix: Adding role="banner" to clearly define the header area for screen readers

   - Issue: Site Log Not keyboard accessible
   - Fix: Wrapped with an anchor tag

2. Avatar fallback

   - Issue: Poor contrast and not focusable

   - Fix: Improved contrast and wrapped with an anchor for accessibility

3. TagList Item

   - Issue: Not keyboard focusable
   - Fix: Wrapped with button tag

   - Issue: No semantic grouping (ul, li)
   - Fix: Added semantic grouping with ul and li

   - Issue: No descriptive labels for screen readers
   - Fix: added aria-labelledby to group
     tags and aria-label on button
