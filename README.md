# drizzle
Rain-simulator built w React, HTML5 `<canvas>`, and OOP-principles

![drizzle](https://media.giphy.com/media/2dhCrWF2EDVyrvyYb7/giphy.gif)

Here's an [interactive demo-page](https://raindrop.netlify.com/) -- try *moving your mouse* from left-to-right!

---

## How it works:

### The rain-simulator works by creating **instances of a `Raindrop` class** once the DOM / our `canvas` has loaded; pushing these `Raindrop` objects into an array inside `<Canvas />` -- our parent component.

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

### Our `raindrop` objects are instantiated with *varying* **x & y** positions, **length**, **horizontal** and **vertical velocity**, and our specific **canvas-context**:
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

### Each `raindrop` object has a `draw()` and a `move()` method:

> `draw()` is used to draw the shape of our `raindrop` on our canvas.

```js
draw() {
    const { x, y, l, dx, ctx } = this.state

    ctx.strokeStyle = `rgba(174, 194, 224, ${getRandomInt(0.25, 0.85)})` // Varying alpha values gives the effect of raindrops with different depths.
    ctx.lineWidth = 1
    ctx.lineCap = 'round'

    ctx.beginPath()
    ctx.moveTo(x, y) // Starting x and y for our line.
    ctx.lineTo(x + dx, y + l) // dx is based on relative mouse-position; gives the effect of directional raindrops.
    ctx.stroke()

    this.move()
}
```

> `move()` is used to update the state of the `raindrop`; *its **x & y***.

```js
move() {
    const { dy, dx } = this.state

    this.state.x += dx
    this.state.y += dy

    const { x, y } = this.state

    // Conditionals for x-position:
    if (x > W) { // ...raindrop falls off the right-edge of the canvas...
        this.state.x = 0
    } else if (x < 0) { // ...raindrop falls off the left-edge of the canvas...
        this.state.x = W
    }
    
    // Conditionals for y-position:
    if (y > H) { // ...raindrop goes below canvas...
        this.state.y = -20
    }
}
```