const divClickable = document.querySelector("div[id='video']")
let div_imagem = document.querySelector('#imagem')
let input_imagem = document.querySelector('#input-img')
let div_video = document.querySelector('#video')
let input_video = document.querySelector('#input-video')
let submit = document.querySelector("#submit_a")
let input_submit = document.querySelector("#enviar")
let imagem_upload = document.querySelector('#img-upload')

div_imagem.addEventListener('click', () => {
    input_imagem.click()
})

div_video.addEventListener('click', () => {
    input_video.click()
})

submit.addEventListener("click", () =>{
    input_submit.click()
})


//imagem no input

input_imagem.addEventListener('change', function(event) {
    const file = this.files[0]

    if (file) {
        const reader = new FileReader()

        reader.onload = function () {
            div_imagem.style.backgroundImage = `url('${reader.result}')`
        }

        reader.readAsDataURL(file)
    }
})

input_video.addEventListener('change', function(event) {
    const file = this.files[0]

    if (file) {
        const reader = new FileReader()

        reader.onload = function () {
            div_video.style.backgroundImage = `url('${reader.result}')`
            console.log(imagem_upload)
            imagem_upload.style.visibility = 'hidden'
        }

        reader.readAsDataURL(file)
    }
})