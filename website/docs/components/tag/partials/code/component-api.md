Here is the API for the component:

<Doc::ComponentApi as |C|>
  <C.Property @name="text" @type="string">
    The text of the tag; or link text when the `@route` or `@href` are set. _If no text value is defined an error will be thrown._
  </C.Property>
  <C.Property @name="href">
    This is the URL parameter that is passed down to the `<a>` element.
  </C.Property>
  <C.Property @name="isHrefExternal" @type="boolean">
    This controls if the `<a>` link is external and so for security reasons we need to add the `target="_blank"` and `rel="noopener noreferrer"` attributes to it.
  </C.Property>
  <C.Property @name="route models model query current-when replace">
    These are the parameters that are passed down as arguments to the `<LinkTo>` / `<LinkToExternal>` components.
  </C.Property>
  <C.Property @name="isRouteExternal" @type="boolean">
    This controls if the "LinkTo" is external to the Ember engine ([more details here](https://ember-engines.com/docs/link-to-external)) in which case it will use a `<LinkToExternal>` instead of a simple `<LinkTo>` for the @route.
  </C.Property>
  <C.Property @name="color" @type="enum" @value="primary, secondary" @default="primary">
    Sets the color of a link and it is allowed only when `@route` or `@href` are set.
  </C.Property>
  <C.Property @name="onDismiss" @type="function">
    The tag can be dismissed by the user. When a function is passed, the "dismiss" button is displayed.
  </C.Property>
  <C.Property @name="...attributes">
    `...attributes` spreading is supported on this component.
  </C.Property>
</Doc::ComponentApi>