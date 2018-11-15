import React, { Component } from 'react'

// Styles:
import injectSheet from 'react-jss'
import styles from './CanvasStyles'

class Canvas extends Component {
    state = {
        canvas: null,
        context: null,
        x: 0,
        y: 0
    }

    componentDidMount() {
        // Initialising canvas & context:
        const canvas = document.getElementById('canvas')
        const context = canvas.getContext('2d')

        this.setState({ canvas, context })
    }
    
    createStars() {

    }

    _onMouseMove(e) {
        const x = e.clientX
        const y = e.clientY
        
        this.setState({ x, y })
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
                onMouseMove={this._onMouseMove.bind(this)}
                onMouseDown={this._onMouseDown.bind(this)}
            >
                
            </canvas>
        )
    }
}

export default injectSheet(styles)(Canvas)