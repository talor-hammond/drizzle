import {
    getRandomXValue,
    getRandomInt
} from '../../../lib/utils'

class Raindrop {
    constructor(x, y, rad, dy, ctx) {
        this.state = {
            x,
            y,
            rad,
            dy, // Vertical velocity.
            ctx
        }      
    }

    draw() {
        const { x, y, rad, ctx } = this.state

        ctx.beginPath()
        ctx.arc(x, y, rad, 0, Math.PI * 2)
        ctx.stroke()
    }

    update() {

    }
}

export default Raindrop