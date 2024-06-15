//lógica do game 1

let correto = document.querySelector('#correto')
let errado = document.querySelectorAll('#err')
let check = document.querySelector('.levels .nivel:first-child')
let img_check = document.createElement('img')
let audio_correto = document.querySelector('#audio-correto')
let audio_erro = document.querySelector('#audio-erro')
img_check.src = '/svg/png/img-check.png'

correto.addEventListener('click', () => {
    setTimeout(() => {
        check.innerHTML= ''
       check.appendChild(img_check)
    }, 2000)
    setTimeout(() => {
        window.location.href = '/quiz1'
     }, 2500)
})

let audio = document.querySelector('#audio-pao')
let div_audio = document.querySelector('.audio')

div_audio.addEventListener('click', () => {
    audio.play()
})

correto.addEventListener('click', () => {
    audio_correto.play()
})

errado.forEach(err => {
    err.addEventListener('click', () => {
        audio_erro.play()
})
})