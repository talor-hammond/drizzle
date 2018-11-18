// Utils:
import {
    getRandomInt,
    getRandomXValue,
    getRandomYValue
} from '../../../lib/utils'

// Global var:
const H = window.innerHeight
const W = window.innerWidth

class Raindrop {
    constructor(ctx, dx) {
        this.state = {
            x: getRandomXValue(),
            y: getRandomYValue(),
            l: getRandomInt(5, 15), // Length.
            dy: getRandomInt(10, 15), // Vertical velocity.
            dx, // Horizontal velocity; based on cursor-position.
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
        ctx.lineTo(x + dx, y + l) // TODO: Manipulate the x +- to get the feeling of wind or similar.
        ctx.stroke()

        this.move()
    }

    move() {
        const { dy, dx } = this.state

        this.state.x += dx
        this.state.y += dy

        const { x, y } = this.state

        if ( x > W) { // if the raindrop falls outside our window dimensions:
            this.state.x = 0
        } else if (y > H) {
            this.state.y = -20
        }
    }
}

export default Raindrop