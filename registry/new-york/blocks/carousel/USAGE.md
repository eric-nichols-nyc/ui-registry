# Gallery Component - Quick Start

## Installation

The Gallery component is now available in your shadcn registry. It uses the following dependencies:
- `button` component
- `card` component  
- `progress` component
- `lucide-react` (ChevronLeft, ChevronRight icons)
- `next/image` for optimized images

## Basic Example

```tsx
import { Gallery } from "@/registry/new-york/blocks/gallery/gallery"

const images = [
  {
    src: "https://example.com/image1.jpg",
    alt: "First image description",
    caption: "Optional caption for first image"
  },
  {
    src: "https://example.com/image2.jpg",
    alt: "Second image description",
  },
  {
    src: "https://example.com/image3.jpg",
    alt: "Third image description",
    caption: "Another optional caption"
  }
]

export function MyPage() {
  return (
    <div className="container mx-auto py-8">
      <Gallery images={images} />
    </div>
  )
}
```

## Configuration Examples

### 1. Auto-playing Slideshow with All Features
```tsx
<Gallery
  images={images}
  showProgress={true}
  showNavigation={true}
  showThumbnails={true}
  autoPlay={true}
  autoPlayInterval={5000}
  transition="fade"
/>
```

### 2. Manual Navigation Only (No Auto-play)
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

### 3. Minimal Slideshow (Auto-play, No Controls)
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

### 4. Fast Product Carousel
```tsx
<Gallery
  images={productImages}
  showProgress={true}
  showNavigation={true}
  showThumbnails={true}
  autoPlay={true}
  autoPlayInterval={2000}
  transition="slide"
  className="max-w-2xl"
/>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `images` | `GalleryImage[]` | required | Array of images with src, alt, and optional caption |
| `showProgress` | `boolean` | `true` | Display progress bar at top |
| `showNavigation` | `boolean` | `true` | Show prev/next arrow buttons |
| `showThumbnails` | `boolean` | `true` | Show dot indicators at bottom |
| `autoPlay` | `boolean` | `true` | Enable automatic cycling |
| `autoPlayInterval` | `number` | `5000` | Milliseconds between transitions |
| `transition` | `"fade" \| "slide"` | `"fade"` | Animation style |
| `className` | `string` | - | Additional Tailwind classes |

## Features

✅ **Auto-advance** - Cycles through images automatically
✅ **Progress indicator** - Visual bar showing position and timing
✅ **Navigation controls** - Previous/next buttons
✅ **Thumbnail dots** - Click to jump to specific image
✅ **Keyboard support** - Arrow keys for navigation
✅ **Pause on hover** - Stops auto-advance when hovering
✅ **Responsive** - Works on all screen sizes
✅ **Smooth transitions** - Fade or slide animations
✅ **Loop behavior** - Infinite cycling through images
✅ **Edge case handling** - Works with 0, 1, or many images
✅ **Accessibility** - ARIA labels and semantic HTML
✅ **Next.js Image** - Optimized image loading

## Keyboard Shortcuts

- **←** (Left Arrow): Previous image
- **→** (Right Arrow): Next image

## Tips

1. **Image optimization**: The component uses Next.js `Image` component for automatic optimization
2. **Aspect ratio**: Images display in 16:9 aspect ratio by default (modify `aspect-video` class to change)
3. **Captions**: Add optional captions to any image for additional context
4. **Performance**: First image loads with `priority` flag for faster initial render
5. **Customization**: Add custom classes via `className` prop for styling tweaks

## Demo

See `gallery-demo.tsx` for multiple working examples showing different configurations.
