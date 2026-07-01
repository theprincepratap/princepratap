# 🚀 Prince Pratap — Personal Portfolio

A modern, animated personal portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. Features smooth animations powered by GSAP & Framer Motion, YouTube live stats integration, and a rich landing page with multiple interactive sections.

---

## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Environment Variables](#-environment-variables)
- [Installation & Setup](#-installation--setup)
- [Running the Project](#-running-the-project)
- [Building for Production](#-building-for-production)
- [Key Features](#-key-features)
- [Component Overview](#-component-overview)
- [API Routes](#-api-routes)
- [Customization Guide](#-customization-guide)
- [Troubleshooting](#-troubleshooting)
- [Connect With Me](#-connect-with-me)

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| UI Library | [React 19](https://react.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animation | [GSAP 3](https://gsap.com/) + [Framer Motion 12](https://www.framer.com/motion/) |
| Smooth Scroll | [Lenis](https://lenis.darkroom.engineering/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Carousel | [Swiper](https://swiperjs.com/) |
| Fonts | [Geist Sans & Geist Mono](https://vercel.com/font) (via `next/font`) |
| Image Hosting | [imgBB](https://imgbb.com/) |

---

## 📁 Project Structure

```
portfolio/
├── app/                          # Next.js App Router
│   ├── api/                      # API route handlers
│   │   ├── latest-video/         # Fetches latest YouTube video
│   │   └── youtube-stats/        # Fetches YouTube channel stats
│   ├── landingpage/              # Landing page route
│   ├── globals.css               # Global styles & Tailwind base
│   ├── layout.tsx                # Root layout (fonts, metadata)
│   └── page.tsx                  # Entry point (redirects to landing page)
│
├── components/                   # Shared UI component libraries
│   ├── kokonutui/                # KokonutUI components
│   ├── motion-primitives/        # Motion animation primitives
│   ├── smoothui/                 # Smooth UI components
│   └── ui/                       # shadcn/ui base components
│
├── features/
│   └── landingpage/
│       ├── MainLandingPage.tsx   # Root landing page composition
│       └── components/           # Section-specific components
│           ├── Hero.tsx          # Main hero / banner section
│           ├── AboutMe.tsx       # About me section
│           ├── ResumeSection.tsx # Resume / experience section
│           ├── WorkSection.tsx   # Projects & work section
│           ├── YouTubeLiveStats.tsx  # YouTube channel stats
│           ├── XCards.tsx        # Social / Twitter-style cards
│           ├── FavSongs.tsx      # Favorite songs section
│           ├── Contributions.tsx # GitHub contributions
│           ├── GridCarousel.tsx  # Grid-based image carousel
│           ├── SuffelCard.tsx    # Shuffling card component
│           ├── Scroll3DText.tsx  # 3D scroll text animation
│           ├── HowerExpand.tsx   # Hover expand interaction
│           ├── ImageCard.tsx     # Reusable image card
│           └── MyDetails.tsx     # Personal detail display
│
├── lib/                          # Utility functions
├── public/                       # Static assets (images, icons, etc.)
├── .env.local                    # Environment variables (NOT committed to Git)
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Project dependencies & scripts
```

---

## ✅ Prerequisites

Make sure you have the following installed before setting up the project:

| Tool | Minimum Version | Check Command |
|---|---|---|
| **Node.js** | v18.17.0+ | `node -v` |
| **npm** | v9.0.0+ | `npm -v` |
| **Git** | Any recent version | `git --version` |

> **Recommended**: Use [Node.js LTS](https://nodejs.org/en/download) (v20+) for best compatibility with Next.js 16 and React 19.

---

## 🔑 Environment Variables

This project requires a **YouTube Data API v3** key to power the live stats and latest video features.

### Step 1 — Create the `.env.local` file

In the project root, create a file named `.env.local`:

```bash
# Windows (PowerShell)
New-Item -Name ".env.local" -ItemType File

# macOS / Linux
touch .env.local
```

### Step 2 — Add the required variables

Open `.env.local` and paste the following:

```env
# YouTube Data API v3 Key
# Get yours at: https://console.cloud.google.com/apis/credentials
YOUTUBE_API_KEY=your_youtube_api_key_here

# Your YouTube Channel ID
# Find it at: https://www.youtube.com/account_advanced
YOUTUBE_CHANNEL_ID=your_channel_id_here
```

### Step 3 — How to get a YouTube API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select an existing one)
3. Navigate to **APIs & Services → Library**
4. Search for **"YouTube Data API v3"** and click **Enable**
5. Go to **APIs & Services → Credentials**
6. Click **Create Credentials → API key**
7. *(Optional but recommended)* Restrict the key to the `YouTube Data API v3` only
8. Copy the key and paste it as the value of `YOUTUBE_API_KEY` in `.env.local`

### How to find your YouTube Channel ID

1. Sign in to YouTube and go to [youtube.com/account_advanced](https://www.youtube.com/account_advanced)
2. Scroll down to find your **Channel ID** (starts with `UC...`)
3. Copy it and paste it as the value of `YOUTUBE_CHANNEL_ID`

> ⚠️ **Never commit `.env.local` to Git.** It is already listed in `.gitignore`.

---

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/theprincepratap/Hotportfolio.git
cd Hotportfolio
```

### 2. Install dependencies

```bash
npm install
```

This will install all packages from `package.json`, including Next.js, React, GSAP, Framer Motion, Tailwind CSS, and more.

### 3. Set up environment variables

Follow the [Environment Variables](#-environment-variables) section above.

---

## ▶️ Running the Project

### Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The page hot-reloads automatically as you save changes to source files.

### Run the linter

```bash
npm run lint
```

Uses ESLint with the Next.js configuration defined in `eslint.config.mjs`.

---

## 🏗 Building for Production

### 1. Build the optimized production bundle

```bash
npm run build
```

Compiles and optimizes the app. Output is placed in the `.next/` directory.

### 2. Start the production server

```bash
npm run start
```

Serves the built application at [http://localhost:3000](http://localhost:3000).

---

## ✨ Key Features

- 🎨 **Animated Hero Section** — GSAP-powered entrance animations and scroll-driven effects
- 📺 **YouTube Live Stats** — Real-time subscriber count, views, and latest video via YouTube Data API v3
- 📄 **Resume Section** — Interactive experience and skills timeline
- 🔄 **Shuffle Cards** — Smooth card shuffle animation component
- 📜 **3D Scroll Text** — Text that animates in 3D space as you scroll
- 🖼 **Grid Carousel** — Swiper-powered responsive image grid
- 🎵 **Favourite Songs** — Music showcase section
- 🌙 **Dark Mode Ready** — System-level theme support via `next-themes`
- 📱 **Fully Responsive** — Mobile-first layout with Tailwind CSS
- ⚡ **Smooth Scrolling** — Lenis smooth scroll applied globally
- 🖋 **Custom Fonts** — Geist Sans & Geist Mono via `next/font/google`
- 🌐 **SEO Optimised** — Metadata configured in `app/layout.tsx`

---

## 🧩 Component Overview

| Component | Location | Description |
|---|---|---|
| `Hero.tsx` | `features/landingpage/components/` | Full-screen animated hero banner |
| `AboutMe.tsx` | `features/landingpage/components/` | Personal bio and background |
| `ResumeSection.tsx` | `features/landingpage/components/` | Work experience and skills |
| `WorkSection.tsx` | `features/landingpage/components/` | Portfolio projects showcase |
| `YouTubeLiveStats.tsx` | `features/landingpage/components/` | Live YouTube channel statistics |
| `XCards.tsx` | `features/landingpage/components/` | Twitter/X-style social cards |
| `FavSongs.tsx` | `features/landingpage/components/` | Curated music playlist cards |
| `Contributions.tsx` | `features/landingpage/components/` | GitHub activity display |
| `GridCarousel.tsx` | `features/landingpage/components/` | Swiper image grid carousel |
| `SuffelCard.tsx` | `features/landingpage/components/` | Shuffling card interaction |
| `Scroll3DText.tsx` | `features/landingpage/components/` | Scroll-driven 3D text animation |
| `HowerExpand.tsx` | `features/landingpage/components/` | Hover-to-expand element |
| `ImageCard.tsx` | `features/landingpage/components/` | Reusable card with image support |
| `MyDetails.tsx` | `features/landingpage/components/` | Contact and personal detail card |

---

## 🔌 API Routes

Two internal API routes are exposed and consumed by the frontend:

### `GET /api/youtube-stats`

Fetches channel-level statistics from YouTube.

**Example Response:**
```json
{
  "subscriberCount": "12300",
  "viewCount": "567890",
  "videoCount": "42"
}
```

### `GET /api/latest-video`

Fetches the most recently uploaded video on the channel.

**Example Response:**
```json
{
  "title": "My Latest Video Title",
  "videoId": "dQw4w9WgXcQ",
  "thumbnail": "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
  "publishedAt": "2025-01-01T00:00:00Z"
}
```

> Both routes read `YOUTUBE_API_KEY` and `YOUTUBE_CHANNEL_ID` from `.env.local` at runtime.

---

## 🎨 Customization Guide

### Update Personal Information

Edit the relevant files inside `features/landingpage/components/`:

| What to change | File to edit |
|---|---|
| Name, tagline, intro | `Hero.tsx` |
| Bio / story | `AboutMe.tsx` |
| Work experience & skills | `ResumeSection.tsx` |
| Projects | `WorkSection.tsx` |
| Social links | `XCards.tsx` |
| Music playlist | `FavSongs.tsx` |
| Contact details | `MyDetails.tsx` |

### Swap Out Images

Images are hosted on [imgBB](https://imgbb.com/). To use your own images:

1. Upload your image to imgBB (free)
2. Copy the direct image URL (`https://i.ibb.co/...`)
3. Replace the existing URL in the component
4. The domain `i.ibb.co` is already whitelisted in `next.config.ts`

To **add a new image domain**, edit `next.config.ts`:

```ts
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "your-new-domain.com",
    },
  ],
},
```

### Change Fonts

Open `app/layout.tsx` and replace the `Geist` font imports with any [Google Font](https://fonts.google.com/) available via `next/font/google`.

### Modify Global Styles

- **Global CSS** → `app/globals.css`
- **Component styles** → Tailwind utility classes in each `.tsx` component file

---

## 🐛 Troubleshooting

### ❌ `Module not found` errors

```bash
npm install
```

Re-run install to ensure all packages are present.

---

### ❌ YouTube stats / latest video not loading

1. Confirm `.env.local` exists in the project root (not inside a subdirectory)
2. Check that `YOUTUBE_API_KEY` is valid and the **YouTube Data API v3** is enabled in Google Cloud
3. Confirm `YOUTUBE_CHANNEL_ID` is the channel ID (e.g. `UCJnw4uCsR9cs38cPVZSVcsA`), **not** the channel handle or username
4. Restart the dev server — Next.js only reads `.env.local` at startup:
   ```bash
   npm run dev
   ```

---

### ❌ Remote images not showing up

Ensure the image's hostname is listed under `images.remotePatterns` in `next.config.ts`. Currently whitelisted:
- `i.ibb.co` (imgBB)
- `i.ytimg.com` (YouTube thumbnails)

---

### ❌ Build fails with TypeScript errors

```bash
npx tsc --noEmit
```

Review and fix all type errors before running `npm run build`.

---

### ❌ Port 3000 is already in use

Run the dev server on a different port:

```bash
npm run dev -- -p 3001
```

Then visit [http://localhost:3001](http://localhost:3001).

---

## 📜 License

This project is for personal use. Feel free to fork and adapt it for your own portfolio — just give credit where it's due! 🙏

---

## 👤 Author

**Prince Pratap**  
- GitHub: [@theprincepratap](https://github.com/theprincepratap)

---

<p align="center">Built with ❤️ using Next.js & lots of coffee ☕</p>
