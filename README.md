# drizzle
Rain-simulator built w React, HTML5 `<canvas>`, and OOP-principles

![drizzle](https://media.giphy.com/media/2dhCrWF2EDVyrvyYb7/giphy.gif)

Here's an [interactive demo-page](https://raindrop.netlify.com/) -- try *moving your mouse* from left-to-right!

---

## How it works:

1. The rain-simulator works by creating instances of a `Raindrop` class once the DOM / our `canvas` has loaded; pushing these `Raindrop` objects into an array inside `<Canvas />` -- our parent component.

```jsx
componentDidMount() {
  // Initialising canvas & context:
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  this.setState({ ctx }, () => {
      let raindrops = []

      for (let i = 0; i < this.maxRaindrops; i++) {
          const raindrop = new Raindrop(ctx) // We need to pass a reference to our canvas context so it's available per raindrop.

          raindrops.push(raindrop)
      }

      this.setState({ raindrops }, () => {
          this.generateRaindrops()
      })
  })
}
```

* Our `raindrop` objects are instantiated with varying x & y positions, length, horizontal and vertical velocity, and our specific canvas-context:
```js
class Raindrop {
    constructor(ctx) {
        this.state = {
            x: getRandomXValue(),
            y: getRandomYValue(),
            l: getRandomInt(5, 15), // Length.
            dy: getRandomInt(10, 15), // Vertical velocity.
            dx: getRandomInt(-1, 1), // Horizontal velocity.
            ctx // Our canvas-context obj passed through.
        }
    }
    ...
}
```