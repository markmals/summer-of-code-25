---
id: SOC-0005
title: Create Macros to Customize Swift.Codable
size: 1 week
difficulty: Easy
---

# {{ $frontmatter.id }}: Create Macros to Customize `Swift.Codable`

**Project size**: 1 week

**Estimated difficulty**: Easy

### Recommended Skills

- Proficiency in Swift
- Familiarity with SwiftSyntax & Swift macros

### Description

[`Swift.Codable`](https://developer.apple.com/documentation/swift/codable) provides great built-in functionality for encoding and decoding native Swift types to and from just about any format, but it can be quite ridgid and difficult to customize. Now that Swift has a compile-time macro system, we can use macros to customize `Codable` and provide easy-to-use, declarative API on top of the actual `Codable` APIs. We can model these macros after the macros in the popular Rust serialization/deserialization crate [`Serde`](https://serde.rs):

```swift [CodableMacros.swift]
// Encode and decode this field with the given name/key path instead of its Swift name
@Keyed(as: String)
@Keyed(forEncoding: String)
@Keyed(forDecoding: String)
@Keyed(forEncoding: String, decoding: String)

// Can use key paths:
@Keyed(as: "movie.poster.image")
var image: URL

// Decode this field from the given name (`named`) or from its Swift name
@Alias(named: String)

// If the value is not present when decoding, use the given default value
@Default(value: T)

// Flatten the contents of this property up into its parent type during encoding
@Flatten

// Skip this field: do not encode or decode it
@Skip(_: .encoding) // Skip this field when encoding, but not when decoding
@Skip(_: .decoding) // Skip this field when decoding, but not when encoding

@Skip(withDefault: T)

// Call a function to determine whether to skip encoding or decoding this field
@Skip(if: (T) -> Bool)
@Skip(_: .encoding, if: (T) -> Bool)
@Skip(_: .decoding, if: (T) -> Bool)

// Custom coding:
@Encode<E: Encoder>(with fn: (T, E) -> Result<T, Error>)
@Decode<D: Decoder>(with fn: (T, D) -> Result<T, Error>)
@Coding<E: Encoder, D: Decoder>(with fn: (T, E, D) -> Result<T, Error>)

// Convert to the expected Swift type from an expected Source type
@Lossless // Automatically coerce Source types to their expected Swift type
@Lossy // Essentially calls "compactMap" on arrays and dictionaries, removing null values
@Transform(from: Any.Type) // throws if the Source type does not match `from`
// Default behavior: throws if the Source type does not match the Swift type

// Customize the date encoding/decoding strategy
@DateStrategy(.iso8601)
// Customize the data encoding/decoding strategy
@DataStrategy(.base64)
// Customize the nonconforming floating-point number encoding/decoding strategy
@NonConformingFloatStrategy(
    .convertFromString(
        positiveInfinity: String,
        negativeInfinity: String,
        nan: String
    )
)
```

I found a few existing libraries that use Swift macros to customize Codable in one way or another ([1](https://github.com/SwiftyLab/MetaCodable), [2](https://github.com/mikhailmaslo/macro-codable-kit), [3](https://github.com/zijievv/CodingKeysGenerator), [4](https://github.com/neothXT/CodableOptionSet), [5](https://github.com/GottaGetSwifty/CodableWrappers)), but they don't have all the functionality outlined above. There are a few property wrapper libraries out there that customize Codable too ([1](https://github.com/GottaGetSwifty/CodableWrappers), [2](https://github.com/marksands/BetterCodable), [3](https://github.com/dscyrescotti/CodableX)), but they also do not have the full functionality described above.

### Expected Results

- Swift package with macros and any necessary runtime support
- Example iOS app showing usage of the macros
- DocC documentation hosted on the [Swift Package Index](https://swiftpackageindex.com/faq#documentation)

### Prior Art

- [Codextended](https://github.com/JohnSundell/Codextended)
- [CodableOptionSet](https://github.com/neothXT/CodableOptionSet)
- [BetterCodable](https://github.com/marksands/BetterCodable)
- [CodableWrappers](https://github.com/GottaGetSwifty/CodableWrappers)
- [CodableX](https://github.com/dscyrescotti/CodableX)
