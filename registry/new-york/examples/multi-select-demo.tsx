"use client"

import * as React from "react"
import MultipleSelector, { Option } from "@/registry/new-york/blocks/mulit-select/multi-select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/new-york/ui/card"

export function MultiSelectDemo() {
  const [selectedSkills, setSelectedSkills] = React.useState<Option[]>([])
  const [selectedLanguages, setSelectedLanguages] = React.useState<Option[]>([])
  const [selectedTags, setSelectedTags] = React.useState<Option[]>([])
  const [selectedCreatable, setSelectedCreatable] = React.useState<Option[]>([])

  // Sample data
  const skillOptions: Option[] = [
    { value: "react", label: "React" },
    { value: "nextjs", label: "Next.js" },
    { value: "typescript", label: "TypeScript" },
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
    { value: "nodejs", label: "Node.js" },
    { value: "tailwind", label: "Tailwind CSS" },
    { value: "prisma", label: "Prisma" },
    { value: "postgresql", label: "PostgreSQL" },
  ]

  const languageOptions: Option[] = [
    { value: "en", label: "English", fixed: true },
    { value: "es", label: "Spanish" },
    { value: "fr", label: "French" },
    { value: "de", label: "German" },
    { value: "it", label: "Italian" },
    { value: "pt", label: "Portuguese" },
    { value: "zh", label: "Chinese" },
    { value: "ja", label: "Japanese" },
  ]

  const groupedOptions: Option[] = [
    { value: "apple", label: "Apple", category: "Fruits" },
    { value: "banana", label: "Banana", category: "Fruits" },
    { value: "orange", label: "Orange", category: "Fruits" },
    { value: "carrot", label: "Carrot", category: "Vegetables" },
    { value: "broccoli", label: "Broccoli", category: "Vegetables" },
    { value: "spinach", label: "Spinach", category: "Vegetables" },
    { value: "grape", label: "Grape", category: "Fruits" },
    { value: "tomato", label: "Tomato", category: "Vegetables" },
  ]

  // Async search simulation
  const simulateAsyncSearch = async (query: string): Promise<Option[]> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Simulate filtering results
    const allOptions: Option[] = [
      { value: "user1", label: "John Doe" },
      { value: "user2", label: "Jane Smith" },
      { value: "user3", label: "Bob Johnson" },
      { value: "user4", label: "Alice Williams" },
      { value: "user5", label: "Charlie Brown" },
      { value: "user6", label: "Diana Prince" },
    ]

    if (!query) return allOptions
    return allOptions.filter(option =>
      option.label.toLowerCase().includes(query.toLowerCase())
    )
  }

  return (
    <div className="space-y-12">
      {/* Basic Multi-Select */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Multi-Select</CardTitle>
          <CardDescription>
            Select multiple skills from the available options
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MultipleSelector
            value={selectedSkills}
            onChange={setSelectedSkills}
            options={skillOptions}
            placeholder="Select skills..."
            emptyIndicator={
              <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                No results found.
              </p>
            }
          />
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">
              Selected: {selectedSkills.map(s => s.label).join(", ") || "None"}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* With Max Selection Limit */}
      <Card>
        <CardHeader>
          <CardTitle>Limited Selection</CardTitle>
          <CardDescription>
            Maximum of 3 languages can be selected
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MultipleSelector
            value={selectedLanguages}
            onChange={setSelectedLanguages}
            options={languageOptions}
            placeholder="Select up to 3 languages..."
            maxSelected={3}
            onMaxSelected={(maxLimit) => {
              console.log(`Maximum ${maxLimit} items can be selected`)
            }}
            emptyIndicator={
              <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                No results found.
              </p>
            }
          />
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">
              Selected: {selectedLanguages.map(s => s.label).join(", ") || "None"}
            </p>
            <p className="text-sm text-muted-foreground">
              Note: English is fixed and cannot be removed
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Grouped Options */}
      <Card>
        <CardHeader>
          <CardTitle>Grouped Options</CardTitle>
          <CardDescription>
            Options organized by categories
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MultipleSelector
            value={selectedTags}
            onChange={setSelectedTags}
            options={groupedOptions}
            placeholder="Select items..."
            groupBy="category"
            emptyIndicator={
              <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                No results found.
              </p>
            }
          />
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">
              Selected: {selectedTags.map(s => s.label).join(", ") || "None"}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Creatable Multi-Select */}
      <Card>
        <CardHeader>
          <CardTitle>Creatable Multi-Select</CardTitle>
          <CardDescription>
            Type to search or create new options on the fly
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MultipleSelector
            value={selectedCreatable}
            onChange={setSelectedCreatable}
            placeholder="Type to search or create..."
            creatable
            emptyIndicator={
              <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                No results found.
              </p>
            }
          />
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">
              Selected: {selectedCreatable.map(s => s.label).join(", ") || "None"}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Async Search */}
      <Card>
        <CardHeader>
          <CardTitle>Async Search</CardTitle>
          <CardDescription>
            Search with simulated API delay and loading indicator
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MultipleSelector
            options={[]}
            onSearch={simulateAsyncSearch}
            placeholder="Search users..."
            triggerSearchOnFocus
            delay={300}
            loadingIndicator={
              <p className="py-6 text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                Loading...
              </p>
            }
            emptyIndicator={
              <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                No users found.
              </p>
            }
          />
        </CardContent>
      </Card>

      {/* Disabled State */}
      <Card>
        <CardHeader>
          <CardTitle>Disabled State</CardTitle>
          <CardDescription>
            Multi-select in disabled state
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MultipleSelector
            value={[{ value: "example", label: "Example Option" }]}
            options={skillOptions}
            placeholder="Select skills..."
            disabled
          />
          <p className="mt-4 text-sm text-muted-foreground">
            This multi-select is disabled and cannot be interacted with
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

