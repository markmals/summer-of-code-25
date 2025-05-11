---
id: SOC-0011
title: Create a Multiplatform ORM for Swift Utilizing Macros
size: 2 weeks
difficulty: Intermediate
---

# {{ $frontmatter.id }}: {{ $frontmatter.title }}

**Project size**: 2 weeks

**Estimated difficulty**: Intermediate

### Recommended Skills

- Proficency with Swift
- Experience with Swift macros

### Description

Maybe it could look something like this:

::: code-group

```swift [MyModel.swift]
import SwiftDB

// Uses Swift.Observation under the hood for change detection.

@Model
class Author {
    @Attribute(.primaryKey) var id: UInt
    @Attribute(.unique) var name: String
}

@Model
class Comment {
    @Attribute(.primaryKey) var id: UInt
    var body: String
    var likes: UInt
    var isFlagged: Bool
    var published: Date
    var authorID: UInt

    @References(\Author.id)
    var authorID: UInt?

    @Transient var placeholderImage = Faker.image()
}

import SQLite
// import Postgres
// import MySQL
// import MongoDB

let client = SQLiteClient(configuration: config)
//           PostgresClient(configuration: config)
//           MySQLClient(configuration: config)
//           MongoClient(configuration: config)

let configuration = Database.Configuration(
    syncProvider: CommentSyncDistributedActor.self,
    // other options...
)

let db = Database(
    for: client,
    configuration: configuration,
    schema: [Author.self, Comment.self]
)
```

```swift [Comments.swift]
import SwiftDB

let comment = Comment(
    body: body,
    likes: likes,
    isFlagged: isFlagged,
    published: published,
    authorID: authorID
)

await db.insert(comment)

var popularComments = FetchDescriptor<Comment>(
    predicate: #Predicate { $0.likes >= 50 },
    sortBy: [.init(\.published)]
)

popularComments.fetchLimit = 50
popularComments.includePendingChanges = true

let results = await db.fetch(popularComments)
```

```swift [MyApp.swift]
import SwiftUI
import SwiftDB

@main
struct FeedsApp: App {
    var content: some Scene {
        WindowGroup {
            MainView().environment(db)
        }
    }
}

struct MainView: View {
    @Environment(\.db) private var db

    @Query(sort: \.published, order: .reverse)
    var allComments: [Comment]

    var content: some View {
        List {
            ForEach(allComments) { comment in
                CommentView(for: comment)
            }
        }
    }
}
```

:::

### Expected Results

- Backend-agnostic [SwiftData](https://developer.apple.com/xcode/swiftdata) API clone
  - Use with any database on any platform

#### Stretch Goals

- Syncing engines work with iCloud or any other sync provider (or even custom syncing to a remote database via a REST API) by writing a custom sync adapter
