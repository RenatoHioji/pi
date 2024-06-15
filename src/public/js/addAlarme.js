//modal notificação
let modal = document.querySelector('#modal-notificacao')
let btnModal = document.querySelector('#done')
let som = document.querySelector('#audio-alarme')

btnModal.addEventListener('click', () => {
    modal.showModal()
    modal.classList.add('translate')
    som.play()
    
    setTimeout(() => {
        modal.classList.remove('translate')
    }, 4000)
    setTimeout(() => {
        modal.close()
    }, 4500)

})

//edição do tempo

