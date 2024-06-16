const divClickable = document.querySelector("div[id='video']")
let div_imagem = document.querySelector('#imagem')
let input_imagem = document.querySelector('#input-img')
let div_video = document.querySelector('#video')
let input_video = document.querySelector('#input-video')


div_imagem.addEventListener('click', () => {
    input_imagem.click()
})

div_video.addEventListener('click', () => {
    input_video.click()
})