---
id: SOC-0033
title: Develop a Custom Food Feed for Bluesky
size: 3 months
difficulty: Intermediate
---

# {{ $frontmatter.id }}: {{ $frontmatter.title }}

**Project size**: 3 months

**Estimated difficulty**: Intermediate

### Recommended Skills

- Proficiency in TypeScript and Deno
- Familiarity with Bluesky’s AT Protocol and Jetstream
- Experience publishing libraries to the JavaScript Registry (JSR)
- Knowledge of content filtering and recommendation algorithms
- Experience deploying and scaling Deno apps on Fly.io

### Description

Bluesky’s decentralized social network offers open, federated content streams but lacks tailored feeds for niche interests like culinary content. This project will build a full‐stack pipeline to aggregate, filter, rank, and serve only food-related posts:

1. **Publish a Deno Jetstream client library** to JSR, enabling easy consumption of Bluesky feeds in Deno projects.
2. **Implement feed filters** that isolate recipes, restaurant reviews, cooking tips, and food photography.
3. **Design and apply sorting algorithms** to surface top posts by relevance, engagement metrics, and quality signals.
4. **Create a local test suite** to validate end-to-end functionality under varying load and data scenarios.
5. **Deploy the pipeline** on Fly.io with CI/CD, monitoring, and auto-scaling for reliable, real-time delivery.

By project end, food enthusiasts will enjoy a live, curated Bluesky feed showcasing the best culinary content from around the world.

### Expected Results

- **Published Deno Jetstream library** on JSR with comprehensive README and usage examples
- **Robust filter modules** that accurately detect and extract food-related posts
- **Ranking engine** with configurable scoring based on engagement and content quality
- **Local test harness** including sample scripts and automated tests
- **Fly.io deployment config** and documentation for continuous integration and scaling
- **Live custom feed endpoint** serving real-time, curated food content on Bluesky
