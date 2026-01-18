
# ☕ **HOMIE Coffee**

### *More than just coffee — a cinematic web experience*

HOMIE Coffee is a **high-end, immersive web experience** crafted to showcase premium coffee culture through **interactive storytelling, motion design, and modern web engineering**.
The website transforms a simple café visit into a **scroll-driven digital journey**, reflecting the warmth, depth, and craftsmanship of the brand itself.

---

## ✨ Why HOMIE Coffee?

* 🎬 Cinematic scroll-based storytelling
* 🧊 3D interactive product cards
* 🌀 Smooth motion & micro-interactions
* ⚡ Built with the latest web technologies
* 📱 Fully responsive & performance-focused

This is not just a website.
It’s a **digital café experience**.

---

## 🖼️ Experience Gallery

<p align="center">
  <img src="1.png" width="80%" alt="HOMIE Coffee Landing Experience" />
</p>

<details>
<summary><strong>➡️ View More Screens</strong></summary>

<p align="center">
  <img src="2.png" width="45%" alt="Scrollytelling Experience" />
  <img src="3.png" width="45%" alt="Product Showcase" />
</p>

<p align="center">
  <img src="4.png" width="45%" alt="Cafe Info & Location" />
</p>

</details>

---

## 🎥 Experience in Motion

Some interactions—especially **3D tilt effects, canvas-based scrollytelling, and smooth transitions**—are best understood in motion.

📹 A **full demo video (`video.mp4`)** is included in this repository to showcase:

* Scroll-driven animations
* 3D product interactions
* Page transitions & visual flow

➡️ *Open or download `video.mp4` to experience the website in motion.*

---

## 🚀 Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Then open:
👉 **[http://localhost:3000](http://localhost:3000)**

Start editing here:

```ts
app/page.tsx
```

Changes auto-refresh instantly.

---

## 🎨 Typography & Visual Identity

This project uses **`next/font`** for optimized font loading and includes
**Geist**, Vercel’s modern, clean font—perfect for premium UI experiences.

---

## 🧠 Technology Stack

Built using a **modern, production-grade stack**:

* **Next.js 16 (App Router)**
  Server Components, modern routing, and optimal performance.

* **React 19**
  Cutting-edge rendering and concurrency improvements.

* **TypeScript**
  Strong typing for scalable, maintainable code.

* **Tailwind CSS 4**
  Utility-first styling with design-system consistency.

* **Framer Motion**
  Powering:

  * Scrollytelling animations (`CoffeeScroll`)
  * 3D tilt effects (`ProductCard`)
  * Section reveals & page transitions
  * Modal and UI interactions

* **Lucide React**
  Clean, minimal, and consistent iconography.

---

## 📂 Project Structure

```
homie-coffee/
├── public/
│   └── images/
│       ├── products/        # Coffee & menu visuals
│       └── sequence/        # 80-frame coffee lifecycle
│
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout, metadata, fonts
│   │   ├── page.tsx         # Homepage composition
│   │   └── globals.css      # Global styles
│   │
│   └── components/
│       ├── AboutSection.tsx
│       ├── CoffeeScroll.tsx
│       ├── Footer.tsx
│       ├── LocationSection.tsx
│       ├── MenuSection.tsx
│       ├── Navbar.tsx
│       ├── ProductCard.tsx
│       ├── ShowcaseSection.tsx
│       └── TextOverlay.tsx
│
└── config files (Next.js, Tailwind, TS)
```

---

## 🎥 Scrollytelling Deep Dive

### *Coffee Lifecycle Sequence*

The heart of HOMIE Coffee is a **canvas-based scroll animation** implemented in
`src/components/CoffeeScroll.tsx`.

### How it works:

1. **Extended Scroll Space**
   A `450vh` container provides smooth narrative pacing.

2. **Sticky Canvas**
   The canvas stays fixed while frames update on scroll.

3. **Frame Sequence**

   * 80 high-resolution JPG frames
   * Stored in `/public/images/sequence/`

4. **Preloading for Performance**
   Frames preload into memory to ensure **60fps playback**.

5. **Scroll → Frame Mapping**

   * `useScroll` tracks progress (0 → 1)
   * Progress maps to frames (1 → 80)

6. **Canvas Rendering**
   Each scroll update redraws the correct frame.

7. **Responsive & Retina-Ready**
   Aspect-ratio safe, device-pixel-aware rendering.

---

## ☕ Café Information & Vibe

HOMIE Coffee isn’t just a café—it’s a **sanctuary for coffee lovers**.

### The Brand Story

> *“More than just coffee.”*

HOMIE is built on one belief: **coffee connects people**.
From the farmers who nurture the cherry to the baristas who pour the art—every cup tells a story.

---

### 🌟 Signature Offerings

* **The OG Latte** — Double shot, silky milk, signature art
* **Velvet Cold Brew** — Nitrogen-infused, 24-hour steep
* **Matcha Cloud** — Ceremonial grade matcha with vanilla foam
* **Espresso Tonic** — Bright, crisp, refreshing
* **Strawberry Delight** — Fresh, pink, and crowd-loved

---

## 📍 Visit HOMIE Coffee

**Address**
Lane 7, Koregaon Park
Pune, Maharashtra 411001

**Hours**

* **Mon – Fri**: 7:00 AM – 7:00 PM
* **Sat – Sun**: 8:00 AM – 6:00 PM

**Contact**

* 📞 9356773269
* ✉️ [cafe@gmail.com](mailto:cafe@gmail.com)
* 📸 @cafename

---

## 🧭 Navigation Highlights

* 🗺️ **Get Directions** — One-tap Google Maps navigation
* 💎 **Contact Card Modal** — Glassmorphic, elegant UI

---

## 📚 Learn More

* [Next.js Documentation](https://nextjs.org/docs)
* [Learn Next.js](https://nextjs.org/learn)
* [Next.js GitHub](https://github.com/vercel/next.js)

---

## 🚢 Deploy on Vercel

Deploy instantly using the platform built for Next.js:

👉 [Deploy with Vercel](https://vercel.com/new?utm_source=create-next-app)

---

### 🤍 Final Note

HOMIE Coffee is a blend of **engineering, motion design, and storytelling**.
Ideal for:

* Portfolio showcases
* Premium brand demos
* Interactive web experiments

If coffee were a website—**this would be it**. ☕✨

