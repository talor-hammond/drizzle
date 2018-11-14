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
    componentDidMount() {

    }

    render() {
        const { canvas } = this.props.classes

        return (
            <canvas id="canvas" className={canvas}>
                
            </canvas>
        )
    }
}

export default injectSheet(styles)(Canvas)