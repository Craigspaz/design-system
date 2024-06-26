<!--
 Copyright (c) HashiCorp, Inc.
 SPDX-License-Identifier: MPL-2.0
-->

<!-- THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. -->

<p class="doc-whats-new-changelog-npm-info">
  <strong><code>npm package: @hashicorp/ember-flight-icons</code></strong>
  <a href="https://badge.fury.io/js/%40hashicorp%2Fember-flight-icons">
    <img src="https://badge.fury.io/js/%40hashicorp%2Fember-flight-icons.svg" alt="npm version" height="20">
  </a>
</p>

## 5.0.3

**Patch changes**

**🔄 Updated dependencies:**

- @hashicorp/flight-icons@3.3.0

## 5.0.2

**Patch changes**

`FlightIcon` component - Removed initial whitespace (newline) from template

<small class="doc-whats-new-changelog-metadata">[#2049](https://github.com/hashicorp/design-system/pull/2049)</small>

<div class="doc-whats-new-changelog-separator"></div>

**🔄 Updated dependencies:**

- @hashicorp/flight-icons@3.2.0

## 5.0.1

**Patch changes**

**🔄 Updated dependencies:**

- @hashicorp/flight-icons@3.1.0

## 5.0.0

**Major changes**

Converted Ember packages to v2 addon format.

To migrate update Sass configuration in `ember-cli-build.js` to include the paths for `ember-flight-icons` and `design-system-components`:

```js
sassOptions: {
  precision: 4,
  includePaths: [
    './node_modules/@hashicorp/design-system-tokens/dist/products/css',
    './node_modules/@hashicorp/ember-flight-icons/dist/styles',
    './node_modules/@hashicorp/design-system-components/dist/styles',
  ],
},
```

Alternatively, you can import the CSS by adding this configuration in `ember-cli-build.js`.

```js
app.import(
  "node_modules/@hashicorp/design-system-components/dist/styles/@hashicorp/design-system-components.css"
);
```

<small class="doc-whats-new-changelog-metadata">[#1872](https://github.com/hashicorp/design-system/pull/1872)</small>

<div class="doc-whats-new-changelog-separator"></div>

## 4.1.0

**Minor changes**

_Since this is an update brand colors and product icons, we consider this a `minor` version release_

Improved resilience of SVG sprite loading script

<small class="doc-whats-new-changelog-metadata">[#1920](https://github.com/hashicorp/design-system/pull/1920)</small>

<div class="doc-whats-new-changelog-separator"></div>

**🔄 Updated dependencies:**

- @hashicorp/flight-icons@3.0.0

## 4.0.6

**Patch changes**

remove unused `contextRootURL` function

<small class="doc-whats-new-changelog-metadata">[#1900](https://github.com/hashicorp/design-system/pull/1900)</small>

<div class="doc-whats-new-changelog-separator"></div>

**🔄 Updated dependencies:**

- @hashicorp/flight-icons@2.25.0

## 4.0.5

**Patch changes**

**🔄 Updated dependencies:**

- @hashicorp/flight-icons@2.24.0

## 4.0.4

**Patch changes**

When `lazyEmbed` is true, use dynamic `import()` to bundle the sprite separately

<small class="doc-whats-new-changelog-metadata">[#1803](https://github.com/hashicorp/design-system/pull/1803) - Thanks [@meirish](https://github.com/meirish) for the contribution! 🙏</small>

<div class="doc-whats-new-changelog-separator"></div>

**🔄 Updated dependencies:**

- @hashicorp/flight-icons@2.23.0

## 4.0.3

**Patch changes**

**🔄 Updated dependencies:**

- @hashicorp/flight-icons@2.22.0

## 4.0.2

**Patch changes**

Upgraded the following dependencies:

- `ember-cli-babel` from `7.26.11` to `8.2.0`

<small class="doc-whats-new-changelog-metadata">[#1761](https://github.com/hashicorp/design-system/pull/1761)</small>

<div class="doc-whats-new-changelog-separator"></div>

Upgraded the following dependencies:

- `ember-cli-htmlbars` from `6.2.0` to `6.3.0`

<small class="doc-whats-new-changelog-metadata">[#1756](https://github.com/hashicorp/design-system/pull/1756)</small>

<div class="doc-whats-new-changelog-separator"></div>

**🔄 Updated dependencies:**

- @hashicorp/flight-icons@2.21.0

## 4.0.1

**Patch changes**

Added missing dependency on `ember-get-config`

<small class="doc-whats-new-changelog-metadata">[#1747](https://github.com/hashicorp/design-system/pull/1747)</small>

<div class="doc-whats-new-changelog-separator"></div>

## 4.0.0

**Major changes**

Drop support for Node 14

<small class="doc-whats-new-changelog-metadata">[#1634](https://github.com/hashicorp/design-system/pull/1634)</small>

<div class="doc-whats-new-changelog-separator"></div>

## 3.1.3

**Patch changes**

**🔄 Updated dependencies:**

- @hashicorp/flight-icons@2.20.0

## 3.1.2

**Patch changes**

**🔄 Updated dependencies:**

- @hashicorp/flight-icons@2.19.0

## 3.1.1

**Patch changes**

**🔄 Updated dependencies:**

- @hashicorp/flight-icons@2.18.0

## 3.1.0

**Minor changes**

Added opt in flag to allow consumers to move sprite loading out of index.html

<small class="doc-whats-new-changelog-metadata">[#1543](https://github.com/hashicorp/design-system/pull/1543)</small>

## 3.0.9

**Patch changes**

**🔄 Updated dependencies:**

- @hashicorp/flight-icons@2.17.0

## 3.0.8

**Patch changes**

**🔄 Updated dependencies:**

- @hashicorp/flight-icons@2.16.0

## 3.0.7

**Patch changes**

**🔄 Updated dependencies:**

- @hashicorp/flight-icons@2.15.0

## 3.0.6

**Patch changes**

Upgraded Ember.js to latest stable release 4.12, including upgrades to:

- `ember-auto-import` from `2.6.0` to `2.6.3`
- `ember-cli-htmlbars` from `6.1.0` to `6.2.0`

Upgraded the following dependencies:

- `ember-focus-trap` from `1.0.1` to `1.0.2`
- `ember-keyboard"` from `8.1.0` to `8.2.0`
- `ember-truth-helpers` from `3.0.0` to `3.1.1`
- `sass` from `1.58.3` to `1.62.1`

Shifted our supported version of Node.js from `12.* || 14.* || >= 16` to `14.* || 16.* || >= 18`

**🔄 Updated dependencies:**

- @hashicorp/flight-icons@2.14.0

<small class="doc-whats-new-changelog-metadata">[#1395](https://github.com/hashicorp/design-system/pull/1395)</small>


---

_[Read the full changelog](https://github.com/hashicorp/design-system/blob/main/packages/ember-flight-icons/CHANGELOG.md)_