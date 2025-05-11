---
id: SOC-0035
title: Prototype a YikYak Clone as an AT Protocol Service
size: 3 months
difficulty: Hard
---

# {{ $frontmatter.id }}: {{ $frontmatter.title }}

**Project size**: 3 months

**Estimated difficulty**: Hard

### Recommended Skills

- Proficiency in TypeScript and Node.js
- Familiarity with the AT Protocol and Bluesky ecosystem
- Experience with distributed systems and real-time messaging
- Knowledge of geospatial indexing and location-based services
- Experience with React (or another modern frontend framework)

### Description

Centralized “hyperlocal” networks like YikYak demonstrated the power — and pitfalls — of anonymous, location-based microblogging. This project will build a prototype of a YikYak-style service on top of AT Protocol, leveraging its distributed architecture to create a decentralized local feed. This project will:

1. **Implement an AT Protocol AppView and Lexicon** (e.g., [@atproto/server](https://github.com/bluesky-social/atproto)) that supports geotagged posts and local-radius queries.
2. **Implement privacy-preserving location handling**, allowing users to opt in/out of precise geotagging and to specify visibility radii.
3. **Build a client application** (web and mobile-responsive) that lets users post anonymously, browse nearby feeds, upvote/downvote, and flag content.
4. **Integrate real-time updates** via an AT Protocol Relay (`com.atproto.sync`) to deliver live local feed changes.
5. **Provide basic moderation tools**, such as on-chain content flagging and centralized review workflows via [Ozone](https://github.com/bluesky-social/ozone).

This hybrid approach — combining decentralized protocol work with a user-facing client — will explore the feasibility of ephemeral, location-aware social microblogging on a decentralized network.

### Expected Results

- An AT Protocol AppView server with:
  - Geotagged post schema and storage
  - Local feed query endpoints (e.g. posts within `x` km)
  - Opt-in privacy toggles for geolocation
- A client demonstrating:
  - Anonymous posting and browsing of local content
  - Real-time feed updates via push subscriptions
  - Upvote/downvote and flagging UI
- Automated tests covering server and client core features
- Deployment scripts and developer documentation

<!-- - Performance benchmarks for feed query latency and update propagation -->
