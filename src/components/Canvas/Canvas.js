import React, { Component } from 'react'

// Styles:
import injectSheet from 'react-jss'
import styles from './CanvasStyles'

class Canvas extends Component {
    state = {
        ctx: null,
        mouseX: 0,
        mouseY: 0
    }

    componentDidMount() {
        // Initialising canvas & context:
        const canvas = document.getElementById('canvas')
        const ctx = canvas.getContext('2d')

        this.setState({ ctx }, () => {
            // Drawing & animation on our canvas:
            this.createStars()
        })
    }
    
    createStars() {
        const { ctx } = this.state

        ctx.fillRect(0, 0, 100, 100)
        ctx.fillRect(100, 100, 100, 100)
        ctx.fillRect(200, 200, 100, 100)
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