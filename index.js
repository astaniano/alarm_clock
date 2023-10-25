const time = document.getElementById('time')
const info = document.getElementById('info')
// const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const audio = document.getElementById('audio')

// startBtn.addEventListener('click', () => {
//     info.innerText = `waiting for the specified time`
// })

setInterval(() => {
    const currentTime = new Date().toString();
    const currentHourAndMins = currentTime.slice(16, 21)
    info.innerText = `last time check was at: ${currentTime})`

    if (currentHourAndMins === time.value) {
        audio.play()
    }
}, 59000)

stopBtn.addEventListener('click', () => {
    audio.pause()
})
