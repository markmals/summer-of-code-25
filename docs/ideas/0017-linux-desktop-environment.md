---
id: SOC-0017
title: Create a Custom Desktop Environment for Linux
size: 3 months
difficulty: Hard
---

# {{ $frontmatter.id }}: {{ $frontmatter.title }}

**Project size**: 3 months

**Estimated difficulty**: Hard

### Recommended Skills

- Strong Kotlin & Kotlin/Native experience (jvm, multiplatform, & `cinterop`)
- Familiarity with [GTK 4](https://www.gtk.org/features/)/[Libadwaita](https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1-latest) widget APIs
- Firm grasp of Wayland concepts, Mutter/GNOME Shell internals, and D‑Bus
- Basic systems‑level knowledge of Linux session management (`logind`, `xdg‑desktop‑portal`)
- Understanding of [Jetpack Compose](https://developer.android.com/compose)'s programming model

### Description

This project delivers a **fully‑featured desktop environment written entirely in Kotlin**, styled with Libadwaita, and powered by the `gtk‑kn` bindings.

Instead of writing a brand‑new compositor, we layer a custom shell on [**Mutter + Wayland**](https://mutter.gnome.org) — replacing GNOME Shell’s JS code with Kotlin while retaining its robust protocol stack.

Core tasks include:

1. **Session bootstrap**\
   _Login, systemd user target, and `.desktop` files for X11/Wayland sessions._
2. **Reactive shell process**\
   _Desktop window, dock, status bar, notification center, multitasking overview, and OSD overlays—built with a Compose-like declarative UI model for efficient recomposition and low-latency updates._
3. **D‑Bus / portal bridges**\
   _Window‑manager control, media keys, battery/network indicators, and `org.freedesktop.Notifications` implementation._
4. **Packaging & CI**\
   _Debian packages, GitHub/GitLab CI compiling on `debian:testing`, and flatpak‑friendly build scripts._

### Expected Results

- **Working shell prototype** that launches as its own session, provides window management, panels, notifications, and volume/brightness OSDs.
- **Installable `.deb` packages** (shell binary, schemas, themes) with post‑inst scripts to register Wayland & X11 sessions.
- **Kotlin library** exposing reusable widgets (`Dock`, `TopBar`, `Overview`) and D‑Bus helpers.
- **Full unit & integration test suite** (mocked D‑Bus, window events) running in CI.
- **Comprehensive developer documentation**: build instructions, architecture diagrams, code‑style guide, and contribution handbook.

#### Stretch Goals

- Plug‑in API for third‑party Kotlin panel widgets
- Theming engine leveraging Libadwaita CSS variables
- Flatpak sandbox‑aware portal fallbacks
- Accessibility support via AT‑SPI2
