# Carousel Compound Component

A flexible, production-ready carousel component built with React compound component pattern. Use it for images, multi-step forms, testimonials, product showcases, or any content that needs to cycle through items.

## ✨ Key Features

- 🧩 **Compound Component Pattern** - Compose your own carousel with sub-components
- 🎯 **Flexible Content** - Images, forms, cards, text - anything you want!
- ⚡ **Auto-advance** mode with configurable intervals
- 📊 **Progress indicator** showing current position
- ⬅️➡️ **Navigation controls** for manual navigation
- 🎨 **Transition modes** (fade or slide)
- ⌨️ **Keyboard navigation** (arrow keys)
- 🖱️ **Pause on hover** when auto-play is enabled
- 📱 **Fully responsive**
- 🛡️ **Edge case handling** (empty, single item)
- ♿ **Accessible** with ARIA labels

## 📦 Installation

Depends on shadcn/ui components:
- `button`
- `card`
- `progress`

## 🚀 Usage

### Basic Example - Image Gallery

```tsx
import { Carousel } from "@/registry/new-york/blocks/gallery/gallery"
import Image from "next/image"

<Carousel
  showProgress={true}
  showNavigation={true}
  showIndicators={true}
  autoPlay={true}
  autoPlayInterval={5000}
>
  <Carousel.Item className="aspect-video relative">
    <Image src="/image1.jpg" alt="Image 1" fill className="object-cover" />
  </Carousel.Item>
  <Carousel.Item className="aspect-video relative">
    <Image src="/image2.jpg" alt="Image 2" fill className="object-cover" />
  </Carousel.Item>
  <Carousel.Item className="aspect-video relative">
    <Image src="/image3.jpg" alt="Image 3" fill className="object-cover" />
  </Carousel.Item>
</Carousel>
```

### Multi-Step Form

```tsx
import { Carousel } from "@/registry/new-york/blocks/gallery/gallery"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const [currentStep, setCurrentStep] = useState(0)

<Carousel
  showProgress={true}
  showIndicators={true}
  autoPlay={false}
  onIndexChange={setCurrentStep}
>
  <Carousel.Item>
    <Card>
      <CardHeader>
        <CardTitle>Step 1: Personal Info</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Form fields */}
      </CardContent>
    </Card>
  </Carousel.Item>
  
  <Carousel.Item>
    <Card>
      <CardHeader>
        <CardTitle>Step 2: Preferences</CardTitle>
      </CardHeader>
      <CardContent>
        {/* More form fields */}
      </CardContent>
    </Card>
  </Carousel.Item>
</Carousel>
```

### Product Showcase

```tsx
<Carousel
  showProgress={false}
  showNavigation={true}
  showIndicators={true}
  autoPlay={true}
  autoPlayInterval={4000}
  transition="slide"
>
  <Carousel.Item>
    <div className="p-8 text-center">
      <h3 className="text-2xl font-bold mb-2">Amazing Feature</h3>
      <p className="text-muted-foreground">Description here</p>
    </div>
  </Carousel.Item>
  {/* More items */}
</Carousel>
```

### Testimonials

```tsx
<Carousel
  showProgress={true}
  showNavigation={false}
  showIndicators={true}
  autoPlay={true}
  autoPlayInterval={6000}
  transition="fade"
>
  <Carousel.Item>
    <div className="p-8 text-center">
      <p className="text-lg italic mb-4">
        &ldquo;Great product!&rdquo;
      </p>
      <p className="font-semibold">John Doe</p>
      <p className="text-sm text-muted-foreground">CEO at Company</p>
    </div>
  </Carousel.Item>
  {/* More testimonials */}
</Carousel>
```

## 📖 API Reference

### Carousel Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | required | Carousel items (use `Carousel.Item`) |
| `showProgress` | `boolean` | `true` | Display progress bar |
| `showNavigation` | `boolean` | `true` | Show prev/next buttons |
| `showIndicators` | `boolean` | `true` | Show dot indicators |
| `autoPlay` | `boolean` | `true` | Enable automatic cycling |
| `autoPlayInterval` | `number` | `5000` | Milliseconds between transitions |
| `transition` | `"fade" \| "slide"` | `"fade"` | Animation style |
| `className` | `string` | - | Additional CSS classes |
| `onIndexChange` | `(index: number) => void` | - | Callback when index changes |

### Carousel.Item Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | required | Content of the carousel item |
| `className` | `string` | - | Additional CSS classes |

### Carousel Sub-components

#### `Carousel.Navigation`
Renders previous/next buttons. Automatically hidden for single items.

```tsx
<Carousel.Navigation />
```

#### `Carousel.Indicators`
Renders dot indicators for navigation. Automatically hidden for single items.

```tsx
<Carousel.Indicators />
```

#### `Carousel.Counter`
Renders current item counter (e.g., "2 / 5"). Automatically hidden for single items.

```tsx
<Carousel.Counter />
```

### Custom Composition Example

```tsx
<Carousel showProgress={false} showNavigation={false} showIndicators={false}>
  <Carousel.Item>Content 1</Carousel.Item>
  <Carousel.Item>Content 2</Carousel.Item>
  <Carousel.Item>Content 3</Carousel.Item>
  
  {/* Custom positioned navigation */}
  <div className="absolute top-4 right-4 z-30">
    <Carousel.Counter />
  </div>
  
  {/* Custom indicators at top */}
  <div className="absolute top-0 left-0 right-0">
    <Carousel.Indicators />
  </div>
</Carousel>
```

## 🎹 Keyboard Shortcuts

- **←** (Left Arrow): Previous item
- **→** (Right Arrow): Next item

## 💡 Use Cases

- **Image galleries** with captions
- **Multi-step forms** and wizards
- **Onboarding flows** for new users
- **Product showcases** and features
- **Customer testimonials** 
- **Tutorial/walkthrough** slides
- **Promotional banners**
- **Before/after** comparisons
- **Portfolio items**
- **News/article sliders**

## 🎨 Styling

The Carousel uses Tailwind CSS and shadcn/ui components. Customize by:

1. **Passing `className` prop** to Carousel or Carousel.Item
2. **Wrapping content** in your own styled components
3. **Using transition prop** for fade or slide animations
4. **Positioning sub-components** however you want

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on navigation buttons
- Keyboard navigation support
- Focus management
- Screen reader friendly

## 🔄 Migration from Old Gallery Component

The old prop-based Gallery component is still exported for backward compatibility:

```tsx
// Old way (still works)
import { Gallery } from "./gallery"
<Gallery images={imageArray} />

// New way (recommended)
import { Carousel } from "./gallery"
<Carousel>
  <Carousel.Item>...</Carousel.Item>
</Carousel>
```

## 🧪 Examples

See `gallery-demo.tsx` for comprehensive examples including:
- Image gallery
- Multi-step form with state tracking
- Product showcase with slide transitions
- Customer testimonials with quotes

## 🚦 Edge Cases

- **Empty children**: Shows "No content to display" message
- **Single item**: Hides navigation, indicators, and counter automatically
- **Rapid clicking**: Prevented with transition lock (300ms cooldown)
- **Keyboard navigation**: Disabled for single items

## 🔧 Technical Details

- Built with **React Context API** for compound components
- Uses **React.Children** utilities for flexible child handling
- Implements **useCallback** for optimized performance
- Proper **cleanup** of timers and event listeners
- **TypeScript** support with exported types
- Smooth **CSS transitions** (300ms duration)
