class Raindrop {
    constructor(x, y, rad, dy, dx, ctx) {
        this.state = {
            x,
            y,
            rad,
            dy, // Vertical velocity.
            dx, // Horizontal vel.
            ctx // Our canvas-context obj passed through.
        }
    }
        
    draw() {
        const { x, y, rad, ctx } = this.state

        ctx.beginPath()
        ctx.arc(x, y, rad, 0, Math.PI * 2)
        ctx.stroke()
    }

    update() {
        this.state.y += this.state.dy // ...y state is updated before Raindrop.draw()
        this.state.x += this.state.dx

        this.draw()
    }
}

export default Raindrop