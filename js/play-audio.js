const buttons = document.querySelectorAll('.key')
var currentSong = null

const keyboard = [
    { key: 'q', id: 'key_pom'},
    { key: 'w', id: 'key_clap'},
    { key: 'e', id: 'key_tim'},
    { key: 'a', id: 'key_puff'},
    { key: 's', id: 'key_splash'},
    { key: 'd', id: 'key_toim'},
    { key: 'z', id: 'key_psh'},
    { key: 'x', id: 'key_tic'},
    { key: 'c', id: 'key_tom'},
]

function playSound(button) {
    const button_id = button.id
    const sound = document.querySelector(`#audio_${ button_id }`)
    if (currentSong !== button_id) {
        sound.play()
    } else {
        sound.pause()
        sound.currentTime = 0
        sound.play()
    }
    currentSong = button_id
}

function keyboardClick(key) {
    const button_id = key.id
    const button = document.querySelector(`#${ button_id }`)
    button.click()
    button.classList.add('active')
    setTimeout(() => button.classList.remove('active'), 200)
}

buttons.forEach(button => (
    button.addEventListener('click', () => {
        playSound(button)
    })
))

document.addEventListener('keydown', e => {
    keyboard.forEach(key => {
        if (e.key === key.key) {
            keyboardClick(key)
        }
    })
})
