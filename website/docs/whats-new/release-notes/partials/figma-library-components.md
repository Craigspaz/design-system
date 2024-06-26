<!--
 Copyright (c) HashiCorp, Inc.
 SPDX-License-Identifier: MPL-2.0
-->

<!-- THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. -->

## Components library

<p class="doc-whats-new-changelog-figma-library">
  <strong>Figma library: <a href="https://www.figma.com/file/noyY6dUMDYjmySpHcMjhkN/HDS-Product---Components?type=design&node-id=6790-10926&mode=design&t=Ps0aMGZ6F3z7bAJ4-0" target="_blank" rel="noopener noreferrer">HDS Product - Components</a></strong>
</p>


### February 27th, 2024

#### Breaking changes

`Alert` and `Toast` - Updated the `StandaloneLink` to the secondary variant from the primary variant to align with our documented usage recommendations.

_Updating the `StandaloneLink` to the secondary variant will revert any changes you've made to the text and leading icon properties. Prior to updating the library we recommend annotating (with a comment or otherwise) work that is in progress or is still being referenced by engineering with the intended text and icon variant._

`Table` - multiple enhancements to the `Table` components including:

- Added support for multi-selection with `Header Column / Selection` and `Cell / Selection`.
- Added support for a `Tooltip` in the `Header Column` component.
- Updated the visual language of the sort button in `Header Column` by decoupling the sort functionality into a nested `Sort Button`

_Adding support for a `Tooltip` and updates to the `Sort Button` result in a breaking change in sortable variants. While the `Label` in the `Header Column` should persist, we recommend annotating (with a comment or otherwise) work that is in-progress or still being referenced by engineering with the columns that are intended to be sortable._

### January 24th, 2024

`IconTile` - Added Vault Radar logo.

### November 6th, 2023

`CodeBlock` - Added new component.

### November 3rd, 2023

`Breadcrumb` - Updated the number of `breadcrumb / _items` to the component.

### October 23rd, 2023

`Button` - Updated icon only button variants to be square to match the ToggleIcon.

`Dropdown / ToggleIcon` - Fixed the small variant so that it’s the correct size (28px height) to match the other small Buttons and ToggleButton.

### September 15th, 2023

`IconTile` and `IconTile-Logo` - Added a new product variant for Vault Secrets.

### August 17th, 2023

`SideNav` - Changed the icon from `User` to `Help` in the first dropdown at the top of the `SideNav`.

### July 31st, 2023

`Field/Date`, `Field/Time`, `Field/Datetime` - Fixed the default width of the components to match the browser default.

### July 13th, 2023

Added new components:

- `Accordion`
- `MaskedInput`

### July 12th, 2023

Added a “Form Primitives” page to house the `Fieldset` component.


---

_[Read the full changelog](https://github.com/hashicorp/design-system/blob/main/packages/components/CHANGELOG-FIGMA-COMPONENTS.md)_