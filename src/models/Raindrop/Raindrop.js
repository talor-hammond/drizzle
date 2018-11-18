// Utils:
import {
    getRandomInt,
    getRandomXValue,
    getRandomYValue
} from '../../lib/utils'

// Global var:
const H = window.innerHeight
const W = window.innerWidth

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
        
    draw() { // ...the shape of our Raindrop object.
        const { x, y, l, dx, ctx } = this.state

        ctx.strokeStyle = `rgba(174, 194, 224, ${getRandomInt(0.25, 0.85)})`
        ctx.lineWidth = 1
        ctx.lineCap = 'round'

        ctx.beginPath()
        ctx.moveTo(x, y) // Starting x and y for our line.
        ctx.lineTo(x + dx, y + l) // dx is based on relative mouse-position; gives the effect of directional raindrops.
        ctx.stroke()

        this.move()
    }

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
}

export default Raindrop