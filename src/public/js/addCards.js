let div_newCard = document.querySelector('.newCard')
let div_newCard2 = document.querySelector('.newCard2')
let input_imagem = document.querySelector('#img_card')
let input_video = document.querySelector('#video_card')
let btn_enviar = document.querySelector('.addCard')
let enviar = document.querySelector('#enviar')


div_newCard.addEventListener('click', () => {
    input_imagem.click()
})

div_newCard2.addEventListener('click', () => {
    input_video.click()
})

btn_enviar.addEventListener('click', () => {
    enviar.click()
})


let btn_addCard = document.querySelector('.addCard')