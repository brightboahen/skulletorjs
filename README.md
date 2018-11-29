# SkeletorJS

## Motivation

Skeletor is a Javascript library that allow you to ease your skeleton loading screen creation.
It use predefined shapes you can configure and compose to create more complex skeleton.

The created skeletons are CSS based, Skeletor also provide control capabilites such as restart, end, disapear (related to fadeout).

### Simple example

This basic script produce a vanilla javascript skeleton.
Easy to create, it simply use some base shapes and append the result to the DOM.

```javascript
const bluePrint = () => [
  {
    width: [35, '%'],
    height: [365, 'px'],
  },
  circle({
    radius: 35,
    left: 15,
    top: 15,
    color: { r: 255, g: 255, b: 255, a: 1 },
  }),
  rectangle({ height: [185, 'px'] }),
  line({ fontSize: 22, width: [180, 'px'], topGap: 20, left: 20 }),
  line({ fontSize: 22, width: [120, 'px'], topGap: 20, left: 20 }),
  line({ fontSize: 36, width: [150, 'px'], topGap: 20, left: 20 }),
]

const { Skeletor } = skeletor([bluePrint(), bluePrint()], [applyBaseCSS])
const dom = document.getElementById('root')
dom.appendChild(Skeletor)
```

The result :
![enter image description here](https://raw.githubusercontent.com/axel-springer-kugawana/skeletor/master/doc/screen1.JPG)

## Installation

    npm install skeletorjs

## How to use ?

First of all, you need to choose between two adapter : VanillaJS or React adapter. It will define what kind of skeletor you're going to use, but the call is still the same.

**Vanilla adapter :**

```javascript
import skeletor from 'skeletorjs/adapter/vanilla'

// Here, 'Skeletor' is a domNode ready to be injected inside the document ...
const { Skeletor } = skeletor([bluePrint()], [...middlewares])

dom.appendChild(Skeletor)
```

**React adapter :**

```javascript
import React from 'react'
import skeletor from 'skeletorjs/adapter/react'

// ... while here, 'Skeletor' is a react Component.
const { Skeletor } = skeletor([bluePrint()], [...middlewares])

ReactDOM.render(
  <div>
    <Skeletor />
  </div>,
  dom,
)
```
