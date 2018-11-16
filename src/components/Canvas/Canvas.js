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
            let raindrops = []

            for (let i = 0; i < 15; i++) {
                // Raindrop setup:
                const x = getRandomXValue()
                const y = 0
                const rad = getRandomInt(5, 15)
                const dy = getRandomInt(20, 25) // Vertical velocity; make this random.
                const dx = getRandomInt(0.5, 1)

                const raindrop = new Raindrop(x, y, rad, dy, dx, ctx)

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
            
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

            raindrops.forEach(raindrop => {
                raindrop.update()
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
                width={window.innerWidth}
                height={window.innerHeight}
                onMouseMove={(e) => this.handleMouseMove(e)}
            >

            </canvas>
        )
    }
}

export default injectSheet(styles)(Canvas)