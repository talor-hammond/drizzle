class Raindrop {
    constructor(x, y, rad, dy, ctx) {
        this.state = {
            x,
            y,
            rad,
            dy, // Vertical velocity.
            ctx
        }
        
        this.animate = this.animate.bind(this)
    }

    draw() {
        const { x, y, rad, ctx } = this.state

        ctx.beginPath()
        ctx.arc(x, y, rad, 0, Math.PI * 2)
        ctx.stroke()
    }

    update() {
        this.state.y += this.state.dy // ...y state is updated before Raindrop.draw()

        this.draw()
    }

    animate() {
        const { ctx } = this.state

        requestAnimationFrame(this.animate)

        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

        this.update()
    }
}

export default Raindrop