---
id: SOC-0031
title: Build Native Apps using the Deno TypeScript Runtime
size: 3 months
difficulty: Hard
---

# {{ $frontmatter.id }}: {{ $frontmatter.title }}

**Project size**: 3 months

**Estimated difficulty**: Hard

### Recommended Skills

- Proficiency with Deno and TypeScript
- Experience using FFI to bridge between JavaScript runtimes and native libraries
- Familiarity with iOS development (UIKit, Xcode toolchain, code signing)
- Understanding of custom renderer architectures (React, Solid, Vue, or Angular host configs)
- Knowledge of JavaScript engines (V8 and QuickJS)

### Description

This project will bring the Deno runtime to native iOS application development. It begins by cross-compiling Deno for arm64 iOS and embedding it into an Xcode project. You’ll then use Deno’s FFI API to invoke UIKit and render a centered “Hello World!” UILabel at app launch. Building on that demo, you’ll design and implement a custom renderer (e.g. React) that maps framework primitives (`<View>`, `<Text>`, `<Button>`) directly to UIKit components via FFI. If mobile performance proves challenging, you’ll add a macOS “Deno Native” fallback mode. Finally, you’ll prototype swapping V8 for QuickJS in the Deno binary to evaluate startup time and bundle size improvements on iOS.

### Expected Results

- A cross-compiled Deno binary for iOS (arm64) with build and packaging scripts
- An VS Code sample app that uses Deno FFI to display a “Hello World!” UILabel
- A published custom renderer package (e.g. `deno-react-renderer-ios`) exposing core native components

#### Stretch Goals

- Hot-reload over a development WebSocket bridge
- Desktop fallback support on macOS using the same renderer API
- Sample apps for iPadOS, Mac Catalyst, tvOS, and visionOS
- VS Code extension for streamlined renderer development and Deno deployment
- A QuickJS-powered Deno prototype and a comparative performance report
