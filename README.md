# Material Dashboard - Shadcn UI Architecture

A comprehensive, high-fidelity dashboard replication built using **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**. This project implements a fully responsive, data-driven administrative interface adhering to strict grid dimensions, layout alignment boundaries, and cohesive state transitions.

## 🚀 Live Demo
* **Production Deployment:** [Insert Vercel URL here]
* **Source Code:** https://github.com/areebamurtaza/my-material-dashboard

---

## 🛠️ Core Tech Stack & Architecture

* **Framework:** Next.js (App Router architecture with structured layouts)
* **Language:** TypeScript (Strict type safety across modular dataset interfaces)
* **Styling Engine:** Tailwind CSS (Utility-first configuration with custom theme tokens)
* **UI Component Primitives:** shadcn/ui (Radix UI primitives optimized for high-density interfaces)
* **Icons Pack:** Lucide React (Unified vector asset tracking)
* **Data Visualization:** Recharts (SVG-based analytics engine with custom layout overrides)

---

## 💎 Advanced Feature & Layout Engineering

* **Structured Layout Alignment System:** Employs a standardized internal alignment layout (`pl-[48px] pr-[16px] box-border`) inside core workspace views to maintain absolute vertical registration against main page typography headers.
* **Granular Chart Optimization:** Fine-tuned Recharts visualization components using customized pixel configurations (`barSize`, `barGap`) and custom-rendered HTML tooltips to deliver exact analytical parity.
* **Fluid Scroll Containers:** Injected utility modifiers to suppress native browser scrollbars cross-platform while fully retaining interactive touch and mouse-wheel scrolling ergonomics.
* **Layout Passthrough Configuration:** Authentication entryways utilize isolated wrapper controls to allow underlying global layout elements and textures to pass through seamlessly without color masking.
* **Modular Component Composition:** Extracted reusable view components, dynamic data metrics tables, and customized popover states to isolate state logic from presentational layouts.

---

## 📂 Core Modules Breakdown

### 1. Centralized Dashboard
* **Dynamic Information Banner:** Responsive header card with structured micro-copy, floating element layouts, and targeted call-to-actions (CTAs).
* **Diagnostic Metrics Grid:** A 4-column diagnostic array tracking performance and activity metrics, complete with absolute hover detail popovers and contextual trend badges.
* **Analytical Visualization Section:** Integrated charting panels tracking sales volume gradients, lineage distributions, device traffic breakdowns via donut charting, and quarterly performance ratios.

### 2. Live Data Tables
* **Active Authors Registry:** Displays personnel metadata sheets using responsive layout slots, localized category tracking, and state-based activity pills.
* **Project Tracking Ledger:** Monitors system budget boundaries, timeline states, and analytical completions using customized sub-component progress indicators linked directly to data array thresholds.

### 3. Billing & Subscriptions Management
* **Quota Analytics Cards:** High-density metric panels mapping active projects and file volumes using linear progress tracks.
* **Pricing Matrices Grid:** A 3-column service tier framework using explicit feature authorization checks, conditional layout styling, and structural centering overlays for highlighted options.
* **Historical Invoice Archive:** A data grid layout sorting payment milestones, service descriptions, and transaction triggers with embedded export utilities.

### 4. Enterprise User Profile
* **Identity Context Header:** A high-visibility profile grounding banner presenting identity maps, role definitions, and layout view-state controls.
* **System Settings Configuration:** Split grid layouts controlling platform toggle configurations, user-biography data containers, and isolated messaging feeds.

### 5. System Notifications Portal
* **Recent Alerts Feed:** A chronological notification feed utilizing structured alert formatting and distinct semantic accent colors.
* **Preference Toggles:** Administrative state controls handling real-time push and newsletter broadcast access.

---

## ⚙️ Local Development & Installation

Follow these steps to initialize and serve the project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/areebamurtaza/my-material-dashboard.git](https://github.com/areebamurtaza/my-material-dashboard.git)
   cd my-material-dashboard