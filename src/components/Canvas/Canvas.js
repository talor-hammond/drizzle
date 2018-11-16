import React, { Component } from 'react'

// Styles:
import injectSheet from 'react-jss'
import styles from './CanvasStyles'

// Components / Objects:
import Raindrop from './Raindrop/Raindrop'

// Utils:
import {
    getRandomXValue,
    // getRandomYValue
    getRandomInt
} from '../../lib/utils'

// Global vars:
const H = window.innerHeight
const W = window.innerWidth

class Canvas extends Component {
    constructor() {
        super()

        this.state = {
            ctx: null,
            mouseX: 0,
            mouseY: 0,
            raindrops: []
        }

        this.handleMouseMove = this.handleMouseMove.bind(this)
    }

    componentDidMount() {
        // Initialising canvas & context:
        const canvas = document.getElementById('canvas')
        const ctx = canvas.getContext('2d')

        this.setState({ ctx }, () => {
            const maxRaindrops = 100
            let raindrops = []

            for (let i = 0; i < maxRaindrops; i++) {
                // Raindrop setup:
                const x = getRandomXValue()
                const y = 0 // Should begin at the top of our canvas.
                const l = getRandomInt(5, 15) // Our raindrop length.
                const dy = getRandomInt(15, 20) // Vertical velocity.
                const dx = getRandomInt(-1, 1) // Horizontal velocity.

                const raindrop = new Raindrop(x, y, l, dy, dx, ctx)

                raindrops.push(raindrop)
            }

            this.setState({ raindrops }, () => { // creating an array of 15 unique raindrop objects.
                this.animateRaindrops()
            })
        })
    }

    handleMouseMove(e) {
        this.setState({ mouseX: e.clientX, mouseY: e.clientY })
    }

    animateRaindrops() {
        const { ctx, raindrops } = this.state

        function animate() {
            requestAnimationFrame(animate)
            
            ctx.clearRect(0, 0, W, H)

            raindrops.forEach(raindrop => {
                raindrop.animate()
            })
        }

        animate()
    }

    render() {
        const { canvas } = this.props.classes

        return (
            <canvas
                id="canvas"
                className={canvas}
                width={W}
                height={H}
                onMouseMove={(e) => this.handleMouseMove(e)}
            >

            </canvas>
        )
    }
}

export default injectSheet(styles)(Canvas)