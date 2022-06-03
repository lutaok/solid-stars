[![NPM Version](https://img.shields.io/npm/v/solid-stars)](https://www.npmjs.com/package/solid-stars)

Solid-stars provides a star rating component for [SolidJS](https://github.com/solidjs/solid).

## Installation

```sh
npm install solid-stars
```

## Usage

First things first you need to import the only component available:

```js
import { Stars } from 'solid-stars';
```

And then you can use it in your project like you normally would for a Component.

You can also configure some behaviours via props.
Here's the list:

- `style`: it accepts a `JSX.CSSProperties` object in which you can define the styles you want to override
- `initialValue`: if you want the component to have an initial value, you can pass it here as a `number`
- `maxRating`: a `number` that represents how many stars your component should have
- `disabled`: a `boolean` which, when set to `true`, prevent any user interaction with the component
- `onClick`: it's possible to retrieve the actual rating by passing a function that will be fired when a user clicks on a star.

## Known Issues

There are some limitations to the props which I will fix when I can:

- In the `style` props, if you pass `width`, `height` or `font-size`, the component will choose the greatest value. It doesn't work with percentages/em/rem or plain numbers, so I recommend to stick with `px` e.g `{ width: '100px', height: '40px' }`
- There are no error boundaries so if you pass values of different types from what's intended to have it could cause unexpected behaviours.
- No tests were made :pensive:
