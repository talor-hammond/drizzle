import React, { Component } from 'react'
import injectSheet from 'react-jss'

const styles = {
    canvas: {
        backgroundColor: '#000',
        height: '100vh',
        width: '100vw'
    }
}

class Canvas extends Component {
    state = {
        x: 0,
        y: 0
    }

    _onMouseMove(e) {
        const x = e.clientX
        const y = e.clientY
        
        this.setState({
            x,
            y
        })
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