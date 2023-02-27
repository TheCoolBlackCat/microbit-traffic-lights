function stop () {
    setLights(0, 1, 0, oneSec)
    clear()
    setLights(1, 0, 0, redTime)
}
input.onButtonPressed(Button.A, function () {
    isPuffin = !(isPuffin)
})
function puffinGo () {
    setLights(1, 1, 0, oneSec)
    setLights(0, 0, 1, greenTime)
}
function clear () {
    setLights(0, 0, 0, 0)
}
function setLights (R: number, A: number, G: number, delay: number) {
    pins.digitalWritePin(DigitalPin.P0, R)
    pins.digitalWritePin(DigitalPin.P1, A)
    pins.digitalWritePin(DigitalPin.P2, G)
    basic.pause(delay)
}
function pellicanGo () {
    setLights(1, 0, 0, oneSec)
    setLights(0, 0, 0, oneSec)
    for (let index = 0; index < 5; index++) {
        setLights(0, 1, 0, 500)
        setLights(0, 0, 0, 500)
    }
    setLights(0, 0, 1, greenTime)
}
let redTime = 0
let greenTime = 0
let oneSec = 0
let isPuffin = false
basic.showIcon(IconNames.Happy)
isPuffin = true
oneSec = 1000
greenTime = 4000
redTime = 5000
basic.forever(function () {
    if (isPuffin) {
        puffinGo()
    } else {
        pellicanGo()
    }
    stop()
    clear()
})
