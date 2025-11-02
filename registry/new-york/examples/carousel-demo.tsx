"use client"

import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselItem,
  CarouselNavigation,
  CarouselIndicators,
  CarouselCounter
} from "@/registry/new-york/blocks/carousel/carousel"
import { Button } from "@/registry/new-york/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/registry/new-york/ui/card"

export function CarouselDemo() {
  const [currentStep, setCurrentStep] = React.useState(0)

  return (
    <div className="space-y-12">
      {/* Image Gallery */}
      <div>
        <h2 className="mb-4 text-2xl font-bold">Image Gallery</h2>
        <Carousel
          showProgress={true}
          autoPlay={true}
          autoPlayInterval={5000}
          transition="fade"
        >
          <CarouselItem className="aspect-video relative">
            <Image
              src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1200&q=80"
              alt="Mountain landscape"
              fill
              className="object-cover"
            />
            <CarouselNavigation />
            <CarouselCounter />
          </CarouselItem>
          <CarouselItem className="aspect-video relative">
            <Image
              src="https://images.unsplash.com/photo-1682687221038-404cb8830901?w=1200&q=80"
              alt="Ocean waves"
              fill
              className="object-cover"
            />
            <CarouselNavigation />
            <CarouselCounter />
          </CarouselItem>
          <CarouselItem className="aspect-video relative">
            <Image
              src="https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=1200&q=80"
              alt="Forest path"
              fill
              className="object-cover"
            />
            <CarouselNavigation />
            <CarouselCounter />
          </CarouselItem>
          <CarouselIndicators />
        </Carousel>
      </div>

      {/* Multi-Step Form */}
      <div>
        <h2 className="mb-4 text-2xl font-bold">Multi-Step Form</h2>
        <Carousel
          showProgress={true}
          autoPlay={false}
          onIndexChange={setCurrentStep}
        >
          <CarouselItem>
            <Card>
              <CardHeader>
                <CardTitle>Step 1: Personal Information</CardTitle>
                <CardDescription>Tell us about yourself</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pb-20">
                <div>
                  <label className="text-sm font-medium">Full Name</label>
                  <input
                    type="text"
                    className="w-full mt-1 px-3 py-2 border rounded-md"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full mt-1 px-3 py-2 border rounded-md"
                    placeholder="john@example.com"
                  />
                </div>
              </CardContent>
            </Card>
          </CarouselItem>

          <CarouselItem>
            <Card>
              <CardHeader>
                <CardTitle>Step 2: Preferences</CardTitle>
                <CardDescription>Choose your settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pb-20">
                <div>
                  <label className="text-sm font-medium">Theme</label>
                  <select className="w-full mt-1 px-3 py-2 border rounded-md">
                    <option>Light</option>
                    <option>Dark</option>
                    <option>Auto</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Language</label>
                  <select className="w-full mt-1 px-3 py-2 border rounded-md">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>

          <CarouselItem>
            <Card>
              <CardHeader>
                <CardTitle>Step 3: Review</CardTitle>
                <CardDescription>Confirm your information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pb-20">
                <div className="space-y-2">
                  <p className="text-sm"><strong>Name:</strong> John Doe</p>
                  <p className="text-sm"><strong>Email:</strong> john@example.com</p>
                  <p className="text-sm"><strong>Theme:</strong> Dark</p>
                  <p className="text-sm"><strong>Language:</strong> English</p>
                </div>
                <Button className="w-full">Complete Setup</Button>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselNavigation
            position="bottom"
            showText={true}
            previousLabel="Prev"
            nextLabel="Next"
          />
        </Carousel>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Current step: {currentStep + 1} of 3
        </p>
      </div>

      {/* Product Showcase */}
      <div>
        <h2 className="mb-4 text-2xl font-bold">Product Showcase</h2>
        <Carousel
          showProgress={false}
          autoPlay={true}
          autoPlayInterval={4000}
          transition="slide"
        >
          <CarouselItem>
            <div className="p-8 text-center">
              <div className="mb-6 text-6xl">🎨</div>
              <h3 className="text-2xl font-bold mb-2">Design Tools</h3>
              <p className="text-muted-foreground mb-4">
                Professional design tools for creative professionals
              </p>
              <Button>Learn More</Button>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-8 text-center">
              <div className="mb-6 text-6xl">⚡</div>
              <h3 className="text-2xl font-bold mb-2">Fast Performance</h3>
              <p className="text-muted-foreground mb-4">
                Lightning-fast rendering and optimized workflows
              </p>
              <Button>Learn More</Button>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-8 text-center">
              <div className="mb-6 text-6xl">🔒</div>
              <h3 className="text-2xl font-bold mb-2">Secure & Private</h3>
              <p className="text-muted-foreground mb-4">
                Enterprise-grade security for your data
              </p>
              <Button>Learn More</Button>
            </div>
          </CarouselItem>
          <CarouselNavigation />
          <CarouselIndicators />
        </Carousel>
      </div>

      {/* Testimonials */}
      <div>
        <h2 className="mb-4 text-2xl font-bold">Customer Testimonials</h2>
        <Carousel
          showProgress={true}
          autoPlay={true}
          autoPlayInterval={6000}
          transition="fade"
        >
          <CarouselItem>
            <div className="p-8 text-center max-w-2xl mx-auto">
              <p className="text-lg italic mb-4">
                &ldquo;This component library has completely transformed our development workflow.
                The quality and attention to detail is outstanding.&rdquo;
              </p>
              <p className="font-semibold">Sarah Johnson</p>
              <p className="text-sm text-muted-foreground">Lead Developer at TechCorp</p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-8 text-center max-w-2xl mx-auto">
              <p className="text-lg italic mb-4">
                &ldquo;Incredibly flexible and easy to customize. We built our entire design
                system on top of these components.&rdquo;
              </p>
              <p className="font-semibold">Michael Chen</p>
              <p className="text-sm text-muted-foreground">CTO at StartupXYZ</p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-8 text-center max-w-2xl mx-auto">
              <p className="text-lg italic mb-4">
                &ldquo;The flexible pattern makes it so easy to build exactly what we need.
                Highly recommended!&rdquo;
              </p>
              <p className="font-semibold">Emily Rodriguez</p>
              <p className="text-sm text-muted-foreground">Senior Engineer at BigCo</p>
            </div>
          </CarouselItem>
          <CarouselIndicators />
        </Carousel>
      </div>
    </div>
  )
}

// Keep old name for backward compatibility
export { CarouselDemo as GalleryDemo }
