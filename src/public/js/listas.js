//modal listas

let modal = document.querySelector('#modal-listas')
let btnModal = document.querySelector('.addList')
let btnEnviar = document.querySelector('#enviar')
let btnFechar = document.querySelector('#fechar')
let form = document.querySelector('#form-listas')
let input_lista = document.querySelector('#nome_lista')

btnModal.addEventListener('click', () => {
    modal.showModal()
    modal.classList.add('translate')
})

form.addEventListener('submit', function() {
    input_lista.value = input_lista.value.toUpperCase()
})

btnFechar.addEventListener('click', () => {
    modal.classList.remove('translate')
    modal.close()
})
