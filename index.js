const time = document.getElementById('time')
const info = document.getElementById('info')
// const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const audio = document.getElementById('audio')

// startBtn.addEventListener('click', () => {
//     info.innerText = `waiting for the specified time`
// })

let intervalCount = 0;

setInterval(() => {
    const currentHourAndMins = new Date().toString().slice(16, 21)
    info.innerText = `waiting for the specified time (interval count: ${intervalCount})`

    if (currentHourAndMins === time.value) {
        audio.play()
    }

    intervalCount++
}, 59000)

stopBtn.addEventListener('click', () => {
    audio.pause()
})
