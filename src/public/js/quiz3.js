//lógica do game 1

let correto = document.querySelector('#correto')
let check = document.querySelector('.levels .nivel:nth-child(4)')
let img_check = document.createElement('img')
img_check.src = '/svg/png/img-check.png'

correto.addEventListener('click', () => {
    setTimeout(() => {
        check.innerHTML= ''
       check.appendChild(img_check)
    }, 2000)
    setTimeout(() => {
        window.location.href= '/parabens'
     }, 2500)
   })


let audio = document.querySelector('#audio-ovo')
let div_audio = document.querySelector('.audio')
   
div_audio.addEventListener('click', () => {
     audio.play()
})