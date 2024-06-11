//modal listas

modal = document.querySelector('#modal-listas')
btnModal = document.querySelector('.addList')
btnEnviar = document.querySelector('#enviar')
btnFechar = document.querySelector('#fechar')

btnModal.addEventListener('click', () => {
    modal.showModal()
    modal.classList.add('translate')
})

btnFechar.addEventListener('click', () => {
    modal.classList.remove('translate')
    modal.close()
})
