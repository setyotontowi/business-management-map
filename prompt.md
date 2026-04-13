# Prompt: Interactive HTML Visualization of Dynamic Capabilities Framework

## Objective
Create an interactive, visually appealing HTML page that displays the hierarchical framework mapping where Dynamic Capabilities fits within Business Management and organizational strategy.

## Structure to Visualize

```
BUSINESS STRATEGY & MANAGEMENT
│
├─ STRATEGIC MANAGEMENT
│  ├─ Competitive Advantage
│  │  ├─ Resource-Based View (RBV)
│  │  │  ├─ Core Competencies
│  │  │  └─ Capabilities ◄─── Dynamic Capabilities sit here
│  │  │
│  │  └─ Market Positioning
│  │
│  └─ Organizational Adaptation
│     ├─ Change Management
│     └─ Innovation Strategy
│
└─ OPERATIONAL MANAGEMENT
   ├─ Process Optimization
   ├─ Supply Chain
   └─ Resource Allocation
```

## Requirements

### Visual Design
- Clean, modern, hierarchical tree/flowchart layout
- Use color coding to distinguish hierarchy levels
- Highlight "Dynamic Capabilities" node prominently (different color, possibly with a glow or marker)
- Responsive design (works on desktop and tablet)
- Professional appearance suitable for organizational documentation

### Interactivity
- Hoverable nodes that reveal brief descriptions or context
- Optional: Clickable nodes that expand/collapse subtrees
- Smooth animations when hovering or clicking
- Visual feedback (cursor change, color shift, etc.)

### Content Enhancement
- Each node should have a tooltip or expandable description
- Example descriptions:
  - **Dynamic Capabilities**: "Ability to integrate, build, and reconfigure internal and external competencies to address rapidly changing environments"
  - **Resource-Based View (RBV)**: "Theory that competitive advantage comes from internal resources and capabilities"
  - **Capabilities**: "What an organization can actually do with its resources"
  - etc.

### Layout Options
- Consider either:
  - A traditional tree diagram (top-down or left-to-right)
  - A radial/circular layout
  - A nested box/container layout
  - Whichever best represents the hierarchical relationship

### Color Scheme
- Use a professional palette (blues, grays, accents)
- Differentiate hierarchy levels visually
- Make the "Dynamic Capabilities" node stand out

### Technical Specs
- Vanilla HTML/CSS/JavaScript (no external dependencies required, though SVG or Canvas can be used)
- Should be self-contained in a single .html file
- No API calls or external resources (except standard web fonts if desired)
- Cross-browser compatible

## Optional Enhancements
- A legend explaining the hierarchy levels
- A brief introductory section at the top
- An "About" section explaining the framework
- Animation on page load (nodes appearing sequentially)

## Deliverable
A single, standalone HTML file that can be opened in any modern browser and immediately displays the interactive visualization.