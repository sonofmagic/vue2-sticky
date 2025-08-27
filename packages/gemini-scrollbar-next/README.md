# gemini-scrollbar-next

Custom overlay-scrollbars with native scrolling mechanism for web applications (if needed).

_There is a **React** wrapper too — [react-gemini-scrollbar-next](https://github.com/noeldelgado/react-gemini-scrollbar-next)._

###### Problem Description

Nowadays, some OS’s provides “overlay-scrollbars” natively. Those scrollbars look nice and work well (mostly mobile browsers and OSX opt-in). The problem came when you have to customize the remaining ‘ugly’ scrollbars out there. e.g: “_having a sidebar with a dark background + native-**non-floating**-scrollbars_” ...hum, ugly. Even when this problem can be merely visual, for me is a way of enhancing the user experience.

###### Constraints

- Fallbacks to use the native scrollbars when the OS/browser supports “overlay-scrollbars”.
- Mimics the scrollbar behaviour when replaced with the custom ones (click, drag...).
- IE9+ support.

###### Solution Proposal

Check the scrollbar size. If the scrollbar size is zero (which means the scrollbars are already “over the content”) then we **do nothing**. Otherwise we simply “hide” native scrollbar and show custom in its place.

## Demo

https://noeldelgado.github.io/gemini-scrollbar-next/

## Dependencies

None

## Installation

**NPM**

```sh
npm i gemini-scrollbar-next --save
```

**Bower**

```sh
bower install gemini-scrollbar-next --save
```

## Usage

**JS**

```js
let GeminiScrollbar = require('gemini-scrollbar-next')

let myScrollbar = new GeminiScrollbar({
  element: document.querySelector('.my-scrollbar')
}).create()
```

**LESS**

```less
@import (inline) '<path-to-gemini-scrollbar-next>/style.css';
```

**CSS**

```css
@import url(<path-to-gemini-scrollbar-next>/style.css);
```

Or, you can add the relevant files in your document.

```html
<link href="<path-to-gemini-scrollbar-next>/style.css" rel="stylesheet" />
<script src="<path-to-gemini-scrollbar-next>/index.js"></script>
```

## Options

| name           | type          | default | description                                                                                      |
| :------------- | :------------ | :------ | :----------------------------------------------------------------------------------------------- |
| **element \*** | HTMLElement   | `null`  | The element to apply scrollbars                                                                  |
| autoshow       | Boolean       | `false` | Show scrollbars upon hovering                                                                    |
| createElements | Boolean       | `true`  | Create and append the require HTMLElements at runtime.                                           |
| forceGemini    | Boolean       | `false` | Force Gemini scrollbars even if native overlay-scrollbars are available. Useful for development. |
| onResize       | Function      | `null`  | Hook by which clients can be notified of resize events.                                          |
| minThumbSize   | Number `(px)` | `20`    | Sets the minimum size of the thumbs.                                                             |

\* `required`

## Basic Methods

| name    | description                                                               |
| :------ | :------------------------------------------------------------------------ |
| create  | Bind the events, create the required elements and display the scrollbars. |
| update  | Recalculate the viewbox and scrollbar dimensions.                         |
| destroy | Unbind the events and remove the custom scrollbar elements.               |

## Other Mehods

| name           | description                    |
| :------------- | :----------------------------- |
| getViewElement | Returns the scrollable element |

## Customization

You can change the styles of the scrollbars using CSS. e.g:

```css
/* override gemini-scrollbar-next default styles */

/* vertical scrollbar track */
.gm-scrollbar.-vertical {
  background-color: #f0f0f0;
}

/* horizontal scrollbar track */
.gm-scrollbar.-horizontal {
  background-color: transparent;
}

/* scrollbar thumb */
.gm-scrollbar .thumb {
  background-color: rebeccapurple;
}
.gm-scrollbar .thumb:hover {
  background-color: fuchsia;
}
```

## Notes

- **native overlay-scrollbar:** We check the scrollbar size [using this approach](http://davidwalsh.name/detect-scrollbar-width) by David Walsh. If the scrollbar size is zero (which means the scrollbars are “over the content”) then we do nothing but add the `gm-prevented` class selector to the element, which contains the non-standard `-webkit-overflow-scrolling: touch;` declaration for web devices to use momentum-based scrolling. No event binding, element creation... nothing, in this case, we leave the OS/browser do its job. Why? you already have nice looking scrollbars for free.
- **::-webkit-scrollbar:** If you plan to use gemini-scrollbar-next on your application I highly recommend you removing any Webkit scrollbar styles you may have, why? using the `-webkit-` prefixed pseudo-elements will cause Webkit turning off its built-in scrollbar rendering, interfering with our scrollbar-size-check. You can read a bit more about this issue on [this commit](../../issues/1).
- **create method:** The custom scrollbars will **not** render until you call the `create` method on the instance. i.e: `myScrollbar.create();`
- **required height:** To avoid unexpected results, it is recommended that you specify the `height` property with a value to the element you applying the custom scrollbars (or to its parent).
- **body tag:** If you want to apply custom scrollbars to `body`, make sure to declare a `height` value either to the `:root` pseudo-class or to the `html` element. e.g:

  ```css
  html {
    height: 100%;
    /* or */
    height: 100vh;
    overflow: hidden;
  }
  ```

- **createElements option:** The `createElements` option specify wheater or not gemini-scrollbar-next should create and append the require HTMLElements at runtime. Its default value is `true`. Passing this option as `false` will assume that you to have added the required markup with the specific CSS class selectors on them for it to work. i.e:

  ```html
  <!-- (createElements: false) example markup -->

  <div class="something-scrollable">
    <div class="gm-scrollbar -vertical">
      <div class="thumb"></div>
    </div>
    <div class="gm-scrollbar -horizontal">
      <div class="thumb"></div>
    </div>
    <div class="gm-scroll-view">All your content goes here.</div>
  </div>
  ```

This way you can be sure the library will not touch/change your nodes structure. You can read more about the reason of this option [on this commit](https://github.com/noeldelgado/gemini-scrollbar-next/commit/2bb73c82f9d1588fb267fba08518adfe1170885c).

## Related

- [react-gemini-scrollbar-next](https://github.com/noeldelgado/react-gemini-scrollbar-next) - React wrapper

## License

MIT © [Noel Delgado](http://pixelia.me/)
