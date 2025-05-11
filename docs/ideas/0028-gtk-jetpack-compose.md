---
id: SOC-0028
title: Implement a Jetpack Compose Renderer for GTK 4
size: 3 months
difficulty: Hard
---

# {{ $frontmatter.id }}: {{ $frontmatter.title }}

**Project size**: 3 months

**Estimated difficulty**: Hard

## Recommended Skills

- Experience with Kotlin & Kotlin/Native
- Familiarity with Jetpack Compose runtime and compiler plug‑ins
- Knowledge of GTK 4, Libadwaita, and the GObject type system
- Competence in C/C++ interop, memory management, and build tooling (Gradle, Meson)
- Understanding of coroutine scheduling and UI main‑loop architectures
- Comfort with Linux development environments and debugging native code

## Description

Jetpack Compose for Desktop currently rasterises its widgets through Skia, so Linux applications miss out on GTK’s native look‑and‑feel, accessibility tree, and theming.

This project will create a [**Compose runtime renderer**](https://developer.android.com/reference/kotlin/androidx/compose/runtime/Applier) that maps composables directly to _real_ GTK 4 / Libadwaita widgets via the [`gtk‑kn`](https://gitlab.com/gtk-kn/gtk-kn) Kotlin/Native bindings.

Key tasks:

1. **Runtime glue**
   Implement `GtkNode`, `GtkWidgetApplier`, and a custom `MonotonicFrameClock` that schedule recomposition on the GTK main thread.
2. **Widget wrappers**
   Provide Compose‑style primitives (`Text`, `Button`, `Column`, `Row`, `TextField`, `Image`, `Window`) that delegate to their GTK/Adwaita counterparts while exposing the familiar Compose API.
3. **Tooling & distribution**
   Publish the renderer to Maven Central, add a Gradle template for new projects, and supply documentation so developers can `implementation("dev.compose:compose-gtk:★")` and start coding immediately.

With this renderer, a Kotlin snippet like:

```kt [main.kt]
Window("Compose GTK") {
    Column {
        Text("Hello Libadwaita")
        Button("Click Me") { /* ... */ }
    }
}
```

will yield a fully native Adwaita window indistinguishable from a C/Vala application.

## Expected Results

- A production‑ready `compose‑gtk` library (JVM + native artifacts)
- Core widget set with recomposition‑safe property updates
- Frame‑stable performance (≥60 FPS) on sampled list scrolling and layout stress tests
- Sample applications demonstrating state management, navigation, and theming with CSS
- CLI/Gradle plugin that scaffolds new projects and bundles resources

### Stretch Goals

- Libadwaita adaptive widgets and dark‑mode synchronisation
- Animation DSL backed by GTK frame clock
- Hot‑reload development server for instant iterative feedback
- IntelliJ/VS Code preview plug‑in showing live GTK renditions of composables
