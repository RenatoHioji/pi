const divClickable = document.querySelector("div[id='video']")
let div_imagem = document.querySelector('#geral')
let imagem = document.querySelector("#imagem")
let input_imagem = document.querySelector('#input-img')
let div_video = document.querySelector('#video')
let input_video = document.querySelector('#input-video')
let submit = document.querySelector("#submit_a")
let input_submit = document.querySelector("#enviar")
let imagem_upload = document.querySelector('#img-upload')
const rotacionar = document.getElementById("rotacionar")
const img = document.getElementById('imagem')
const rotacao = document.getElementById("rotacao")
let rotationDegrees = 0;
rotacionar.addEventListener("click", function () {
    rotationDegrees += 60;
    img.style.transform = `rotate(${rotationDegrees}deg)`;
    rotacao.value = rotationDegrees % 360;
    console.log(rotacao.value % 360)
});
div_imagem.addEventListener('click', () => {
    if (input_imagem.files.length === 0) {
        input_imagem.click();
    }
});

div_video.addEventListener('click', () => {
    input_video.click()
})

submit.addEventListener("click", () =>{
    input_submit.click()
})

input_imagem.addEventListener('change', function(event) {
    const file = this.files[0]
    if (file) {
        const reader = new FileReader()

        reader.onload = function () {
            imagem.style.backgroundImage = `url('${reader.result}')`
        }

        reader.readAsDataURL(file)
    }
})