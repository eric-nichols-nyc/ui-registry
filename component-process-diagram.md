# Adding a New Component to the UI Registry

## Workflow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                  1. CREATE COMPONENT FILES                       │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
        ┌─────────────────────────────────────────────────┐
        │  registry/new-york/blocks/[component-name]/     │
        │    ├── [component-name].tsx     (main code)     │
        │    ├── index.ts                 (exports)       │
        │    ├── README.md                (docs)          │
        │    ├── USAGE.md                 (examples)      │
        │    └── [COMPONENT].md           (detailed api)  │
        └─────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│             2. CREATE EXAMPLE FILE (optional)                    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
        ┌─────────────────────────────────────────────────┐
        │  registry/new-york/examples/                    │
        │    └── [component-name]-demo.tsx               │
        └─────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│           3. CREATE DOCUMENTATION PAGE                           │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
        ┌─────────────────────────────────────────────────┐
        │  content/docs/[component-name].mdx              │
        │    - Frontmatter (title, description)           │
        │    - Preview (imports demo)                     │
        │    - Installation instructions                  │
        │    - Usage examples                             │
        │    - API reference                              │
        └─────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│       4. REGISTER COMPONENT IN REGISTRY.JSON                     │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
        ┌─────────────────────────────────────────────────┐
        │  registry.json                                   │
        │  {                                               │
        │    "name": "component-name",                     │
        │    "type": "registry:block" | "registry:component",│
        │    "title": "Display Title",                    │
        │    "description": "...",                         │
        │    "registryDependencies": ["dep1", "dep2"],     │
        │    "files": [                                    │
        │      {                                           │
        │        "path": "registry/...",                   │
        │        "type": "registry:block"                  │
        │      }                                           │
        │    ]                                             │
        │  }                                               │
        └─────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│          5. BUILD REGISTRY                                      │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
        ┌─────────────────────────────────────────────────┐
        │  Run: pnpm run registry:build                    │
        │  OR:  shadcn build                               │
        │                                                  │
        │  This generates:                                 │
        │    - public/r/[component-name].json              │
        │    - Updates public/r/registry.json              │
        └─────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│       6. VERIFY IN DOCUMENTATION                                │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
        ┌─────────────────────────────────────────────────┐
        │  Visit: http://localhost:3000/docs/[component]  │
        │  Check:                                         │
        │    ✓ Preview renders correctly                   │
        │    ✓ Code examples work                         │
        │    ✓ Installation instructions are clear         │
        └─────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      ✅ COMPLETE!                                │
└─────────────────────────────────────────────────────────────────┘
```

## Checklist

- [ ] Create component folder structure in `registry/new-york/blocks/[name]/`
- [ ] Write main component code in `.tsx` file
- [ ] Add exports in `index.ts`
- [ ] Create `README.md` with overview
- [ ] Create `USAGE.md` with examples
- [ ] Create detailed `[NAME].md` with full API reference
- [ ] Optional: Create demo in `registry/new-york/examples/`
- [ ] Create documentation page in `content/docs/[name].mdx`
- [ ] Add entry to `registry.json`
- [ ] Run `pnpm run registry:build`
- [ ] Test in documentation site
- [ ] Commit changes

## File Types

### Registry Entry Types
- **`registry:component`** - Simple reusable components
- **`registry:block`** - Complex compound components/blocks
- **`registry:example`** - Example/demo files

### Example Registry Entry

```json
{
  "name": "my-component",
  "type": "registry:block",
  "title": "My Component",
  "description": "A description of what it does",
  "registryDependencies": ["button", "card"],
  "files": [
    {
      "path": "registry/new-york/blocks/my-component/my-component.tsx",
      "type": "registry:block"
    },
    {
      "path": "registry/new-york/examples/my-component-demo.tsx",
      "type": "registry:example"
    }
  ]
}
```

## Quick Reference Commands

```bash
# Development
pnpm run dev                          # Start dev server
pnpm run registry:dev                 # Registry development mode

# Building
pnpm run registry:build               # Build registry files
pnpm run build                        # Build full Next.js app

# Add to registry
1. Create files
2. Edit registry.json
3. Run: pnpm run registry:build
4. Verify in docs
```

