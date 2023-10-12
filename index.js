const time = document.getElementById('time')
const info = document.getElementById('info')
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')

let oscillator;

startBtn.addEventListener('click', () => {
    const context = new AudioContext()

    oscillator = context.createOscillator()
    oscillator.type = "sine"
    oscillator.frequency.value = 800
    oscillator.connect(context.destination)

    info.innerText = 'waiting for the specified time'
})

let isOscillatorStarted = false

setInterval(() => {
    const currentTime = new Date()
    const currentHourAndMins = currentTime.toString().slice(16, 21)

    if (currentHourAndMins === time.value && !isOscillatorStarted && oscillator) {
        oscillator.start()
        isOscillatorStarted = true
    }
}, 59000)

stopBtn.addEventListener('click', () => {
    if (oscillator && isOscillatorStarted) {
        oscillator.stop()
        info.innerText = 'stopped'
    }
})