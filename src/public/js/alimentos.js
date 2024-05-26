//função para a vídeo educacional

function showVideo(){
    let container = document.querySelector('#modal-container')
    let modal = document.querySelector('#modal')

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
        container.classList.add('ativo')
        location.reload()
    }, 400)
}