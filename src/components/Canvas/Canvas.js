import React, { Component } from 'react'

// Styles:
import injectSheet from 'react-jss'
import styles from './CanvasStyles'

// Components / Objects:
import Raindrop from './Raindrop/Raindrop'

// Global vars:
const H = window.innerHeight
const W = window.innerWidth

class Canvas extends Component {
    constructor() {
        super()

        this.state = {
            ctx: null,
            dx: null,
            raindrops: []
        }

        this.handleMouseMove = this.handleMouseMove.bind(this)
    }

    componentDidMount() {
        console.log('firing')
        // Initialising canvas & context:
        const canvas = document.getElementById('canvas')
        const ctx = canvas.getContext('2d')

        this.setState({ ctx }, () => {
            const maxRaindrops = 1000
            let raindrops = []

            for (let i = 0; i < maxRaindrops; i++) {
                // Raindrop setup:
                const raindrop = new Raindrop(ctx)

                raindrops.push(raindrop)
            }

            this.setState({ raindrops }, () => {
                this.generateRaindrops()
            })
        })
    }

    calculateHorizontalVelocity(cursorPositionFromCenter) {
        // Splitting the screen-width horizontally, and then into 5 'section' values:
        const section = W / 2 / 5

        switch (true) {
            // Cursor left-of-center:
            case ((-section * 5) > cursorPositionFromCenter):
                return -5
            case ((-section * 4) > cursorPositionFromCenter):
                return -4
            case ((-section * 3) > cursorPositionFromCenter):
                return -3
            case ((-section * 2) > cursorPositionFromCenter):
                return -2
            case (-section > cursorPositionFromCenter):
                return -1

            // Cursor right-of-center:
            case (section > cursorPositionFromCenter):
                return 1
            case ((section * 2) > cursorPositionFromCenter):
                return 2
            case ((section * 3) > cursorPositionFromCenter):
                return 3
            case ((section * 4) > cursorPositionFromCenter):
                return 4
            case ((section * 5) > cursorPositionFromCenter):
                return 5
            default:
                return 0
        }
    }

    handleMouseMove(e) {
        const cursorPositionFromCenter = e.clientX - W / 2

        const dx = this.calculateHorizontalVelocity(cursorPositionFromCenter)

        this.setState({ dx }, () => {
            this.state.raindrops.forEach(raindrop => {
                raindrop.state.dx = this.state.dx
            })
        })
    }

    generateRaindrops() {
        const { ctx, raindrops } = this.state

        function animate() {
            requestAnimationFrame(animate)

            ctx.clearRect(0, 0, W, H) // ...clears the canvas before .draw() on every raindrop.

            raindrops.forEach(raindrop => {
                raindrop.draw() // ...subsequently iterates our raindrop state
            })
        }

        animate()
    }

    render() {
        const { mainContainer, canvas, input } = this.props.classes

        return (
            <div className={mainContainer}>
                <canvas
                    id="canvas"
                    className={canvas}
                    width={W}
                    height={H}
                    onMouseMove={(e) => this.handleMouseMove(e)}
                >
                </canvas>

                {/* <div className={input}>
                    <input type='text' placeholder='how many raindrops would u like' />
                </div> */}
            </div>
        )
    }
}

export default injectSheet(styles)(Canvas)