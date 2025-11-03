"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/registry/new-york/ui/button"
import { Card } from "@/registry/new-york/ui/card"
import { cn } from "@/lib/utils"

interface CarouselContextValue {
  currentIndex: number
  totalItems: number
  goToNext: () => void
  goToPrevious: () => void
  goToIndex: (index: number) => void
  isTransitioning: boolean
}

const CarouselContext = React.createContext<CarouselContextValue | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("Carousel components must be used within Carousel")
  }
  return context
}

export interface CarouselProps {
  children: React.ReactNode
  showProgress?: boolean
  autoPlay?: boolean
  autoPlayInterval?: number
  className?: string
  transition?: "fade" | "slide"
  onIndexChange?: (index: number) => void
}

// Sub-components defined first
const CarouselItem = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn("w-full", className)}>{children}</div>
}

const CarouselNavigation = ({
  position = "middle",
  variant = "ghost",
  showText = false,
  previousLabel = "Previous",
  nextLabel = "Next",
  previousIcon,
  nextIcon,
  className,
}: {
  position?: "top" | "middle" | "bottom"
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  showText?: boolean
  previousLabel?: string
  nextLabel?: string
  previousIcon?: React.ReactNode
  nextIcon?: React.ReactNode
  className?: string
}) => {
  const { goToNext, goToPrevious, isTransitioning, totalItems } = useCarousel()

  if (totalItems <= 1) return null

  const positionClasses = {
    top: "top-4",
    middle: "top-1/2 -translate-y-1/2",
    bottom: "bottom-4",
  }

  const positionClass = positionClasses[position]
  const PreviousIcon = previousIcon || <ChevronLeft className="h-6 w-6" />
  const NextIcon = nextIcon || <ChevronRight className="h-6 w-6" />

  return (
    <>
      <Button
        variant={variant}
        size={showText ? "default" : "icon"}
        className={cn(
          "absolute left-4 z-20 bg-background/80 backdrop-blur-sm hover:bg-background/90",
          positionClass,
          className
        )}
        onClick={goToPrevious}
        disabled={isTransitioning}
        aria-label="Previous"
      >
        {PreviousIcon}
        {showText && <span className="ml-2">{previousLabel}</span>}
      </Button>
      <Button
        variant={variant}
        size={showText ? "default" : "icon"}
        className={cn(
          "absolute right-4 z-20 bg-background/80 backdrop-blur-sm hover:bg-background/90",
          positionClass,
          className
        )}
        onClick={goToNext}
        disabled={isTransitioning}
        aria-label="Next"
      >
        {showText && <span className="mr-2">{nextLabel}</span>}
        {NextIcon}
      </Button>
    </>
  )
}

const CarouselIndicators = () => {
  const { currentIndex, totalItems, goToIndex, isTransitioning } = useCarousel()

  if (totalItems <= 1) return null

  return (
    <div className="flex items-center justify-center gap-2 px-6 py-6">
      {Array.from({ length: totalItems }).map((_, index) => (
        <button
          key={index}
          onClick={() => goToIndex(index)}
          disabled={isTransitioning}
          className={cn(
            "h-2 rounded-full transition-all",
            index === currentIndex
              ? "w-8 bg-primary"
              : "w-2 bg-primary/30 hover:bg-primary/50",
            isTransitioning && "cursor-not-allowed opacity-50"
          )}
          aria-label={`Go to item ${index + 1}`}
        />
      ))}
    </div>
  )
}

const CarouselCounter = () => {
  const { currentIndex, totalItems } = useCarousel()

  if (totalItems <= 1) return null

  return (
    <div className="absolute bottom-4 right-4 z-20 rounded-md bg-background/80 px-3 py-1 text-sm font-medium backdrop-blur-sm">
      {currentIndex + 1} / {totalItems}
    </div>
  )
}

const CarouselRoot = ({
  children,
  showProgress = true,
  autoPlay = true,
  autoPlayInterval = 5000,
  className,
  transition = "fade",
  onIndexChange,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isPaused, setIsPaused] = React.useState(false)
  const [progress, setProgress] = React.useState(0)
  const [isTransitioning, setIsTransitioning] = React.useState(false)
  const timerRef = React.useRef<NodeJS.Timeout | null>(null)
  const progressIntervalRef = React.useRef<NodeJS.Timeout | null>(null)

  // Filter children to only get CarouselItem components
  const allChildren = React.Children.toArray(children)
  const items = allChildren.filter((child) => {
    return React.isValidElement(child) && child.type === CarouselItem
  })
  const otherChildren = allChildren.filter((child) => {
    return React.isValidElement(child) && child.type !== CarouselItem
  })

  const totalItems = items.length
  const isSingleItem = totalItems === 1

  const goToNext = React.useCallback(() => {
    if (isTransitioning || totalItems === 0) return
    setIsTransitioning(true)
    const newIndex = (currentIndex + 1) % totalItems
    setCurrentIndex(newIndex)
    onIndexChange?.(newIndex)
    setProgress(0)
    setTimeout(() => setIsTransitioning(false), 300)
  }, [totalItems, isTransitioning, currentIndex, onIndexChange])

  const goToPrevious = React.useCallback(() => {
    if (isTransitioning || totalItems === 0) return
    setIsTransitioning(true)
    const newIndex = (currentIndex - 1 + totalItems) % totalItems
    setCurrentIndex(newIndex)
    onIndexChange?.(newIndex)
    setProgress(0)
    setTimeout(() => setIsTransitioning(false), 300)
  }, [totalItems, isTransitioning, currentIndex, onIndexChange])

  const goToIndex = React.useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex || index < 0 || index >= totalItems) return
      setIsTransitioning(true)
      setCurrentIndex(index)
      onIndexChange?.(index)
      setProgress(0)
      setTimeout(() => setIsTransitioning(false), 300)
    },
    [currentIndex, isTransitioning, totalItems, onIndexChange]
  )

  // Auto-advance functionality
  React.useEffect(() => {
    if (!autoPlay || isPaused || isSingleItem || totalItems === 0) return

    // Clear existing timers
    if (timerRef.current) clearTimeout(timerRef.current)
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)

    // Reset progress
    setProgress(0)

    // Progress update interval (update every 50ms for smooth animation)
    const progressStep = (50 / autoPlayInterval) * 100
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const next = prev + progressStep
        return next >= 100 ? 100 : next
      })
    }, 50)

    // Auto-advance timer
    timerRef.current = setTimeout(() => {
      goToNext()
    }, autoPlayInterval)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
    }
  }, [autoPlay, isPaused, currentIndex, autoPlayInterval, goToNext, isSingleItem, totalItems])

  // Keyboard navigation
  React.useEffect(() => {
    if (isSingleItem || totalItems === 0) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault()
        goToPrevious()
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        goToNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [goToNext, goToPrevious, isSingleItem, totalItems])

  // Handle edge cases after all hooks
  if (totalItems === 0) {
    return (
      <Card className={cn("flex items-center justify-center p-12", className)}>
        <p className="text-muted-foreground">No content to display</p>
      </Card>
    )
  }

  const contextValue: CarouselContextValue = {
    currentIndex,
    totalItems,
    goToNext,
    goToPrevious,
    goToIndex,
    isTransitioning,
  }

  return (
    <CarouselContext.Provider value={contextValue}>
      <Card
        className={cn("overflow-hidden p-0", className)}
        onMouseEnter={() => autoPlay && setIsPaused(true)}
        onMouseLeave={() => autoPlay && setIsPaused(false)}
      >
      {/* Step Progress */}
      {showProgress && !isSingleItem && (
        <div className="px-6 pt-6">
          <div className="flex gap-1">
            {items.map((_, index) => {
              const isActive = index === currentIndex
              const isComplete = index <= currentIndex
              const stepProgress = isComplete ? 100 : 0

              return (
                <div
                  key={index}
                  className="h-1 flex-1 rounded-full bg-primary/20 overflow-hidden"
                >
                  <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{
                      width: `${stepProgress}%`
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      )}

        {/* Main Content Container */}
        <div className="relative w-full overflow-hidden">
          {/* Content Items */}
          {items.map((item, index) => (
            <div
              key={index}
              className={cn(
                "transition-all duration-300",
                transition === "fade" && [
                  index === currentIndex
                    ? "opacity-100 z-10 relative"
                    : "opacity-0 z-0 absolute inset-0",
                ],
                transition === "slide" && [
                  index === currentIndex
                    ? "translate-x-0 z-10 relative"
                    : index < currentIndex
                      ? "-translate-x-full z-0 absolute inset-0"
                      : "translate-x-full z-0 absolute inset-0",
                ]
              )}
            >
              {item}
            </div>
          ))}

          {/* Render other children (Navigation, Indicators, Counter, etc.) */}
          {otherChildren}
        </div>
      </Card>
    </CarouselContext.Provider>
  )
}

// Export all components
export const Carousel = Object.assign(CarouselRoot, {
  Item: CarouselItem,
  Navigation: CarouselNavigation,
  Indicators: CarouselIndicators,
  Counter: CarouselCounter,
})

// Also export sub-components individually
export { CarouselItem, CarouselNavigation, CarouselIndicators, CarouselCounter }

// Legacy export for backward compatibility
export { Carousel as Gallery }
