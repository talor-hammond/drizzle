class Raindrop {
    constructor(x, y, l, dy, dx, ctx) {
        this.state = {
            x,
            y,
            l,
            dy,
            dx,
            ctx // Our canvas-context obj passed through.
        }
    }
        
    draw() {
        const { x, y, l, ctx } = this.state

        ctx.beginPath()
        ctx.moveTo(x, y) // Starting x and y for our line.
        ctx.lineTo(x, y + l) // TODO: Manipulate the x +- to get the feeling of wind or similar.
        ctx.stroke()
    }

    animate() {
        this.state.y += this.state.dy // ...y state is updated before Raindrop.draw()
        this.state.x += this.state.dx

        this.draw()
    }
}

export default Raindrop