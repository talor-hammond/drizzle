import React, { Component } from 'react'

// Styles:
import injectSheet from 'react-jss'
import styles from './CanvasStyles'

// Utils:
import {
    getRandomXValue,
    // getRandomYValue
} from '../../lib/utils'

class Canvas extends Component {
    constructor() {
        super()

        this.state = {
            ctx: null,
            mouseX: 0,
            mouseY: 0
        }
    }

    componentDidMount() {
        // Initialising canvas & context:
        const canvas = document.getElementById('canvas')
        const ctx = canvas.getContext('2d')

        this.setState({ ctx }, () => {
            // Drawing & animation on our canvas:
            // this.createRecs()

            for (let i = 0; i < 30; i++) {
                this.generateRaindrop()
            }
        })
    }

    generateRaindrop = () => {
        const { ctx } = this.state
        
        let x = getRandomXValue()
        let y = 0
        const rad = Math.random() * (15 - 5) + 5
        
        function animate() {
            requestAnimationFrame(animate)

            ctx.clearRect(0, 0, window.innerWidth, window.innerWidth)
            
            ctx.beginPath()
            ctx.arc(x, y, rad, 0, Math.PI * 2)
            ctx.stroke()
            
            y += 1
        }

        animate()
    }

    _onMouseMove(e) {
        this.setState({ mouseX: e.clientX, mouseY: e.clientY })
    }

    _onMouseDown() {
        // Create an entity:

    }

    render() {
        const { canvas } = this.props.classes

        return (
            <canvas 
                id="canvas" 
                className={canvas}
                width={window.innerWidth}
                height={window.innerHeight}
                onMouseMove={this._onMouseMove.bind(this)}
                onMouseDown={this._onMouseDown.bind(this)}
            >
                
            </canvas>
        )
    }
}

export default injectSheet(styles)(Canvas)