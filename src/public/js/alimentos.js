
function showVideo(nome, divSilabica, caminhoVideo){
    
    let container = document.querySelector('#modal-container')
    let modal = document.querySelector('#modal')
    let video = document.createElement('video')
    video.classList.add('video');
    video.controls = true
    let sourceVideo = document.createElement('source')
    sourceVideo.src = caminhoVideo
    sourceVideo.type = 'video/mp4'
    video.appendChild(sourceVideo)
    container.appendChild(video)

    let titulo = document.createElement('p')
    let silabas = document.createElement('p')
    titulo.textContent = nome
    silabas.textContent = divSilabica
    let sound = document.createElement('img')
    sound.src = '../svg/png/sound.png'
    let done = document.createElement('button')
    done.textContent = 'PRONTO'

    video.style.borderRadius = '7%'
    titulo.style.color = '#F15562'
    titulo.style.fontWeight = 'bold'
    titulo.style.fontSize = '30px'
    titulo.style.margin = '12px 0px'
    silabas.style.margin = '0px 0px'
    silabas.style.color = '#F15562'
    silabas.style.marginTop = '0px'
    silabas.style.fontSize = '28px'
    sound.style.marginBottom = '18px'
    done.style.padding = '10px 30px'
    done.style.backgroundColor = '#8ECE16'
    done.style.color ='#FFFFFF'
    done.style.fontWeight ='bold'
    done.style.fontSize ='20px'
    done.style.border = 'none'
    done.style.borderRadius = '20px'
    done.style.marginBottom= "5%"

    modal.appendChild(video)
    modal.appendChild(titulo)
    modal.appendChild(silabas)
    modal.appendChild(sound)
    modal.appendChild(done)
    
    container.classList.add('ativo')
    setTimeout(() => {

        modal.classList.add('ativo')
    }, 1)
}

function hideVideo(){
    let container = document.querySelector('#modal-container')
    let modal = document.querySelector('#modal')

    modal.classList.remove('ativo')
    setTimeout(() => {
        container.classList.remove('ativo')
        location.reload()
    }, 400)
}