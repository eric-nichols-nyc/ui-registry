# Gallery Component

A production-ready image gallery component built with shadcn/ui, featuring auto-advance, navigation controls, and smooth transitions.

## Features

- ✨ **Auto-advance mode** with configurable intervals
- 🎯 **Progress indicator** showing current position and auto-advance progress
- ⬅️➡️ **Navigation buttons** for manual control
- 📊 **Thumbnail indicators** (dots) for quick navigation
- ⌨️ **Keyboard navigation** (arrow keys)
- 🎨 **Transition modes** (fade or slide)
- 🖱️ **Pause on hover** when auto-advance is enabled
- 📱 **Responsive design** for mobile and desktop
- 🔄 **Infinite looping** through images
- 🎭 **Smooth animations** with no janky transitions
- 🛡️ **Edge case handling** (empty, single image)

## Installation

The component uses the following shadcn/ui components:
- Button
- Card
- Progress

Make sure these are installed in your project.

## Usage

### Basic Usage

```tsx
import { Gallery } from "@/registry/new-york/blocks/gallery/gallery"

const images = [
  {
    src: "/images/photo1.jpg",
    alt: "Description of image 1",
    caption: "Optional caption for image 1"
  },
  {
    src: "/images/photo2.jpg",
    alt: "Description of image 2"
  }
]

export function MyGallery() {
  return <Gallery images={images} />
}
```

### Full Configuration

```tsx
<Gallery
  images={images}
  showProgress={true}
  showNavigation={true}
  showThumbnails={true}
  autoPlay={true}
  autoPlayInterval={5000}
  transition="fade"
  className="max-w-4xl mx-auto"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `images` | `GalleryImage[]` | **required** | Array of images to display |
| `showProgress` | `boolean` | `true` | Show/hide progress bar |
| `showNavigation` | `boolean` | `true` | Show/hide prev/next buttons |
| `showThumbnails` | `boolean` | `true` | Show/hide thumbnail dots |
| `autoPlay` | `boolean` | `true` | Enable/disable auto-advance |
| `autoPlayInterval` | `number` | `5000` | Time (ms) between auto-advances |
| `transition` | `"fade" \| "slide"` | `"fade"` | Transition animation type |
| `className` | `string` | `undefined` | Additional CSS classes |

### GalleryImage Type

```typescript
interface GalleryImage {
  src: string        // Image URL
  alt: string        // Alt text for accessibility
  caption?: string   // Optional caption displayed below image
}
```

## Examples

### Minimal Gallery (No Controls)

```tsx
<Gallery
  images={images}
  showProgress={false}
  showNavigation={false}
  showThumbnails={false}
  autoPlay={true}
  autoPlayInterval={3000}
/>
```

### Manual Navigation Only

```tsx
<Gallery
  images={images}
  showProgress={false}
  showNavigation={true}
  showThumbnails={true}
  autoPlay={false}
  transition="slide"
/>
```

### Fast Slideshow

```tsx
<Gallery
  images={images}
  showProgress={true}
  showNavigation={true}
  showThumbnails={true}
  autoPlay={true}
  autoPlayInterval={2000}
  transition="slide"
/>
```

## Keyboard Shortcuts

- **Left Arrow**: Previous image
- **Right Arrow**: Next image

## Behavior

- **Auto-advance**: Automatically cycles through images at the specified interval
- **Pause on hover**: When auto-play is enabled, hovering over the gallery pauses auto-advance
- **Infinite loop**: After the last image, cycles back to the first
- **Smooth progress**: Progress bar updates smoothly (every 50ms) for fluid animation
- **Transition protection**: Prevents rapid clicking during transitions (300ms cooldown)
- **Single image**: Automatically hides navigation controls and thumbnails for single images
- **Empty state**: Shows a friendly message when no images are provided

## Accessibility

- Proper `alt` text support for screen readers
- ARIA labels on navigation buttons
- Keyboard navigation support
- Semantic HTML structure
- Focus management for interactive elements

## Technical Details

- **React hooks** for state management
- **useCallback** for optimized event handlers
- **useEffect** for auto-advance and keyboard listeners
- **Proper cleanup** of timers and event listeners
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **lucide-react** for icons

## Performance

- Renders all images but only displays the current one
- Uses CSS transitions for smooth animations
- Efficient timer management with cleanup
- Minimal re-renders with memoized callbacks
- Smooth progress updates without blocking UI

## Browser Support

Works in all modern browsers that support:
- CSS transitions
- ES6+ JavaScript features
- React 19+
