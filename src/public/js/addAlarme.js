//modal notificação

modal = document.querySelector('#modal-notificacao')
btnModal = document.querySelector('#done')
som = document.querySelector('#audio-alarme')

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
