---
id: SOC-0016
title: Create a Custom Android Launcher
size: 3 months
difficulty: Hard
---

# {{ $frontmatter.id }}: {{ $frontmatter.title }}

**Project size**: 3 months\
**Estimated difficulty**: Hard

<div style="width: 100%; display: grid; grid-template-columns: 1fr 1fr; grid-auto-rows: min-content; gap: 1rem; align-items: start">
  <a href="/images/dock.png">
    <img src="/images/dock.png" alt="">
  </a>
  <a href="/images/dock-with-search.png">
    <img src="/images/dock-with-search.png" alt="">
  </a>
  <a href="/images/widget-timeline.png">
    <img src="/images/widget-timeline.png" alt="">
  </a>
  <a href="/images/ava-cards.png">
    <img src="/images/ava-cards.png" alt="">
  </a>
</div>

## Recommended Skills

- Strong Kotlin and Jetpack Compose knowledge
- Familiarity with Android’s **SystemUI**, **Launcher3/QuickStep**, and the AOSP build system (Soong)
- Experience compiling custom ROMs and integrating proprietary blobs
- Understanding of Android security model, SELinux, and platform signing
- Comfort working with Git, _repo_, and continuous‑integration pipelines

## Description

Android’s core user interface (status bar, notification shade, quick settings, recents, volume HUD, power menu, etc.) is provided by the _SystemUI_ and _QuickStep_ apps—both written in Java/Kotlin + XML.

This project aims to **rewrite those components in Jetpack Compose**, bundle them into a Pixel‑Experience–derived ROM, and ship Google Play Services so end‑users keep the familiar Pixel feature set while enjoying a modern, fully themable System UI built entirely in Kotlin.

::: tip Target Devices

- [Nothing Phone 3a Pro](https://us.nothing.tech/pages/phone-3a-pro) (`spacewar3a`)
- [CMF Phone 2 Pro](https://us.nothing.tech/pages/cmf-phone-2-pro) (`comet2p`)
- [Fairphone 5](https://shop.fairphone.com/fairphone-5) (`fair_5`)

:::

This project will:

1. Fork Pixel‑Experience 14 manifests, add device trees & vendor blobs.
2. Enable Compose inside _SystemUI_ and _Launcher3_ by extending their `Android.bp`, eliminating XML layouts.
3. Re‑implement:
   - Status bar & signal/battery icons
   - Quick Settings panel (tiles in `LazyVerticalGrid`)
   - Notification shade using Compose’s `LazyColumn` fed by the existing notification pipeline
   - Volume/Ringer dialog (`Dialog` + `Slider`)
   - Power menu (`ModalBottomSheet`)
   - Recents/gesture navigation (Compose shell around the AOSP `RecentsAnimation` bridge)
4. Override framework resource flags (`config_systemUIFactoryComponent`, `volume_dialog_component`, `recents_component`, etc.) to point at Compose classes.
5. Produce flashable `system.img` / OTA zips for all three devices and document the flashing process.
6. Set up a GitHub Actions CI pipeline to build nightly ROM images and run CTS‑lite.

## Expected Results

- **Bootable Pixel‑Experience ROM** for all target devices with:
  - Compose‑based SystemUI & QuickStep signed by platform keys
  - Fully working status bar, QS, notifications, volume HUD, power menu, and recents
- Google Play Services operational (SafetyNet / Play Integrity passes)
- Public repo + CI generating weekly OTA packages
- Developer documentation describing build, flashing, and component architecture

### Stretch Goals

- Dynamic Material‑You theming of the entire System UI
- End‑user theme picker powered by Runtime Resource Overlays (RRO)
- Live reload of Compose code in System UI via ADB “compose‑hot‑swap”
- Port to additional devices (e.g., Pixel 7a) or a GSI build
