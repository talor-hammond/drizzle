export function getRandomXValue() {
    return Math.random() * (window.innerWidth - 0) + 0;
}

export function getRandomYValue() {
    return Math.random() * (window.innerHeight - 0) + 0;
}

export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export function generateRgbColor() {
    const r = getRandomInt(0, 255)
    const g = getRandomInt(0, 255)
    const b = getRandomInt(0, 255)

    return `rgb(${r}, ${g}, ${b})`
}