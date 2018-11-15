function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateRgbColor() {
    const r = getRandomInt(0, 255)
    const g = getRandomInt(0, 255)
    const b = getRandomInt(0, 255)

    return `rgb(${r}, ${g}, ${b})`
}

const styles = {
    canvas: {
        backgroundColor: generateRgbColor(),
        height: '100vh',
        width: '100vw'
    }
}

export default styles