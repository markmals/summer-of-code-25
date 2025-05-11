---
id: SOC-0002
title: Create a Torrent Automation System
size: 3 months
difficulty: Hard
---

# {{ $frontmatter.id }}: {{ $frontmatter.title }}

**Project size**: 3 months

**Estimated difficulty**: Hard

### Recommended Skills

- Strong proficiency in TypeScript and the Deno runtime
- Experience building desktop apps with Tauri
- Familiarity with React Router v7 and server‑side rendering
- Knowledge of BitTorrent protocols and Transmission RPC
- Comfort with ffmpeg CLI and basic video‑encoding concepts
- Understanding of Docker packaging and CI/CD pipelines

### Description

Many home‑media enthusiasts struggle to stitch together torrent search, automated downloads, transcoding, and library organization across macOS, Windows, Linux, and headless servers.
This project will deliver **Trove** – a single, user‑friendly application that:

1. Runs as a self‑contained desktop bundle (Tauri + Deno) **and** as a headless Docker image.
2. Automates the full pipeline from “new episode aired” → “file appears in Plex‑ready folder”:
   - TV‑metadata fetch (TMDb + Trakt)
   - Targeted BitTorrent search via `bitmagnet‑lite`
   - Managed downloads through a bundled Transmission daemon
   - CPU‑only h.264/h.265 conversion with static ffmpeg
   - Plex‑style renaming + directory layout
3. Stores state in the zero‑config **Deno KV** engine and coordinates work with Deno **Cron** + **Queues**.
4. Presents a React Router v7 web UI embedded in Tauri (window + tray) and exposed at `http://localhost:1612/config`.

The codebase must follow best practices (typed APIs, unit tests, CI, lint/fmt) and include a complete contributor handbook.

### Expected Results

- **Core service** (`main.ts`) running on Deno that:
  - Exposes REST endpoints for subscriptions and settings
  - Schedules episode‑search jobs via `Deno.cron`
  - Supervises Transmission, Bitmagnet‑lite, and ffmpeg side‑cars
- **KV schema & helpers** with atomic operations and unit coverage
- **React Router v7 SSR UI** with pages for:
  - Subscriptions (search, list, unsubscribe)
  - Settings (media directory, resolution, layout)
  - Download/encode progress dashboard
- **Tauri desktop bundle** (macOS .dmg, Windows .msi, Linux .AppImage) that:
  - Installs with one click and launches at login
  - Prompts the user for in‑place auto‑updates
- **Docker image** that defaults to full‑crawl Bitmagnet + Postgres for power users/NAS
- **Comprehensive test suite** (Vitest unit + Playwright E2E) and GitHub Actions CI
- **User & developer documentation** covering install, configuration, and contributing

#### Stretch Goals

<!-- - Hardware‑accelerated transcoding builds (VideoToolbox, NVENC, VA‑API) -->

- Companion iOS/Android remote‑control apps using the same REST API
